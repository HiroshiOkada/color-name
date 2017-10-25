const nameToHexData = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '778899',
  lightslategrey: '778899',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '00ff00',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'ff00ff',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '663399',
  red: 'ff0000',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'ffffff',
  whitesmoke: 'f5f5f5',
  yellow: 'ffff00',
  yellowgreen: '9acd32',
  鉄紺: '232538',
  鉄色: '244344',
  黒: '262626',
  鉄黒: '262626',
  ボトルグリーン: '264435',
  墨: '313131',
  るり紺: '324784',
  紫紺: '402949',
  オリーブグリーン: '565838',
  焦茶: '594639',
  すす竹色: '605448',
  オリーブ: '605627',
  錆色: '664134',
  褐色: '763900',
  古代紫: '775686',
  グレイ: '797979',
  灰色: '797979',
  灰茶: '866955',
  鼠色: '868686',
  朽葉色: '897868',
  くちば色: '897868',
  アッシュグレイ: '939393',
  小豆色: '946259',
  あずき色: '946259',
  ミッドナイトブルー: '00152d',
  ビリヤードグリーン: '004840',
  マリンブルー: '005175',
  深緑: '005731',
  青: '0067c0',
  ピーコックブルー: '00708b',
  ピーコックグリーン: '007f91',
  マラカイトグリーン: '008047',
  浅葱色: '0087aa',
  あさぎ色: '0087aa',
  青緑: '0090a8',
  セルリアンブルー: '0b74af',
  もえぎ色: '15543b',
  ビリジアン: '156f5c',
  納戸色: '166a88',
  ブラック: '1c1c1c',
  ランプブラック: '1c1c1c',
  濃藍: '20324e',
  こいあい: '20324e',
  シアン: '219ddd',
  コバルトブルー: '2863ab',
  グリーン: '2a9b50',
  藍色: '2e4b71',
  ブルー: '3170b9',
  ネービーブルー: '333c5e',
  紺色: '333c5e',
  るり色: '3451a4',
  紺藍: '35357d',
  常磐色: '357c4c',
  ときわ色: '357c4c',
  オリエンタルブルー: '37438f',
  勝色: '383c57',
  かちいろ: '383c57',
  ターコイズブルー: '399ecc',
  はなだ色: '3c639b',
  アイアンブルー: '3d496b',
  プルシャンブルー: '3d496b',
  紺青: '3d496b',
  こんじょう: '3d496b',
  露草色: '3d7cce',
  黒茶: '3e2e28',
  フォレストグリーン: '3e795c',
  パンジー: '40317e',
  ウルトラマリンブルー: '414fa3',
  群青色: '414fa3',
  ぐんじょう色: '414fa3',
  バーガンディー: '452a35',
  なす紺: '47384f',
  若竹色: '49a581',
  セピア: '4a3b2a',
  ききょう色: '4a49ad',
  千歳緑: '4a6956',
  ちとせみどり: '4a6956',
  かきつばた色: '4c5dab',
  エメラルドグリーン: '4da573',
  緑: '4db56a',
  チャコールグレイ: '4e4854',
  アイビーグリーン: '516a39',
  ナイルブルー: '5190a4',
  チョコレート: '52372f',
  ボルドー: '55353b',
  スレートグレイ: '56555e',
  バーントアンバー: '5b462a',
  コバルトグリーン: '5dc288',
  藍鼠: '5e7184',
  あいねず: '5e7184',
  江戸紫: '5f4c86',
  緑青色: '5f836d',
  ろくしょう色: '5f836d',
  サックスブルー: '627da1',
  鳩羽色: '675d7e',
  はとば色: '675d7e',
  マルーン: '682a2b',
  オリーブドラブ: '68624e',
  藤納戸: '6869a8',
  新橋色: '69aac6',
  錆浅葱: '6c8d9b',
  海老茶: '6d3d33',
  バイオレット: '6d52ab',
  菫色: '6d52ab',
  すみれ色: '6d52ab',
  松葉色: '6e815c',
  紅海老茶: '703b32',
  青紫: '704cbc',
  しょうぶ色: '7051aa',
  鶯茶: '70613a',
  鶯色: '71714a',
  うぐいす色: '71714a',
  草色: '72814b',
  茶色: '734e30',
  ブラウン: '734e31',
  スチールグレイ: '736c79',
  みる色: '736f55',
  グラスグリーン: '737c3e',
  ココアブラウン: '754c38',
  栗色: '754c38',
  ヒヤシンス: '7586bb',
  ウィスタリア: '776ed2',
  利休鼠: '787c7a',
  鉛色: '797a88',
  苔色: '7a7f46',
  水浅葱: '7a99aa',
  青竹色: '7aaaac',
  とび色: '7d483e',
  ローアンバー: '7f5c13',
  青磁色: '80aa9f',
  ブロンズ: '815a2b',
  ミントグリーン: '81cc91',
  ワインレッド: '83274e',
  モーブ: '835fa8',
  ヘリオトロープ: '836dc5',
  白群: '84b5cf',
  びゃくぐん: '84b5cf',
  リーフグリーン: '879d4e',
  弁柄色: '8a4031',
  べんがら色: '8a4031',
  檜皮色: '8a604f',
  ひわだ色: '8a604f',
  かめのぞき: '8cb4ce',
  ホリゾンブルー: '91b2d2',
  赤錆色: '923a21',
  勿忘草色: '92afe4',
  わすれなぐさ色: '92afe4',
  ローズグレイ: '93848b',
  藤紫: '948bdb',
  スカイブルー: '95c0ec',
  空色: '95c0ec',
  萌黄: '96aa3d',
  もえぎ: '96aa3d',
  蘇芳: '974b52',
  すおう: '974b52',
  れんが色: '974e33',
  カーキー: '9a753a',
  シーグリーン: '9ab961',
  ラベンダー: '9e8eae',
  茶鼠: '9f9190',
  茜色: 'a0283a',
  あかね色: 'a0283a',
  藤色: 'a09bd8',
  シルバーグレイ: 'a0a0a0',
  銀鼠: 'a0a0a0',
  ぎんねず: 'a0a0a0',
  紅樺色: 'a14641',
  べにかば色: 'a14641',
  パープル: 'a260bf',
  紫: 'a260bf',
  タン: 'a56f3f',
  コルク: 'a58161',
  バーントシェンナ: 'a8593c',
  土色: 'a96e2d',
  若草色: 'a9b735',
  水色: 'a9ceec',
  ベビーブルー: 'abbdda',
  テラコッタ: 'ac5647',
  パールグレイ: 'adadad',
  えんじ: 'ae3846',
  コチニールレッド: 'af3168',
  若葉色: 'afc297',
  アップルグリーン: 'b0d3a8',
  赤茶: 'b15237',
  アンバー: 'b37d40',
  らくだ色: 'b67a52',
  ルビーレッド: 'b91e68',
  紅赤: 'b92946',
  肉桂色: 'b97761',
  にっけい色: 'b97761',
  黄緑: 'b9c42f',
  たいしゃ: 'ba6432',
  スカイグレイ: 'babac6',
  ストロベリー: 'bb1e5e',
  ローシェンナ: 'bb6421',
  黄茶: 'bb6421',
  紅色: 'bd1e48',
  樺色: 'bd4a1d',
  かば色: 'bd4a1d',
  抹茶色: 'bdbf92',
  シャトルーズグリーン: 'bdd458',
  カーマイン: 'be1e3e',
  赤: 'bf1e33',
  イエローオーカー: 'c18a39',
  黄土色: 'c18a39',
  ベージュ: 'c1ab96',
  牡丹色: 'c24dae',
  ぼたん色: 'c24dae',
  あやめ色: 'c27bc8',
  ライラック: 'c2a2da',
  ひわ色: 'c2c05c',
  金茶: 'c47600',
  赤紫: 'c54ea0',
  バフ: 'c5996d',
  こはく色: 'c67400',
  ローズレッド: 'c74f90',
  オーキッド: 'c7a1d7',
  マゼンタ: 'c949a2',
  オールドローズ: 'c97f96',
  砂色: 'c9b9a8',
  白緑: 'cadbcf',
  びゃくろく: 'cadbcf',
  つつじ色: 'cb4b94',
  キャロットオレンジ: 'cc572c',
  芥子色: 'cda966',
  からし色: 'cda966',
  シグナルレッド: 'ce314a',
  チェリーピンク: 'cf61a5',
  ばら色: 'd34778',
  鉛丹色: 'd3503c',
  えんたん色: 'd3503c',
  ローズ: 'd94177',
  小麦色: 'd9a46d',
  きはだ色: 'd9cb65',
  ポピーレッド: 'dd4157',
  アプリコット: 'dda273',
  杏色: 'dda273',
  トマトレッド: 'de424c',
  レッド: 'de424c',
  スカーレット: 'de4335',
  柿色: 'e06030',
  紅梅色: 'e08899',
  こうばい色: 'e08899',
  レグホーン: 'e1c59b',
  からくれない: 'e3557f',
  桃色: 'e38698',
  ブロンド: 'e3b466',
  アイボリー: 'e3d4ca',
  象牙色: 'e3d4ca',
  ぞうげ色: 'e3d4ca',
  黄赤: 'e45e00',
  レモンイエロー: 'e8c800',
  クリームイエロー: 'e8d5af',
  ピンク: 'eb97a8',
  ピーチ: 'ebc0af',
  バーミリオン: 'ed514e',
  朱色: 'ed514e',
  金赤: 'ed542a',
  赤橙: 'ed551b',
  紅緋: 'ee5145',
  べにひ: 'ee5145',
  刈安色: 'eed67e',
  かりやす色: 'eed67e',
  黄丹: 'ef6d3e',
  おうに: 'ef6d3e',
  ローズピンク: 'ef93b6',
  生成り色: 'f0e2e0',
  きなり色: 'f0e2e0',
  ネールピンク: 'f1beb1',
  スノーホワイト: 'f1f1f1',
  ホワイト: 'f1f1f1',
  白: 'f1f1f1',
  ネープルスイエロー: 'f2c26b',
  胡粉色: 'f2e8ec',
  ごふん色: 'f2e8ec',
  ゴールデンイエロー: 'f39a38',
  肌色: 'f4be9b',
  カナリーイエロー: 'f7d54e',
  エクルベイジュ: 'f8cfae',
  とき色: 'f9a1d0',
  蜜柑色: 'fa8000',
  卵色: 'fabe6f',
  中黄: 'fad43a',
  シェルピンク: 'fbccc3',
  うこん色: 'fcac00',
  オレンジ: 'fd7e00',
  橙色: 'fd7e00',
  マンダリンオレンジ: 'fd951e',
  チャイニーズレッド: 'ff5d20',
  さんご色: 'ff87a0',
  コーラルレッド: 'ff87a0',
  マリーゴールド: 'ffa000',
  山吹色: 'ffa500',
  サーモンピンク: 'ffa594',
  こうじ色: 'ffa75e',
  ひまわり色: 'ffb500',
  クロムイエロー: 'ffbc00',
  黄色: 'ffbe00',
  たんぽぽ色: 'ffbe00',
  ベビーピンク: 'ffc9d2',
  イエロー: 'ffcc00',
  ジョンブリアン: 'ffcc00',
  桜色: 'ffdbed'
}

const hexToNameData = {
  '191970': {
    css3: ['MidnightBlue']
  },
  '232538': {
    jis: ['鉄紺']
  },
  '244344': {
    jis: ['鉄色']
  },
  '262626': {
    jis: ['黒', '鉄黒']
  },
  '264435': {
    jis: ['ボトルグリーン']
  },
  '313131': {
    jis: ['墨']
  },
  '324784': {
    jis: ['るり紺']
  },
  '402949': {
    jis: ['紫紺']
  },
  '565838': {
    jis: ['オリーブグリーン']
  },
  '594639': {
    jis: ['焦茶']
  },
  '605448': {
    jis: ['すす竹色']
  },
  '605627': {
    jis: ['オリーブ']
  },
  '663399': {
    css4: ['RebeccaPurple']
  },
  '664134': {
    jis: ['錆色']
  },
  '696969': {
    css3: ['DimGray', 'DimGrey']
  },
  '708090': {
    css3: ['SlateGray', 'SlateGrey']
  },
  '763900': {
    jis: ['褐色']
  },
  '775686': {
    jis: ['古代紫']
  },
  '778899': {
    css3: ['LightSlateGray', 'LightSlateGrey']
  },
  '797979': {
    jis: ['グレイ', '灰色']
  },
  '800000': {
    css3: ['Maroon']
  },
  '800080': {
    css3: ['Purple']
  },
  '808000': {
    css3: ['Olive']
  },
  '808080': {
    css3: ['Gray', 'Grey']
  },
  '866955': {
    jis: ['灰茶']
  },
  '868686': {
    jis: ['鼠色']
  },
  '897868': {
    jis: ['朽葉色', 'くちば色']
  },
  '939393': {
    jis: ['アッシュグレイ']
  },
  '946259': {
    jis: ['小豆色', 'あずき色']
  },
  f0f8ff: {
    css3: ['AliceBlue']
  },
  faebd7: {
    css3: ['AntiqueWhite']
  },
  '00ffff': {
    css3: ['Aqua', 'Cyan']
  },
  '7fffd4': {
    css3: ['Aquamarine']
  },
  f0ffff: {
    css3: ['Azure']
  },
  f5f5dc: {
    css3: ['Beige']
  },
  ffe4c4: {
    css3: ['Bisque']
  },
  '000000': {
    css3: ['Black']
  },
  ffebcd: {
    css3: ['BlanchedAlmond']
  },
  '0000ff': {
    css3: ['Blue']
  },
  '8a2be2': {
    css3: ['BlueViolet']
  },
  a52a2a: {
    css3: ['Brown']
  },
  deb887: {
    css3: ['BurlyWood']
  },
  '5f9ea0': {
    css3: ['CadetBlue']
  },
  '7fff00': {
    css3: ['Chartreuse']
  },
  d2691e: {
    css3: ['Chocolate']
  },
  ff7f50: {
    css3: ['Coral']
  },
  '6495ed': {
    css3: ['CornflowerBlue']
  },
  fff8dc: {
    css3: ['Cornsilk']
  },
  dc143c: {
    css3: ['Crimson']
  },
  '00008b': {
    css3: ['DarkBlue']
  },
  '008b8b': {
    css3: ['DarkCyan']
  },
  b8860b: {
    css3: ['DarkGoldenRod']
  },
  a9a9a9: {
    css3: ['DarkGray', 'DarkGrey']
  },
  '006400': {
    css3: ['DarkGreen']
  },
  bdb76b: {
    css3: ['DarkKhaki']
  },
  '8b008b': {
    css3: ['DarkMagenta']
  },
  '556b2f': {
    css3: ['DarkOliveGreen']
  },
  ff8c00: {
    css3: ['DarkOrange']
  },
  '9932cc': {
    css3: ['DarkOrchid']
  },
  '8b0000': {
    css3: ['DarkRed']
  },
  e9967a: {
    css3: ['DarkSalmon']
  },
  '8fbc8f': {
    css3: ['DarkSeaGreen']
  },
  '483d8b': {
    css3: ['DarkSlateBlue']
  },
  '2f4f4f': {
    css3: ['DarkSlateGray', 'DarkSlateGrey']
  },
  '00ced1': {
    css3: ['DarkTurquoise']
  },
  '9400d3': {
    css3: ['DarkViolet']
  },
  ff1493: {
    css3: ['DeepPink']
  },
  '00bfff': {
    css3: ['DeepSkyBlue']
  },
  '1e90ff': {
    css3: ['DodgerBlue']
  },
  b22222: {
    css3: ['FireBrick']
  },
  fffaf0: {
    css3: ['FloralWhite']
  },
  '228b22': {
    css3: ['ForestGreen']
  },
  ff00ff: {
    css3: ['Fuchsia', 'Magenta']
  },
  dcdcdc: {
    css3: ['Gainsboro']
  },
  f8f8ff: {
    css3: ['GhostWhite']
  },
  ffd700: {
    css3: ['Gold']
  },
  daa520: {
    css3: ['GoldenRod']
  },
  '008000': {
    css3: ['Green']
  },
  adff2f: {
    css3: ['GreenYellow']
  },
  f0fff0: {
    css3: ['HoneyDew']
  },
  ff69b4: {
    css3: ['HotPink']
  },
  cd5c5c: {
    css3: ['IndianRed']
  },
  '4b0082': {
    css3: ['Indigo']
  },
  fffff0: {
    css3: ['Ivory']
  },
  f0e68c: {
    css3: ['Khaki']
  },
  e6e6fa: {
    css3: ['Lavender']
  },
  fff0f5: {
    css3: ['LavenderBlush']
  },
  '7cfc00': {
    css3: ['LawnGreen']
  },
  fffacd: {
    css3: ['LemonChiffon']
  },
  add8e6: {
    css3: ['LightBlue']
  },
  f08080: {
    css3: ['LightCoral']
  },
  e0ffff: {
    css3: ['LightCyan']
  },
  fafad2: {
    css3: ['LightGoldenRodYellow']
  },
  d3d3d3: {
    css3: ['LightGray', 'LightGrey']
  },
  '90ee90': {
    css3: ['LightGreen']
  },
  ffb6c1: {
    css3: ['LightPink']
  },
  ffa07a: {
    css3: ['LightSalmon']
  },
  '20b2aa': {
    css3: ['LightSeaGreen']
  },
  '87cefa': {
    css3: ['LightSkyBlue']
  },
  b0c4de: {
    css3: ['LightSteelBlue']
  },
  ffffe0: {
    css3: ['LightYellow']
  },
  '00ff00': {
    css3: ['Lime']
  },
  '32cd32': {
    css3: ['LimeGreen']
  },
  faf0e6: {
    css3: ['Linen']
  },
  '66cdaa': {
    css3: ['MediumAquaMarine']
  },
  '0000cd': {
    css3: ['MediumBlue']
  },
  ba55d3: {
    css3: ['MediumOrchid']
  },
  '9370db': {
    css3: ['MediumPurple']
  },
  '3cb371': {
    css3: ['MediumSeaGreen']
  },
  '7b68ee': {
    css3: ['MediumSlateBlue']
  },
  '00fa9a': {
    css3: ['MediumSpringGreen']
  },
  '48d1cc': {
    css3: ['MediumTurquoise']
  },
  c71585: {
    css3: ['MediumVioletRed']
  },
  f5fffa: {
    css3: ['MintCream']
  },
  ffe4e1: {
    css3: ['MistyRose']
  },
  ffe4b5: {
    css3: ['Moccasin']
  },
  ffdead: {
    css3: ['NavajoWhite']
  },
  '000080': {
    css3: ['Navy']
  },
  fdf5e6: {
    css3: ['OldLace']
  },
  '6b8e23': {
    css3: ['OliveDrab']
  },
  ffa500: {
    css3: ['Orange'],
    jis: ['山吹色']
  },
  ff4500: {
    css3: ['OrangeRed']
  },
  da70d6: {
    css3: ['Orchid']
  },
  eee8aa: {
    css3: ['PaleGoldenRod']
  },
  '98fb98': {
    css3: ['PaleGreen']
  },
  afeeee: {
    css3: ['PaleTurquoise']
  },
  db7093: {
    css3: ['PaleVioletRed']
  },
  ffefd5: {
    css3: ['PapayaWhip']
  },
  ffdab9: {
    css3: ['PeachPuff']
  },
  cd853f: {
    css3: ['Peru']
  },
  ffc0cb: {
    css3: ['Pink']
  },
  dda0dd: {
    css3: ['Plum']
  },
  b0e0e6: {
    css3: ['PowderBlue']
  },
  ff0000: {
    css3: ['Red']
  },
  bc8f8f: {
    css3: ['RosyBrown']
  },
  '4169e1': {
    css3: ['RoyalBlue']
  },
  '8b4513': {
    css3: ['SaddleBrown']
  },
  fa8072: {
    css3: ['Salmon']
  },
  f4a460: {
    css3: ['SandyBrown']
  },
  '2e8b57': {
    css3: ['SeaGreen']
  },
  fff5ee: {
    css3: ['SeaShell']
  },
  a0522d: {
    css3: ['Sienna']
  },
  c0c0c0: {
    css3: ['Silver']
  },
  '87ceeb': {
    css3: ['SkyBlue']
  },
  '6a5acd': {
    css3: ['SlateBlue']
  },
  fffafa: {
    css3: ['Snow']
  },
  '00ff7f': {
    css3: ['SpringGreen']
  },
  '4682b4': {
    css3: ['SteelBlue']
  },
  d2b48c: {
    css3: ['Tan']
  },
  '008080': {
    css3: ['Teal']
  },
  d8bfd8: {
    css3: ['Thistle']
  },
  ff6347: {
    css3: ['Tomato']
  },
  '40e0d0': {
    css3: ['Turquoise']
  },
  ee82ee: {
    css3: ['Violet']
  },
  f5deb3: {
    css3: ['Wheat']
  },
  ffffff: {
    css3: ['White']
  },
  f5f5f5: {
    css3: ['WhiteSmoke']
  },
  ffff00: {
    css3: ['Yellow']
  },
  '9acd32': {
    css3: ['YellowGreen']
  },
  '00152d': {
    jis: ['ミッドナイトブルー']
  },
  '004840': {
    jis: ['ビリヤードグリーン']
  },
  '005175': {
    jis: ['マリンブルー']
  },
  '005731': {
    jis: ['深緑']
  },
  '0067c0': {
    jis: ['青']
  },
  '00708b': {
    jis: ['ピーコックブルー']
  },
  '007f91': {
    jis: ['ピーコックグリーン']
  },
  '008047': {
    jis: ['マラカイトグリーン']
  },
  '0087aa': {
    jis: ['浅葱色', 'あさぎ色']
  },
  '0090a8': {
    jis: ['青緑']
  },
  '0b74af': {
    jis: ['セルリアンブルー']
  },
  '15543b': {
    jis: ['もえぎ色']
  },
  '156f5c': {
    jis: ['ビリジアン']
  },
  '166a88': {
    jis: ['納戸色']
  },
  '1c1c1c': {
    jis: ['ブラック', 'ランプブラック']
  },
  '20324e': {
    jis: ['濃藍', 'こいあい']
  },
  '219ddd': {
    jis: ['シアン']
  },
  '2863ab': {
    jis: ['コバルトブルー']
  },
  '2a9b50': {
    jis: ['グリーン']
  },
  '2e4b71': {
    jis: ['藍色']
  },
  '3170b9': {
    jis: ['ブルー']
  },
  '333c5e': {
    jis: ['ネービーブルー', '紺色']
  },
  '3451a4': {
    jis: ['るり色']
  },
  '35357d': {
    jis: ['紺藍']
  },
  '357c4c': {
    jis: ['常磐色', 'ときわ色']
  },
  '37438f': {
    jis: ['オリエンタルブルー']
  },
  '383c57': {
    jis: ['勝色', 'かちいろ']
  },
  '399ecc': {
    jis: ['ターコイズブルー']
  },
  '3c639b': {
    jis: ['はなだ色']
  },
  '3d496b': {
    jis: ['アイアンブルー', 'プルシャンブルー', '紺青', 'こんじょう']
  },
  '3d7cce': {
    jis: ['露草色']
  },
  '3e2e28': {
    jis: ['黒茶']
  },
  '3e795c': {
    jis: ['フォレストグリーン']
  },
  '40317e': {
    jis: ['パンジー']
  },
  '414fa3': {
    jis: ['ウルトラマリンブルー', '群青色', 'ぐんじょう色']
  },
  '452a35': {
    jis: ['バーガンディー']
  },
  '47384f': {
    jis: ['なす紺']
  },
  '49a581': {
    jis: ['若竹色']
  },
  '4a3b2a': {
    jis: ['セピア']
  },
  '4a49ad': {
    jis: ['ききょう色']
  },
  '4a6956': {
    jis: ['千歳緑', 'ちとせみどり']
  },
  '4c5dab': {
    jis: ['かきつばた色']
  },
  '4da573': {
    jis: ['エメラルドグリーン']
  },
  '4db56a': {
    jis: ['緑']
  },
  '4e4854': {
    jis: ['チャコールグレイ']
  },
  '516a39': {
    jis: ['アイビーグリーン']
  },
  '5190a4': {
    jis: ['ナイルブルー']
  },
  '52372f': {
    jis: ['チョコレート']
  },
  '55353b': {
    jis: ['ボルドー']
  },
  '56555e': {
    jis: ['スレートグレイ']
  },
  '5b462a': {
    jis: ['バーントアンバー']
  },
  '5dc288': {
    jis: ['コバルトグリーン']
  },
  '5e7184': {
    jis: ['藍鼠', 'あいねず']
  },
  '5f4c86': {
    jis: ['江戸紫']
  },
  '5f836d': {
    jis: ['緑青色', 'ろくしょう色']
  },
  '627da1': {
    jis: ['サックスブルー']
  },
  '675d7e': {
    jis: ['鳩羽色', 'はとば色']
  },
  '682a2b': {
    jis: ['マルーン']
  },
  '68624e': {
    jis: ['オリーブドラブ']
  },
  '6869a8': {
    jis: ['藤納戸']
  },
  '69aac6': {
    jis: ['新橋色']
  },
  '6c8d9b': {
    jis: ['錆浅葱']
  },
  '6d3d33': {
    jis: ['海老茶']
  },
  '6d52ab': {
    jis: ['バイオレット', '菫色', 'すみれ色']
  },
  '6e815c': {
    jis: ['松葉色']
  },
  '703b32': {
    jis: ['紅海老茶']
  },
  '704cbc': {
    jis: ['青紫']
  },
  '7051aa': {
    jis: ['しょうぶ色']
  },
  '70613a': {
    jis: ['鶯茶']
  },
  '71714a': {
    jis: ['鶯色', 'うぐいす色']
  },
  '72814b': {
    jis: ['草色']
  },
  '734e30': {
    jis: ['茶色']
  },
  '734e31': {
    jis: ['ブラウン']
  },
  '736c79': {
    jis: ['スチールグレイ']
  },
  '736f55': {
    jis: ['みる色']
  },
  '737c3e': {
    jis: ['グラスグリーン']
  },
  '754c38': {
    jis: ['ココアブラウン', '栗色']
  },
  '7586bb': {
    jis: ['ヒヤシンス']
  },
  '776ed2': {
    jis: ['ウィスタリア']
  },
  '787c7a': {
    jis: ['利休鼠']
  },
  '797a88': {
    jis: ['鉛色']
  },
  '7a7f46': {
    jis: ['苔色']
  },
  '7a99aa': {
    jis: ['水浅葱']
  },
  '7aaaac': {
    jis: ['青竹色']
  },
  '7d483e': {
    jis: ['とび色']
  },
  '7f5c13': {
    jis: ['ローアンバー']
  },
  '80aa9f': {
    jis: ['青磁色']
  },
  '815a2b': {
    jis: ['ブロンズ']
  },
  '81cc91': {
    jis: ['ミントグリーン']
  },
  '83274e': {
    jis: ['ワインレッド']
  },
  '835fa8': {
    jis: ['モーブ']
  },
  '836dc5': {
    jis: ['ヘリオトロープ']
  },
  '84b5cf': {
    jis: ['白群', 'びゃくぐん']
  },
  '879d4e': {
    jis: ['リーフグリーン']
  },
  '8a4031': {
    jis: ['弁柄色', 'べんがら色']
  },
  '8a604f': {
    jis: ['檜皮色', 'ひわだ色']
  },
  '8cb4ce': {
    jis: ['かめのぞき']
  },
  '91b2d2': {
    jis: ['ホリゾンブルー']
  },
  '923a21': {
    jis: ['赤錆色']
  },
  '92afe4': {
    jis: ['勿忘草色', 'わすれなぐさ色']
  },
  '93848b': {
    jis: ['ローズグレイ']
  },
  '948bdb': {
    jis: ['藤紫']
  },
  '95c0ec': {
    jis: ['スカイブルー', '空色']
  },
  '96aa3d': {
    jis: ['萌黄', 'もえぎ']
  },
  '974b52': {
    jis: ['蘇芳', 'すおう']
  },
  '974e33': {
    jis: ['れんが色']
  },
  '9a753a': {
    jis: ['カーキー']
  },
  '9ab961': {
    jis: ['シーグリーン']
  },
  '9e8eae': {
    jis: ['ラベンダー']
  },
  '9f9190': {
    jis: ['茶鼠']
  },
  a0283a: {
    jis: ['茜色', 'あかね色']
  },
  a09bd8: {
    jis: ['藤色']
  },
  a0a0a0: {
    jis: ['シルバーグレイ', '銀鼠', 'ぎんねず']
  },
  a14641: {
    jis: ['紅樺色', 'べにかば色']
  },
  a260bf: {
    jis: ['パープル', '紫']
  },
  a56f3f: {
    jis: ['タン']
  },
  a58161: {
    jis: ['コルク']
  },
  a8593c: {
    jis: ['バーントシェンナ']
  },
  a96e2d: {
    jis: ['土色']
  },
  a9b735: {
    jis: ['若草色']
  },
  a9ceec: {
    jis: ['水色']
  },
  abbdda: {
    jis: ['ベビーブルー']
  },
  ac5647: {
    jis: ['テラコッタ']
  },
  adadad: {
    jis: ['パールグレイ']
  },
  ae3846: {
    jis: ['えんじ']
  },
  af3168: {
    jis: ['コチニールレッド']
  },
  afc297: {
    jis: ['若葉色']
  },
  b0d3a8: {
    jis: ['アップルグリーン']
  },
  b15237: {
    jis: ['赤茶']
  },
  b37d40: {
    jis: ['アンバー']
  },
  b67a52: {
    jis: ['らくだ色']
  },
  b91e68: {
    jis: ['ルビーレッド']
  },
  b92946: {
    jis: ['紅赤']
  },
  b97761: {
    jis: ['肉桂色', 'にっけい色']
  },
  b9c42f: {
    jis: ['黄緑']
  },
  ba6432: {
    jis: ['たいしゃ']
  },
  babac6: {
    jis: ['スカイグレイ']
  },
  bb1e5e: {
    jis: ['ストロベリー']
  },
  bb6421: {
    jis: ['ローシェンナ', '黄茶']
  },
  bd1e48: {
    jis: ['紅色']
  },
  bd4a1d: {
    jis: ['樺色', 'かば色']
  },
  bdbf92: {
    jis: ['抹茶色']
  },
  bdd458: {
    jis: ['シャトルーズグリーン']
  },
  be1e3e: {
    jis: ['カーマイン']
  },
  bf1e33: {
    jis: ['赤']
  },
  c18a39: {
    jis: ['イエローオーカー', '黄土色']
  },
  c1ab96: {
    jis: ['ベージュ']
  },
  c24dae: {
    jis: ['牡丹色', 'ぼたん色']
  },
  c27bc8: {
    jis: ['あやめ色']
  },
  c2a2da: {
    jis: ['ライラック']
  },
  c2c05c: {
    jis: ['ひわ色']
  },
  c47600: {
    jis: ['金茶']
  },
  c54ea0: {
    jis: ['赤紫']
  },
  c5996d: {
    jis: ['バフ']
  },
  c67400: {
    jis: ['こはく色']
  },
  c74f90: {
    jis: ['ローズレッド']
  },
  c7a1d7: {
    jis: ['オーキッド']
  },
  c949a2: {
    jis: ['マゼンタ']
  },
  c97f96: {
    jis: ['オールドローズ']
  },
  c9b9a8: {
    jis: ['砂色']
  },
  cadbcf: {
    jis: ['白緑', 'びゃくろく']
  },
  cb4b94: {
    jis: ['つつじ色']
  },
  cc572c: {
    jis: ['キャロットオレンジ']
  },
  cda966: {
    jis: ['芥子色', 'からし色']
  },
  ce314a: {
    jis: ['シグナルレッド']
  },
  cf61a5: {
    jis: ['チェリーピンク']
  },
  d34778: {
    jis: ['ばら色']
  },
  d3503c: {
    jis: ['鉛丹色', 'えんたん色']
  },
  d94177: {
    jis: ['ローズ']
  },
  d9a46d: {
    jis: ['小麦色']
  },
  d9cb65: {
    jis: ['きはだ色']
  },
  dd4157: {
    jis: ['ポピーレッド']
  },
  dda273: {
    jis: ['アプリコット', '杏色']
  },
  de424c: {
    jis: ['トマトレッド', 'レッド']
  },
  de4335: {
    jis: ['スカーレット']
  },
  e06030: {
    jis: ['柿色']
  },
  e08899: {
    jis: ['紅梅色', 'こうばい色']
  },
  e1c59b: {
    jis: ['レグホーン']
  },
  e3557f: {
    jis: ['からくれない']
  },
  e38698: {
    jis: ['桃色']
  },
  e3b466: {
    jis: ['ブロンド']
  },
  e3d4ca: {
    jis: ['アイボリー', '象牙色', 'ぞうげ色']
  },
  e45e00: {
    jis: ['黄赤']
  },
  e8c800: {
    jis: ['レモンイエロー']
  },
  e8d5af: {
    jis: ['クリームイエロー']
  },
  eb97a8: {
    jis: ['ピンク']
  },
  ebc0af: {
    jis: ['ピーチ']
  },
  ed514e: {
    jis: ['バーミリオン', '朱色']
  },
  ed542a: {
    jis: ['金赤']
  },
  ed551b: {
    jis: ['赤橙']
  },
  ee5145: {
    jis: ['紅緋', 'べにひ']
  },
  eed67e: {
    jis: ['刈安色', 'かりやす色']
  },
  ef6d3e: {
    jis: ['黄丹', 'おうに']
  },
  ef93b6: {
    jis: ['ローズピンク']
  },
  f0e2e0: {
    jis: ['生成り色', 'きなり色']
  },
  f1beb1: {
    jis: ['ネールピンク']
  },
  f1f1f1: {
    jis: ['スノーホワイト', 'ホワイト', '白']
  },
  f2c26b: {
    jis: ['ネープルスイエロー']
  },
  f2e8ec: {
    jis: ['胡粉色', 'ごふん色']
  },
  f39a38: {
    jis: ['ゴールデンイエロー']
  },
  f4be9b: {
    jis: ['肌色']
  },
  f7d54e: {
    jis: ['カナリーイエロー']
  },
  f8cfae: {
    jis: ['エクルベイジュ']
  },
  f9a1d0: {
    jis: ['とき色']
  },
  fa8000: {
    jis: ['蜜柑色']
  },
  fabe6f: {
    jis: ['卵色']
  },
  fad43a: {
    jis: ['中黄']
  },
  fbccc3: {
    jis: ['シェルピンク']
  },
  fcac00: {
    jis: ['うこん色']
  },
  fd7e00: {
    jis: ['オレンジ', '橙色']
  },
  fd951e: {
    jis: ['マンダリンオレンジ']
  },
  ff5d20: {
    jis: ['チャイニーズレッド']
  },
  ff87a0: {
    jis: ['さんご色', 'コーラルレッド']
  },
  ffa000: {
    jis: ['マリーゴールド']
  },
  ffa594: {
    jis: ['サーモンピンク']
  },
  ffa75e: {
    jis: ['こうじ色']
  },
  ffb500: {
    jis: ['ひまわり色']
  },
  ffbc00: {
    jis: ['クロムイエロー']
  },
  ffbe00: {
    jis: ['黄色', 'たんぽぽ色']
  },
  ffc9d2: {
    jis: ['ベビーピンク']
  },
  ffcc00: {
    jis: ['イエロー', 'ジョンブリアン']
  },
  ffdbed: {
    jis: ['桜色']
  }
}

export const nameToHex = name => nameToHexData[name.toLowerCase()]
export const hexToNames = hex => hexToNameData[hex.toLowerCase()]
export const namedHexes = () => Object.keys(hexToNameData)
