/*
 * 日程調整コアロジック(ブラウザ / GAS / Node 共通)
 * - GAS側では同一内容を core.gs として配置します(README参照)
 * - 日本標準時(UTC+9・夏時間なし)固定で計算します
 */
var JST_OFFSET_MS = 9 * 3600 * 1000;
var DAY_MS = 86400000;

function pad2_(n) { return (n < 10 ? '0' : '') + n; }

function jstParts_(ms) {
  var d = new Date(ms + JST_OFFSET_MS);
  return {
    y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(),
    dow: d.getUTCDay(), hh: d.getUTCHours(), mm: d.getUTCMinutes()
  };
}

function jstDateStr_(ms) {
  var p = jstParts_(ms);
  return p.y + '-' + pad2_(p.m) + '-' + pad2_(p.d);
}

// 'YYYY-MM-DD' + 時刻(JST) -> epoch ms
function jstToMs_(dateStr, hh, mm) {
  var a = dateStr.split('-');
  return Date.UTC(+a[0], +a[1] - 1, +a[2], hh || 0, mm || 0, 0) - JST_OFFSET_MS;
}

function toJstIso_(ms) {
  var p = jstParts_(ms);
  return p.y + '-' + pad2_(p.m) + '-' + pad2_(p.d) + 'T' + pad2_(p.hh) + ':' + pad2_(p.mm) + ':00+09:00';
}

/*
 * 候補スロットの生成
 * opt: {
 *   startDate, endDate: 'YYYY-MM-DD'(JST・両端含む),
 *   durationMin, stepMin, dayStartMin, dayEndMin,
 *   includeWeekend, skipLunch, lunchStartMin, lunchEndMin,
 *   holidays: {'YYYY-MM-DD': true}, nowMs
 * }
 */
function generateSlots_(opt) {
  var slots = [];
  var step = opt.stepMin || 30;
  var lunchS = opt.lunchStartMin == null ? 720 : opt.lunchStartMin;
  var lunchE = opt.lunchEndMin == null ? 780 : opt.lunchEndMin;
  var holidays = opt.holidays || {};
  var nowMs = opt.nowMs || 0;
  var dayMs = jstToMs_(opt.startDate, 0, 0);
  var lastMs = jstToMs_(opt.endDate, 0, 0);

  for (; dayMs <= lastMs; dayMs += DAY_MS) {
    var dateStr = jstDateStr_(dayMs);
    var dow = jstParts_(dayMs).dow;
    if (!opt.includeWeekend && (dow === 0 || dow === 6)) continue;
    if (holidays[dateStr]) continue;
    for (var t = opt.dayStartMin; t + opt.durationMin <= opt.dayEndMin; t += step) {
      var s = dayMs + t * 60000;
      if (s < nowMs) continue;
      if (opt.skipLunch && t < lunchE && t + opt.durationMin > lunchS) continue;
      slots.push({ start: s, end: s + opt.durationMin * 60000, date: dateStr });
    }
  }
  return slots;
}

/*
 * 各スロットで予定が埋まっているメンバーを判定し、欠席者数が許容範囲内のものだけ返す
 * busyMap: { id: [{start: ms, end: ms}, ...] }
 */
function findCandidates_(slots, busyMap, memberIds, maxAbsent) {
  var out = [];
  for (var i = 0; i < slots.length; i++) {
    var sl = slots[i];
    var busy = [];
    for (var j = 0; j < memberIds.length; j++) {
      var list = busyMap[memberIds[j]] || [];
      for (var k = 0; k < list.length; k++) {
        if (list[k].start < sl.end && list[k].end > sl.start) {
          busy.push(memberIds[j]);
          break;
        }
      }
    }
    if (busy.length <= maxAbsent) {
      out.push({ start: sl.start, end: sl.end, date: sl.date, busy: busy });
    }
  }
  return out;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    jstParts_: jstParts_, jstDateStr_: jstDateStr_, jstToMs_: jstToMs_, toJstIso_: toJstIso_,
    generateSlots_: generateSlots_, findCandidates_: findCandidates_, DAY_MS: DAY_MS
  };
}
