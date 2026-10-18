// 「ホーム画面に追加(アプリとしてインストール)」の条件を満たすための最小のService Worker。
// 画面や予定のデータはキャッシュしません(更新はそのまま反映され、通信もブラウザが通常どおり処理します)。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 何もしない */ });
