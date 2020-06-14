const CATEGORY = [
  {
    id: 0,
    name: 'Nhạc Việt Nam',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/c/1/b/5c1b63068c4d7b09eb3566fd2c83cd2b.jpg',
  },
  {
    id: 1,
    name: 'Nhạc Âu Mỹ',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/8/1/0/0810b16ee3290041e524b8cc1e692f85.jpg',
  },
  {
    id: 2,
    name: 'Nhạc Hàn Quốc',
    picture:
      'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/4/1/e/941e9faeb62f13680539ab021b6b930c.jpg',
  },
];

const TRACKS = [
  [
    // ------------------------------ V-POP ------------------------------

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
      title: 'Không sao đâu, em đây rồi',
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
      title: 'Em không sai chúng ta saii',
      singer: 'Erik',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
      audioUrl:
        'file:///Volumes/Entertaiment/Music/Lossless/Anh_Mo-Anh_Khang.mp3',
    },
  ],

  //--------------------------------- US-UK ---------------------------

  [
    {
      id: 0,
      title: 'Señorita',
      singer: 'Shawn Mendes; Camila Cabello',
      picture: 'https://data.chiasenhac.com/data/cover/107/106207.jpg',
      audioUrl:
        'https://data19.chiasenhac.com/downloads/2020/6/2019236-b51de825/128/Senorita%20-%20Shawn%20Mendes_%20Camila%20Cabello.mp3',
    },
    {
      id: 1,
      title: 'Love Me Like You do',
      singer: 'Ellie Goulding',
      picture: 'https://data.chiasenhac.com/data/cover/38/37557.jpg',
      audioUrl:
        'https://data26.chiasenhac.com/downloads/1442/6/1441267-ee50a5a9/128/Love%20Me%20Like%20You%20Do%20-%20Ellie%20Goulding.mp3',
    },
    {
      id: 2,
      title: 'One Call Away',
      singer: 'Charlie Puth',
      picture: 'https://data.chiasenhac.com/data/cover/46/45246.jpg',
      audioUrl:
        'https://data22.chiasenhac.com/downloads/1540/6/1539612-330ce8e7/128/One%20Call%20Away%20-%20Charlie%20Puth.mp3',
    },
    {
      id: 3,
      title: 'Break My Heart',
      singer: 'Dua Lipa',
      picture: 'https://data.chiasenhac.com/data/cover/119/118040.jpg',
      audioUrl:
        'https://data20.chiasenhac.com/downloads/2076/6/2075602-c5612e73/128/Break%20My%20Heart%20-%20Dua%20Lipa.mp3',
    },
    {
      id: 4,
      title: "We Don't Talk Anymore",
      singer: 'Charlie Puth, Selena Gomez',
      picture: 'https://data.chiasenhac.com/data/cover/53/52514.jpg',
      audioUrl:
        'https://data2.chiasenhac.com/downloads/1622/6/1621445-8f90a551/128/We%20Don_t%20Talk%20Anymore%20-%20Charlie%20Puth_%20Se.mp3',
    },
    {
      id: 5,
      title: 'How You Love U & I (3LAU Mashup)',
      singer: '3LAU, Galantis',
      picture: 'https://data.chiasenhac.com/data/cover/54/53788.jpg',
      audioUrl:
        'https://data2.chiasenhac.com/downloads/1635/6/1634757-74f0138e/128/How%20You%20Love%20U%20I%203LAU%20Mashup_%20-%203LAU_%20Ga.mp3',
    },
    {
      id: 6,
      title: 'This Girl',
      singer: "Kungs, Cookin' On 3 Burners",
      picture: 'https://data.chiasenhac.com/data/cover/58/57423.jpg',
      audioUrl:
        'https://data05.chiasenhac.com/downloads/1668/6/1667488-38bea5be/128/This%20Girl%20-%20Kungs_%20Cookin_%20On%203%20Burners.mp3',
    },
    {
      id: 7,
      title: 'That Girl',
      singer: 'Olly Murs',
      picture: 'https://data.chiasenhac.com/data/cover/66/65717.jpg',
      audioUrl:
        'https://data3.chiasenhac.com/downloads/1740/6/1739574-04b9b9a9/128/That%20Girl%20-%20Olly%20Murs.mp3',
    },
    {
      id: 8,
      title: 'Outside',
      singer: 'Calvin Harris, Ellie Goulding',
      picture: 'https://data.chiasenhac.com/data/cover/33/32114.jpg',
      audioUrl:
        'https://data.chiasenhac.com/downloads/1387/6/1386761-a4b86987/128/Outside%20-%20Calvin%20Harris_%20Ellie%20Goulding.mp3',
    },
  ],

  // --------------------------------- K-POP

  [
    {
      id: 0,
      title: 'sefjsef',
      singer: 'Jack, K-ICM',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/2/5/3/425334e6f252b8c34d74d16177a5eb9d.jpg',
      audioUrl:
        'https://feeds.soundcloud.com/stream/835204426-user510635516-b-c-ph-n.mp3',
    },
    {
      id: 1,
      title: 'Love Me Like You do',
      singer: 'Ellie Goulding',
      picture: 'https://data.chiasenhac.com/data/cover/38/37557.jpg',
      audioUrl:
        'https://data26.chiasenhac.com/downloads/1442/6/1441267-ee50a5a9/128/Love%20Me%20Like%20You%20Do%20-%20Ellie%20Goulding.mp3',
    },
    {
      id: 2,
      title: 'Không sao đâu, em đây rồi',
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
      title: 'Em không sai chúng ta saii',
      singer: 'Erik',
      picture:
        'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/7/4/0/d/740d5e0fd272d2421d441e9fd5c08fdd.jpg',
      audioUrl:
        'file:///Volumes/Entertaiment/Music/Lossless/Anh_Mo-Anh_Khang.mp3',
    },
  ],
];

export { TRACKS, CATEGORY };
