const CATEGORY = [
  {
    id: 0,
    name: 'Nhạc Trẻ',
    picture:
      'http://photo-zmp3.zadn.vn/thumb/240_240/cover/9/b/f/b/9bfbd430610daa3f33a82aa976e3ec72.jpg',
  },
  {
    id: 1,
    name: 'Nhạc Acoustic',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/8/d/e/4/8de40f187b75e652974430bbfe90e699.jpg',
  },
  {
    id: 2,
    name: 'Nhạc Không Lời',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/4/b/2/54b29cdb5268301d104fa2cfb1f13f80.jpg',
  },
];

const TRACKS = [
  [
    // ------------------------------ Nhac Tre ------------------------------

    {
      id: 0,
      title: 'Bạc Phận',
      singer: 'Jack, K-ICM',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/2/5/3/425334e6f252b8c34d74d16177a5eb9d.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204426-user510635516-b-c-ph-n.mp3',
    },
    {
      id: 1,
      title: '24h',
      singer: 'LyLy, Magazine',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/4/d/c54df0e46c902b5b43602c57c2b77df4.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835212994-user510635516-24h.mp3',
    },
    {
      id: 2,
      title: 'Không sao mà, em đây rồi',
      singer: 'Sunny Hạ Linh',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/8/f/f/48ffdb72c21e5865fa0f2f1f269f0e16.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204324-user510635516-kh-ng-sao-m-em-y-r-i.mp3',
    },
    {
      id: 3,
      title: 'Cảm ơn vì đã nói câu từ chối',
      singer: 'Hakoota Dũng Hà, Ái Phương',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/7/0/70bad3af7fbe20920bbea933ef17ac9e_1489818951.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204402-user510635516-c-m-n-v-n-i-c-u-t-ch-i.mp3',
    },
    {
      id: 4,
      title: 'Anh đang nơi đâu',
      singer: 'Miu Lê',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/f/ffaa21f0110ad661fe0741b5acb2bf10_1461581144.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835196092-user510635516-anh-dang-noi-dau.mp3',
    },
    {
      id: 5,
      title: 'Thằng điên',
      singer: 'JustaTeeTee, Phương Ly',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835213687-user510635516-thang-dien.mp3',
    },
    {
      id: 6,
      title: 'Anh Mơ',
      singer: 'Anh Khang',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/b/e/be470579ff1b903cbe28dcf7fdd1b1ce_1322733762.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204435-user510635516-anh-mo.mp3',
    },
    {
      id: 7,
      title: 'Không thể cùng nhau suốt kiếp',
      singer: 'Hoà Minzy, Mr Siro',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/7/8/6/17861cfa5213a52daec2c556101fb421.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204300-user510635516-kh-ng-th-c-ng-nhau-su-t-ki-p.mp3',
    },
    {
      id: 8,
      title: 'Sau tất cả',
      singer: 'Erik',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/5/5/55a2e33a5d4d6a70f5144181c28eacb0_1452855672.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840018982-user510635516-sau-t-t-c.mp3',
    },
  ],

  //--------------------------------- Acoustic ---------------------------

  [
    {
      id: 0,
      title: '1 Phút',
      singer: 'Andiez',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/f/d/fd4276c762a53e86ec980bb373a5a805_1504774753.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448897-user510635516-1-phut.mp3',
    },
    {
      id: 1,
      title: 'Tình Yêu Màu Nắng (Acoustic Version)',
      singer: 'Đoàn Thúy Trang',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/3/3/3364a024ebabc97c1ddc40e9f464ae22_1390150479.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448762-user510635516-tinh-yeu-mau-nang-acoustic.mp3',
    },
    {
      id: 2,
      title: 'Gió Vẫn Hát',
      singer: 'Long Phạm',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/3/5/9/23595cbd08f3e37f9e42fc163f6d08aa.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448834-user510635516-gi-v-n-h-t.mp3',
    },
    {
      id: 3,
      title: 'Tình Yêu Chậm Trễ',
      singer: 'MONSTAR',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/b/db24cba9ff431ccbce0a3683c56a461e_1512721186.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448774-user510635516-t-nh-y-u-ch-m-tr.mp3',
    },
    {
      id: 4,
      title: 'Vẽ (Acoustic Version)',
      singer: 'Trúc Nhân',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/c/2/c270eb7dd0e8b6b2e46e7b8efb3a1362_1417392544.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448705-user510635516-ve-acoustic-version.mp3',
    },
    {
      id: 5,
      title: 'Chỉ Còn Những Mùa Nhớ (Acoustic Version)',
      singer: 'Bảo Trâm',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/3/13888471b585623e7b6b753af56f7676_1381718811.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448879-user510635516-ch-c-n-nh-ng-m-a-nh-acoustic.mp3',
    },
    {
      id: 6,
      title: 'Tớ Thích Cậu (Acoustic)',
      singer: 'Han Sara',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/c/dca7dbd284a9550ce0f16f5d0a7bab4f_1502787568.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448738-user510635516-t-th-ch-c-u-acoustic.mp3',
    },
    {
      id: 7,
      title: 'Có Điều Gì Sao Không Nói Cùng Anh (Acoustic)',
      singer: 'Trung Quân Idol',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/9/d/9d4747a5997320d008066fc845a587ee_1496217968.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448870-user510635516-c-i-u-g-sao-kh-ng-n-i-c-ng-anh.mp3',
    },
    {
      id: 8,
      title: 'Quá Khứ Chỉ Nên Là Quá Khứ',
      singer: 'Andiez',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/9/6/1/c961ceb227ee488022b4ff93de06a28c.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840448813-user510635516-qu-kh-ch-n-n-l-qu-kh.mp3',
    },
  ],

  // ----------------------------- Nhac Khong Loi ------------------------

  [
    {
      id: 0,
      title: 'Buddha Says',
      singer: 'Funa',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/5/e/5ebba7cd4e665957c4a28548d5120576_1352018491.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840466285-user510635516-buddha-says.mp3',
    },
    {
      id: 1,
      title: 'Asked The Buddha',
      singer: 'Funa',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/5/e/5ebba7cd4e665957c4a28548d5120576_1352018491.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840531916-user510635516-asked-the-buddha.mp3',
    },
    {
      id: 2,
      title: 'Sound Of Buddha',
      singer: 'Buddhism Crystals Music',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/d/c/dcbdfd74dbc950128110851f2a8689c2_1369557656.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468775-user510635516-sound-of-buddha.mp3',
    },
    {
      id: 3,
      title: 'Crystal Avoloitesvara',
      singer: 'Buddhism Crystals Music',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/6/e/6e2ce9c8f4785eb31f88e727b06ab120_1363609505.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468850-user510635516-crystal-avoloitesvara.mp3',
    },
    {
      id: 4,
      title: 'Om Mani Padme Hum',
      singer: 'Various Artists',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/6/e/6e2ce9c8f4785eb31f88e727b06ab120_1346300516.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468820-user510635516-om-mani-padme-hum.mp3',
    },
    {
      id: 5,
      title: 'Hoa Liên Chảy Nước',
      singer: 'Various Artists',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/a/1a18217e42ba5a0a955c074be11c216d_1329403857.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468823-user510635516-aeu-ae-hoa-lien-chay-nuoc.mp3',
    },
    {
      id: 6,
      title: 'Make A Wish In Front Of The Buddha',
      singer: 'Funa',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/5/e/5ebba7cd4e665957c4a28548d5120576_1352018491.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468829-user510635516-make-a-wish-in-front-of-the.mp3',
    },
    {
      id: 7,
      title: 'Nhạc Kinh',
      singer: 'Various Artists',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/a/1a18217e42ba5a0a955c074be11c216d_1330492157.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468835-user510635516-ae-u-nhac-kinh.mp3',
    },
    {
      id: 8,
      title: 'Nam Mô A Di Đà Phật',
      singer: 'Various Artists',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/1/a/1a18217e42ba5a0a955c074be11c216d_1329403857.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/840468853-user510635516-ae-1-4-1-2-nam-mo-a-di-da-phat.mp3',
    },
  ],
];

export { TRACKS, CATEGORY };
