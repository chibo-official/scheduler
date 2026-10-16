/*
 * 初期登録メンバー・グループ
 * ここを編集すると、アプリの初期表示メンバーが変わります。
 *   kind: 'staff'(社員) / 'room'(会議室・設備)
 *   id  : Googleカレンダーのメールアドレス
 */
window.APP_MEMBERS = [
  { id: 'chibo.nakai@gmail.com', name: '中井社長', kind: 'staff' },
  { id: 'chibo.nakasuji@gmail.com', name: '中筋', kind: 'staff' },
  { id: 'chibo.itou@gmail.com', name: '伊藤', kind: 'staff' },
  { id: 'chibo.naito@gmail.com', name: '内藤', kind: 'staff' },
  { id: 'chibo.tomiyama@gmail.com', name: '冨山', kind: 'staff' },
  { id: 'chibo.maeoka@gmail.com', name: '前岡', kind: 'staff' },
  { id: 'chibo.koyama@gmail.com', name: '小山', kind: 'staff' },
  { id: 'chibo.t.hara@gmail.com', name: '原', kind: 'staff' },
  { id: 'chibo.wada@gmail.com', name: '和田', kind: 'staff' },
  { id: 'chibo.otomo@gmail.com', name: '大友', kind: 'staff' },
  { id: 'chibo.oota@gmail.com', name: '太田', kind: 'staff' },
  { id: 'chibo.ando@gmail.com', name: '安藤', kind: 'staff' },
  { id: 'chibo.kunai@gmail.com', name: '宮内本部長', kind: 'staff' },
  { id: 'chibo.t.ogawa@gmail.com', name: '小川次長', kind: 'staff' },
  { id: 'chibo.h.ogawa@gmail.com', name: '小川部長', kind: 'staff' },
  { id: 'chibo.kobayashi@gmail.com', name: '小林次長', kind: 'staff' },
  { id: 'chibo.yamashita@gmail.com', name: '山下', kind: 'staff' },
  { id: 'chibo.yamaguchi@gmail.com', name: '山口', kind: 'staff' },
  { id: 'chibo.yamasaki@gmail.com', name: '山﨑', kind: 'staff' },
  { id: 'chibo.yamamoto3@gmail.com', name: '山本', kind: 'staff' },
  { id: 'chibo.iwatayui@gmail.com', name: '岩田', kind: 'staff' },
  { id: 'chibo.kawabe@gmail.com', name: '川邊', kind: 'staff' },
  { id: 'chibo.hiraoka@gmail.com', name: '平岡', kind: 'staff' },
  { id: 'chibo.s.miyotani@gmail.com', name: '御代谷', kind: 'staff' },
  { id: 'chibo.narita@gmail.com', name: '成田本部長', kind: 'staff' },
  { id: 'chibo.muraoka@gmail.com', name: '村岡', kind: 'staff' },
  { id: 'chibo.matsuura@gmail.com', name: '松浦', kind: 'staff' },
  { id: 'chibo.moriyama@gmail.com', name: '森山', kind: 'staff' },
  { id: 'chibo.morino@gmail.com', name: '森野', kind: 'staff' },
  { id: 'chibo.kitsukawa@gmail.com', name: '橘川', kind: 'staff' },
  { id: 'chibo.sakuragi@gmail.com', name: '櫻木', kind: 'staff' },
  { id: 'chibo.k.nitta@gmail.com', name: '新田', kind: 'staff' },
  { id: 'chibo.kawata@gmail.com', name: '河田', kind: 'staff' },
  { id: 'chibo.kono@gmail.com', name: '河野', kind: 'staff' },
  { id: 'chibo.tsuzaki@gmail.com', name: '津﨑', kind: 'staff' },
  { id: 'chibo.asahara@gmail.com', name: '松下', kind: 'staff' },
  { id: 'chibo.umino@gmail.com', name: '海野', kind: 'staff' },
  { id: 'chibo.shimizu@gmail.com', name: '清水', kind: 'staff' },
  { id: 'chibo.toguchi@gmail.com', name: '渡久地', kind: 'staff' },
  { id: 'chibo.machigashira@gmail.com', name: '町頭', kind: 'staff' },
  { id: 'chibo.aizawa@gmail.com', name: '相澤専務', kind: 'staff' },
  { id: 'chibo.ishigaki@gmail.com', name: '石垣次長', kind: 'staff' },
  { id: 'chibo.shigemitsu@gmail.com', name: '重光', kind: 'staff' },
  { id: 'chibo.kanayama@gmail.com', name: '金山', kind: 'staff' },

  { id: 'chibo.zoom@gmail.com', name: 'zoom予約', kind: 'room' },
  { id: 'chibo.seminar1@gmail.com', name: '会議室1', kind: 'room' },
  { id: 'chibo.seminar2@gmail.com', name: '会議室2', kind: 'room' },
  { id: 'chibo.meeting1@gmail.com', name: '商談1', kind: 'room' },
  { id: 'chibo.meeting2@gmail.com', name: '商談2', kind: 'room' },
  { id: 'chibo.meeting3@gmail.com', name: '商談3', kind: 'room' },
  { id: 'chibo.meeting4@gmail.com', name: '商談4', kind: 'room' },
  { id: 'chibo.guest@gmail.com', name: '応接室', kind: 'room' }
];

/* ワンクリックで選択できるグループ(ids はメールアドレス) */
window.APP_GROUPS = [
  {
    name: '営業推進本部',
    ids: [
      'chibo.koyama@gmail.com', 'chibo.kawata@gmail.com', 'chibo.naito@gmail.com',
      'chibo.tomiyama@gmail.com', 'chibo.tsuzaki@gmail.com', 'chibo.asahara@gmail.com',
      'chibo.itou@gmail.com', 'chibo.sakuragi@gmail.com'
    ]
  },
  {
    name: '役員・本部長',
    ids: [
      'chibo.nakai@gmail.com', 'chibo.aizawa@gmail.com',
      'chibo.kunai@gmail.com', 'chibo.narita@gmail.com'
    ]
  }
];
