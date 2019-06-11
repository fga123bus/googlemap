
var linePath_bcy = [
    new daum.maps.LatLng(37.489246,126.817638),
new daum.maps.LatLng(37.490057,126.819139),
new daum.maps.LatLng(37.490928,126.8205),
new daum.maps.LatLng(37.4919,126.82193),
new daum.maps.LatLng(37.4926,126.823538),
new daum.maps.LatLng(37.492894,126.824748),
new daum.maps.LatLng(37.493128,126.825957),
new daum.maps.LatLng(37.493141,126.828886),
new daum.maps.LatLng(37.493162,126.831772),
new daum.maps.LatLng(37.493196,126.83748),
new daum.maps.LatLng(37.492847,126.836901),
new daum.maps.LatLng(37.492513,126.835865),
new daum.maps.LatLng(37.49223,126.834808),
new daum.maps.LatLng(37.491656,126.832566),
new daum.maps.LatLng(37.491077,126.83291),
new daum.maps.LatLng(37.490915,126.833103),
new daum.maps.LatLng(37.490374,126.833462),
new daum.maps.LatLng(37.489934,126.83376),
new daum.maps.LatLng(37.489591,126.834042),
new daum.maps.LatLng(37.48933,126.834475),
new daum.maps.LatLng(37.489078,126.835015),
new daum.maps.LatLng(37.488621,126.836069),
new daum.maps.LatLng(37.491707,126.840715),
new daum.maps.LatLng(37.492528,126.840634),
new daum.maps.LatLng(37.493194,126.840511),
new daum.maps.LatLng(37.493685,126.840422),
new daum.maps.LatLng(37.494367,126.840146),
new daum.maps.LatLng(37.496229,126.844403),
new daum.maps.LatLng(37.4971,126.846252),
new daum.maps.LatLng(37.497779,126.847284),
new daum.maps.LatLng(37.497973,126.847961),
new daum.maps.LatLng(37.498082,126.848756),
new daum.maps.LatLng(37.498197,126.850065),
new daum.maps.LatLng(37.498202,126.85102),
new daum.maps.LatLng(37.498053,126.851776),
new daum.maps.LatLng(37.49738,126.853804),
new daum.maps.LatLng(37.49725,126.853914),
new daum.maps.LatLng(37.497173,126.854371),
new daum.maps.LatLng(37.497244,126.856306),
new daum.maps.LatLng(37.497265,126.856733),
new daum.maps.LatLng(37.497216,126.857542),
new daum.maps.LatLng(37.496852,126.859552),
new daum.maps.LatLng(37.496531,126.861294),
new daum.maps.LatLng(37.49646,126.86179),
new daum.maps.LatLng(37.496458,126.86229),
new daum.maps.LatLng(37.49658,126.863074),
new daum.maps.LatLng(37.496816,126.863597),
new daum.maps.LatLng(37.498309,126.865532),
new daum.maps.LatLng(37.499072,126.866484),
new daum.maps.LatLng(37.499444,126.867268),
new daum.maps.LatLng(37.499491,126.868213),
new daum.maps.LatLng(37.499127,126.86997),
new daum.maps.LatLng(37.498725,126.871909),
new daum.maps.LatLng(37.498778,126.872552),
new daum.maps.LatLng(37.499098,126.873518),
new daum.maps.LatLng(37.500284,126.876104),
new daum.maps.LatLng(37.501039,126.877386),
new daum.maps.LatLng(37.503074,126.880143),
new daum.maps.LatLng(37.504306,126.881931),
new daum.maps.LatLng(37.506785,126.885328),
new daum.maps.LatLng(37.506745,126.885482),
new daum.maps.LatLng(37.50433,126.887745),
new daum.maps.LatLng(37.5045,126.888185),
new daum.maps.LatLng(37.506283,126.891607),
new daum.maps.LatLng(37.507136,126.893297),
new daum.maps.LatLng(37.50781,126.894624),
new daum.maps.LatLng(37.507628,126.895067),
new daum.maps.LatLng(37.506358,126.896481),
new daum.maps.LatLng(37.505172,126.897964),
new daum.maps.LatLng(37.510628,126.910377),
new daum.maps.LatLng(37.511326,126.91373),
new daum.maps.LatLng(37.511747,126.915833),
new daum.maps.LatLng(37.511932,126.916444),
new daum.maps.LatLng(37.512177,126.917067),
new daum.maps.LatLng(37.513198,126.918172),
new daum.maps.LatLng(37.514113,126.918831),
new daum.maps.LatLng(37.514229,126.918814),
new daum.maps.LatLng(37.514759,126.917974),
new daum.maps.LatLng(37.515238,126.917606),
new daum.maps.LatLng(37.516163,126.917095),
new daum.maps.LatLng(37.516721,126.91689)


];

// 지도에 표시할 선을 생성합니다
var polyline_bcy = new daum.maps.Polyline({
path: linePath_bcy, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#004FA3', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_emp1 = [
    new daum.maps.LatLng(37.601022,126.933717),
new daum.maps.LatLng(37.601554,126.927951),
new daum.maps.LatLng(37.6022,126.926664),
new daum.maps.LatLng(37.604145,126.924874),
new daum.maps.LatLng(37.605885,126.923284),
new daum.maps.LatLng(37.605966,126.922879),
new daum.maps.LatLng(37.605806,126.922607),
new daum.maps.LatLng(37.603355,126.92136),
new daum.maps.LatLng(37.602134,126.920774),
new daum.maps.LatLng(37.601226,126.920272),
new daum.maps.LatLng(37.600904,126.920049),
new daum.maps.LatLng(37.6005,126.919416),
new daum.maps.LatLng(37.600239,126.918628),
new daum.maps.LatLng(37.599807,126.917128),
new daum.maps.LatLng(37.59972,126.916878),
new daum.maps.LatLng(37.599556,126.916595),
new daum.maps.LatLng(37.599153,126.916094),
new daum.maps.LatLng(37.598966,126.91564),
new daum.maps.LatLng(37.594473,126.914465),
new daum.maps.LatLng(37.590667,126.91347),
new daum.maps.LatLng(37.587124,126.912614),
new daum.maps.LatLng(37.586125,126.911964),
new daum.maps.LatLng(37.579844,126.90532),
new daum.maps.LatLng(37.576746,126.902117),
new daum.maps.LatLng(37.574132,126.899514),
new daum.maps.LatLng(37.572784,126.898184),
new daum.maps.LatLng(37.570214,126.895845),
new daum.maps.LatLng(37.567984,126.893967),
new daum.maps.LatLng(37.567584,126.893908),
new daum.maps.LatLng(37.567359,126.894018),
new daum.maps.LatLng(37.566736,126.895372),
new daum.maps.LatLng(37.56645,126.896595),
new daum.maps.LatLng(37.566282,126.897803),
new daum.maps.LatLng(37.566266,126.899031),
new daum.maps.LatLng(37.5659,126.900324),
new daum.maps.LatLng(37.565297,126.901574),
new daum.maps.LatLng(37.5543,126.911606),
new daum.maps.LatLng(37.554092,126.911768),
new daum.maps.LatLng(37.551453,126.912558),
new daum.maps.LatLng(37.549551,126.913129),
new daum.maps.LatLng(37.549097,126.913375),
new daum.maps.LatLng(37.548869,126.913712),
new daum.maps.LatLng(37.547861,126.918376),
new daum.maps.LatLng(37.547584,126.924997),
new daum.maps.LatLng(37.547465,126.930584)

];

// 지도에 표시할 선을 생성합니다
var polyline_emp1 = new daum.maps.Polyline({
path: linePath_emp1, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#DB9800', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_emp2 = [
    new daum.maps.LatLng(37.6114726,126.9111415),
    new daum.maps.LatLng(37.604665,126.910396),
new daum.maps.LatLng(37.602394,126.910301),
new daum.maps.LatLng(37.601194,126.91025),
new daum.maps.LatLng(37.599969,126.910195),
new daum.maps.LatLng(37.597848,126.910053),
new daum.maps.LatLng(37.596958,126.909601),
new daum.maps.LatLng(37.596314,126.909213),
new daum.maps.LatLng(37.59203,126.914718),
new daum.maps.LatLng(37.588467,126.919143),
new daum.maps.LatLng(37.585628,126.922742),
new daum.maps.LatLng(37.577967,126.930327),
new daum.maps.LatLng(37.577113,126.93287),
new daum.maps.LatLng(37.576838,126.933836),
new daum.maps.LatLng(37.576335,126.935445),
new daum.maps.LatLng(37.575608,126.935268),
new daum.maps.LatLng(37.575156,126.935291),
new daum.maps.LatLng(37.574015,126.935517),
new daum.maps.LatLng(37.573251,126.935564),
new daum.maps.LatLng(37.572512,126.935322),
new daum.maps.LatLng(37.566944,126.931),
new daum.maps.LatLng(37.566095,126.930299),
new daum.maps.LatLng(37.563897,126.928656),
new daum.maps.LatLng(37.562484,126.927641),
new daum.maps.LatLng(37.561734,126.927117),
new daum.maps.LatLng(37.561334,126.926845),
new daum.maps.LatLng(37.560942,126.926701),
new daum.maps.LatLng(37.559373,126.926559),
new daum.maps.LatLng(37.558938,126.926734),
new daum.maps.LatLng(37.558575,126.926914),
new daum.maps.LatLng(37.558493,126.92706),
new daum.maps.LatLng(37.55518,126.936218)

];

// 지도에 표시할 선을 생성합니다
var polyline_emp2 = new daum.maps.Polyline({
path: linePath_emp2, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#000000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gbys = [
    new daum.maps.LatLng(37.608898,127.015388),
    new daum.maps.LatLng(37.6083288,127.0153213),
    new daum.maps.LatLng(37.6080611,127.0154446),
    new daum.maps.LatLng(37.6077041,127.0157933),
    new daum.maps.LatLng(37.6073429,127.0157826),
    new daum.maps.LatLng(37.6065992,127.0151818),
    new daum.maps.LatLng(37.6062847,127.0149887),
    new daum.maps.LatLng(37.6053667,127.0147526),
    new daum.maps.LatLng(37.6049927,127.0147097),
    new daum.maps.LatLng(37.6044147,127.0147419),
    new daum.maps.LatLng(37.6036753,127.0147741),
    new daum.maps.LatLng(37.6033863,127.0149887),
    new daum.maps.LatLng(37.6032503,127.0159006),
    new daum.maps.LatLng(37.6025108,127.0184004),
    new daum.maps.LatLng(37.6014737,127.0219195),
    new daum.maps.LatLng(37.6006492,127.0218015),
    new daum.maps.LatLng(37.5981161,127.0216513),
    new daum.maps.LatLng(37.5976656,127.0215976),
    new daum.maps.LatLng(37.596637,127.0212543),
    new daum.maps.LatLng(37.5934534,127.017746),
    new daum.maps.LatLng(37.5932281,127.0173383),
    new daum.maps.LatLng(37.5929221,127.0168877),
    new daum.maps.LatLng(37.592582,127.0160294),
    new daum.maps.LatLng(37.5923695,127.0146668),
    new daum.maps.LatLng(37.5921825,127.0139104),
    new daum.maps.LatLng(37.5909158,127.0114052),
    new daum.maps.LatLng(37.5888499,127.006942),
    new daum.maps.LatLng(37.5880167,127.0048499),
    new daum.maps.LatLng(37.5873706,127.0031655),
    new daum.maps.LatLng(37.5867457,127.0021838),
    new daum.maps.LatLng(37.5833577,126.99911),
    new daum.maps.LatLng(37.5811385,126.9964868),
    new daum.maps.LatLng(37.5806369,126.9963312),
    new daum.maps.LatLng(37.5796676,126.9964814),
    new daum.maps.LatLng(37.5784475,126.9966638),
    new daum.maps.LatLng(37.5767086,126.9972003),
    new daum.maps.LatLng(37.5762282,126.9972539),
    new daum.maps.LatLng(37.575042,126.9974148),
    new daum.maps.LatLng(37.5723549,126.9976294),
    new daum.maps.LatLng(37.5712495,126.997683),
    new daum.maps.LatLng(37.5706415,126.997683),
    new daum.maps.LatLng(37.5698804,126.9978333),
    new daum.maps.LatLng(37.5658665,126.9981658),
    new daum.maps.LatLng(37.5622266,126.9984877),
    new daum.maps.LatLng(37.5615249,126.9954193),
    new daum.maps.LatLng(37.5610699,126.9933271),
    new daum.maps.LatLng(37.5610869,126.9908059),
    new daum.maps.LatLng(37.5611592,126.9905752),
    new daum.maps.LatLng(37.561223,126.9898403),
    new daum.maps.LatLng(37.5611975,126.9885153),
    new daum.maps.LatLng(37.5611422,126.9877589),
    new daum.maps.LatLng(37.5610317,126.9873887),
    new daum.maps.LatLng(37.5607935,126.9848192),
    new daum.maps.LatLng(37.5605341,126.9824106),
    new daum.maps.LatLng(37.5597134,126.9807529),
    new daum.maps.LatLng(37.5592456,126.9792241),
    new daum.maps.LatLng(37.5589565,126.9786823),
    new daum.maps.LatLng(37.5584547,126.978178),
    new daum.maps.LatLng(37.5578933,126.9775504),
    new daum.maps.LatLng(37.5574255,126.9763327),
    new daum.maps.LatLng(37.557281,126.9759089),
    new daum.maps.LatLng(37.5571576,126.9753617),
    new daum.maps.LatLng(37.5566601,126.9740742),
    new daum.maps.LatLng(37.5565367,126.9736075),
    new daum.maps.LatLng(37.5566898,126.9731086),
    new daum.maps.LatLng(37.5568429,126.9729692),
    new daum.maps.LatLng(37.5570726,126.9728726),
    new daum.maps.LatLng(37.5569152,126.9724381),
    new daum.maps.LatLng(37.5564432,126.9725239),
    new daum.maps.LatLng(37.555716,126.9725293),
    new daum.maps.LatLng(37.5535811,126.9726259),
    new daum.maps.LatLng(37.5528836,126.9724971),
    new daum.maps.LatLng(37.5524201,126.9723845),
    new daum.maps.LatLng(37.550553,126.9719338),
    new daum.maps.LatLng(37.5494515,126.9716763),
    new daum.maps.LatLng(37.5470697,126.9717729),
    new daum.maps.LatLng(37.5457597,126.9718373),
    new daum.maps.LatLng(37.5450707,126.9718695),
    new daum.maps.LatLng(37.5443136,126.9720519),
    new daum.maps.LatLng(37.5419912,126.9726849),
    new daum.maps.LatLng(37.541702,126.9707751),
    new daum.maps.LatLng(37.5414638,126.9705445),
    new daum.maps.LatLng(37.5402048,126.9689941),
    new daum.maps.LatLng(37.538146,126.9665372),
    new daum.maps.LatLng(37.5379588,126.9663173),
    new daum.maps.LatLng(37.539018,126.9623369),
    new daum.maps.LatLng(37.5392562,126.9614357),
    new daum.maps.LatLng(37.5396901,126.9603467),
    new daum.maps.LatLng(37.5406174,126.9582063),
    new daum.maps.LatLng(37.5431312,126.9527185)

];

// 지도에 표시할 선을 생성합니다
var polyline_gbys = new daum.maps.Polyline({
path: linePath_gbys, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gd = [
    new daum.maps.LatLng(37.470863,126.941),
    new daum.maps.LatLng(37.470755,126.940126),
    new daum.maps.LatLng(37.470742,126.939605),
    new daum.maps.LatLng(37.471052,126.936746),
    new daum.maps.LatLng(37.471176,126.93577),
    new daum.maps.LatLng(37.471365,126.934997),
    new daum.maps.LatLng(37.471698,126.934316),
    new daum.maps.LatLng(37.471448,126.933881),
    new daum.maps.LatLng(37.46904,126.932588),
    new daum.maps.LatLng(37.467152,126.931526),
    new daum.maps.LatLng(37.466232,126.931352),
    new daum.maps.LatLng(37.46395,126.931581),
    new daum.maps.LatLng(37.4618,126.931862),
    new daum.maps.LatLng(37.461268,126.931838),
    new daum.maps.LatLng(37.460408,126.931524),
    new daum.maps.LatLng(37.459524,126.930834),
    new daum.maps.LatLng(37.459143,126.930529),
    new daum.maps.LatLng(37.458885,126.930236),
    new daum.maps.LatLng(37.458514,126.929323),
    new daum.maps.LatLng(37.458422,126.928864),
    new daum.maps.LatLng(37.45844,126.928458),
    new daum.maps.LatLng(37.458557,126.92816),
    new daum.maps.LatLng(37.458725,126.927938),
    new daum.maps.LatLng(37.459064,126.927766),
    new daum.maps.LatLng(37.45993,126.927659),
    new daum.maps.LatLng(37.460271,126.927458),
    new daum.maps.LatLng(37.460339,126.927181),
    new daum.maps.LatLng(37.46074,126.926275),
    new daum.maps.LatLng(37.461259,126.925127),
    new daum.maps.LatLng(37.461366,126.924504),
    new daum.maps.LatLng(37.461623,126.924488),
    new daum.maps.LatLng(37.461858,126.924212),
    new daum.maps.LatLng(37.461949,126.923743),
    new daum.maps.LatLng(37.461885,126.923448),
    new daum.maps.LatLng(37.460903,126.921691),
    new daum.maps.LatLng(37.46046,126.920914),
    new daum.maps.LatLng(37.460284,126.920224),
    new daum.maps.LatLng(37.460414,126.919639),
    new daum.maps.LatLng(37.460699,126.919196),
    new daum.maps.LatLng(37.460907,126.919093),
    new daum.maps.LatLng(37.461636,126.919049),
    new daum.maps.LatLng(37.462693,126.919062),
    new daum.maps.LatLng(37.463354,126.919033),
    new daum.maps.LatLng(37.463671,126.919086),
    new daum.maps.LatLng(37.464087,126.919253),
    new daum.maps.LatLng(37.46447,126.919202),
    new daum.maps.LatLng(37.464663,126.919248),
    new daum.maps.LatLng(37.46565,126.919999),
    new daum.maps.LatLng(37.466548,126.920401),
    new daum.maps.LatLng(37.467076,126.920591),
    new daum.maps.LatLng(37.467418,126.920612),
    new daum.maps.LatLng(37.467836,126.920466),
    new daum.maps.LatLng(37.468182,126.920272),
    new daum.maps.LatLng(37.468586,126.919961),
    new daum.maps.LatLng(37.468764,126.919961),
    new daum.maps.LatLng(37.469292,126.920068),
    new daum.maps.LatLng(37.469966,126.920052),
    new daum.maps.LatLng(37.470805,126.919926),
    new daum.maps.LatLng(37.471093,126.919911),
    new daum.maps.LatLng(37.47146,126.919834),
    new daum.maps.LatLng(37.472172,126.919489),
    new daum.maps.LatLng(37.472546,126.919287),
    new daum.maps.LatLng(37.472944,126.918915),
    new daum.maps.LatLng(37.472982,126.918982),
    new daum.maps.LatLng(37.4731,126.918999),
    new daum.maps.LatLng(37.47402,126.918756),
    new daum.maps.LatLng(37.474358,126.918693),
    new daum.maps.LatLng(37.47506,126.918373),
    new daum.maps.LatLng(37.476056,126.917657),
    new daum.maps.LatLng(37.476464,126.917312),
    new daum.maps.LatLng(37.477142,126.916916),
    new daum.maps.LatLng(37.477864,126.916541),
    new daum.maps.LatLng(37.477791,126.91592),
    new daum.maps.LatLng(37.477727,126.915363),
    new daum.maps.LatLng(37.479703,126.914974),
    new daum.maps.LatLng(37.480752,126.914756),
    new daum.maps.LatLng(37.481758,126.914553),
    new daum.maps.LatLng(37.481804,126.91473),
    new daum.maps.LatLng(37.483193,126.922316),
    new daum.maps.LatLng(37.484232,126.929762),
    new daum.maps.LatLng(37.485496,126.929583),
    new daum.maps.LatLng(37.485888,126.929507),
    new daum.maps.LatLng(37.486773,126.929137),
    new daum.maps.LatLng(37.489529,126.927918),
    new daum.maps.LatLng(37.491293,126.927085),
    new daum.maps.LatLng(37.491821,126.926886),
    new daum.maps.LatLng(37.492362,126.926811),
    new daum.maps.LatLng(37.496133,126.927667),
    new daum.maps.LatLng(37.49804,126.928062),
    new daum.maps.LatLng(37.49888,126.928209),
    new daum.maps.LatLng(37.499398,126.928248),
    new daum.maps.LatLng(37.499738,126.928192),
    new daum.maps.LatLng(37.499774,126.926724),
    new daum.maps.LatLng(37.499796,126.92606)

];

// 지도에 표시할 선을 생성합니다
var polyline_gd = new daum.maps.Polyline({
path: linePath_gd, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gdj = [
    new daum.maps.LatLng(37.442811,126.903886),
new daum.maps.LatLng(37.444352,126.904034),
new daum.maps.LatLng(37.445128,126.90407),
new daum.maps.LatLng(37.446128,126.903977),
new daum.maps.LatLng(37.447361,126.903564),
new daum.maps.LatLng(37.451171,126.902014),
new daum.maps.LatLng(37.451661,126.904128),
new daum.maps.LatLng(37.451941,126.905222),
new daum.maps.LatLng(37.45217,126.906048),
new daum.maps.LatLng(37.453202,126.904433),
new daum.maps.LatLng(37.453526,126.903913),
new daum.maps.LatLng(37.45419,126.902813),
new daum.maps.LatLng(37.454582,126.902172),
new daum.maps.LatLng(37.454731,126.901846),
new daum.maps.LatLng(37.454803,126.901488),
new daum.maps.LatLng(37.454791,126.901075),
new daum.maps.LatLng(37.454782,126.9007),
new daum.maps.LatLng(37.457112,126.899836),
new daum.maps.LatLng(37.457184,126.899546),
new daum.maps.LatLng(37.457169,126.8993),
new daum.maps.LatLng(37.456106,126.895003),
new daum.maps.LatLng(37.456238,126.894603),
new daum.maps.LatLng(37.45677,126.894331),
new daum.maps.LatLng(37.456982,126.894121),
new daum.maps.LatLng(37.457466,126.893691),
new daum.maps.LatLng(37.458027,126.893314),
new daum.maps.LatLng(37.46079,126.892044),
new daum.maps.LatLng(37.466415,126.889654),
new daum.maps.LatLng(37.466413,126.891505),
new daum.maps.LatLng(37.466506,126.891771),
new daum.maps.LatLng(37.466454,126.894838),
new daum.maps.LatLng(37.466445,126.897921),
new daum.maps.LatLng(37.473176,126.898562),
new daum.maps.LatLng(37.476533,126.898856),
new daum.maps.LatLng(37.478258,126.899067),
new daum.maps.LatLng(37.479673,126.899337),
new daum.maps.LatLng(37.480467,126.899704),
new daum.maps.LatLng(37.484283,126.902907),
new daum.maps.LatLng(37.4881,126.905938),
new daum.maps.LatLng(37.492146,126.909314),
new daum.maps.LatLng(37.492884,126.90995),
new daum.maps.LatLng(37.494168,126.910917),
new daum.maps.LatLng(37.495503,126.911777),
new daum.maps.LatLng(37.496163,126.912287),
new daum.maps.LatLng(37.496433,126.914183),
new daum.maps.LatLng(37.497002,126.917245),
new daum.maps.LatLng(37.497538,126.919566),
new daum.maps.LatLng(37.497869,126.920097),
new daum.maps.LatLng(37.498427,126.920277),
new daum.maps.LatLng(37.499982,126.920367),
new daum.maps.LatLng(37.51039,126.924577)


];

// 지도에 표시할 선을 생성합니다
var polyline_gdj = new daum.maps.Polyline({
path: linePath_gdj, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#00A0E6', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});


var linePath_gmgm = [
    new daum.maps.LatLng(37.449771,126.88718),
new daum.maps.LatLng(37.450627,126.889545),
new daum.maps.LatLng(37.453275,126.887623),
new daum.maps.LatLng(37.454578,126.886694),
new daum.maps.LatLng(37.455774,126.885669),
new daum.maps.LatLng(37.457669,126.889826),
new daum.maps.LatLng(37.458864,126.888993),
new daum.maps.LatLng(37.46,126.888118),
new daum.maps.LatLng(37.462244,126.886248),
new daum.maps.LatLng(37.470843,126.878829),
new daum.maps.LatLng(37.470838,126.878695),
new daum.maps.LatLng(37.469134,126.875873),
new daum.maps.LatLng(37.468485,126.874757),
new daum.maps.LatLng(37.46699,126.868717),
new daum.maps.LatLng(37.466249,126.868985),
new daum.maps.LatLng(37.465193,126.869524),
new daum.maps.LatLng(37.464708,126.87003),
new daum.maps.LatLng(37.464257,126.870632),
new daum.maps.LatLng(37.46369,126.870053),
new daum.maps.LatLng(37.463647,126.869802),
new daum.maps.LatLng(37.463783,126.868751),
new daum.maps.LatLng(37.463855,126.868778),
new daum.maps.LatLng(37.46378,126.86932),
new daum.maps.LatLng(37.463726,126.869698),
new daum.maps.LatLng(37.46374,126.869905),
new daum.maps.LatLng(37.463904,126.870168),
new daum.maps.LatLng(37.464267,126.870501),
new daum.maps.LatLng(37.464815,126.869698),
new daum.maps.LatLng(37.465309,126.869315),
new daum.maps.LatLng(37.465598,126.869178),
new daum.maps.LatLng(37.466456,126.868784),
new daum.maps.LatLng(37.467029,126.868619),
new daum.maps.LatLng(37.467407,126.868604),
new daum.maps.LatLng(37.468689,126.868685),
new daum.maps.LatLng(37.470064,126.868669),
new daum.maps.LatLng(37.472224,126.867811),
new daum.maps.LatLng(37.47441,126.867018),
new daum.maps.LatLng(37.474839,126.866772),
new daum.maps.LatLng(37.475475,126.866271),
new daum.maps.LatLng(37.47589,126.865469),
new daum.maps.LatLng(37.47685,126.863101),
new daum.maps.LatLng(37.478408,126.863932),
new daum.maps.LatLng(37.479622,126.863884),
new daum.maps.LatLng(37.48364,126.86655),
new daum.maps.LatLng(37.485011,126.86622),
new daum.maps.LatLng(37.486186,126.86589),
new daum.maps.LatLng(37.486414,126.866045),
new daum.maps.LatLng(37.486706,126.866629),
new daum.maps.LatLng(37.487052,126.867411)

];

// 지도에 표시할 선을 생성합니다
var polyline_gmgm = new daum.maps.Polyline({
path: linePath_gmgm, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#7DC200', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gy1 = [
    new daum.maps.LatLng(37.572534,126.806045),
    new daum.maps.LatLng(37.572648,126.807144),
    new daum.maps.LatLng(37.573158,126.810207),
    new daum.maps.LatLng(37.573307,126.811377),
    new daum.maps.LatLng(37.573443,126.812182),
    new daum.maps.LatLng(37.573307,126.816704),
    new daum.maps.LatLng(37.573231,126.82047),
    new daum.maps.LatLng(37.573214,126.822272),
    new daum.maps.LatLng(37.572912,126.82573),
    new daum.maps.LatLng(37.57267,126.830007),
    new daum.maps.LatLng(37.572427,126.833575),
    new daum.maps.LatLng(37.572261,126.834272),
    new daum.maps.LatLng(37.571432,126.835672),
    new daum.maps.LatLng(37.570841,126.836692),
    new daum.maps.LatLng(37.569106,126.839942),
    new daum.maps.LatLng(37.567958,126.842024),
    new daum.maps.LatLng(37.566317,126.845098),
    new daum.maps.LatLng(37.563664,126.850081),
    new daum.maps.LatLng(37.56184,126.853557),
    new daum.maps.LatLng(37.559454,126.858042),
    new daum.maps.LatLng(37.557026,126.862591),
    new daum.maps.LatLng(37.556792,126.863036),
    new daum.maps.LatLng(37.556673,126.862993),
    new daum.maps.LatLng(37.55635,126.86302),
    new daum.maps.LatLng(37.553985,126.863481),
    new daum.maps.LatLng(37.552331,126.86376),
    new daum.maps.LatLng(37.552241,126.863776),
    new daum.maps.LatLng(37.551514,126.865423),
    new daum.maps.LatLng(37.550944,126.866705),
    new daum.maps.LatLng(37.550289,126.866898),
    new daum.maps.LatLng(37.550136,126.866834),
    new daum.maps.LatLng(37.550204,126.866662),
    new daum.maps.LatLng(37.550723,126.86582),
    new daum.maps.LatLng(37.551327,126.864474),
    new daum.maps.LatLng(37.550591,126.864018),
    new daum.maps.LatLng(37.549681,126.863701),
    new daum.maps.LatLng(37.549247,126.863556),
    new daum.maps.LatLng(37.549239,126.863637),
    new daum.maps.LatLng(37.550613,126.864104),
    new daum.maps.LatLng(37.550808,126.864533),
    new daum.maps.LatLng(37.550872,126.864957),
    new daum.maps.LatLng(37.550455,126.865794),
    new daum.maps.LatLng(37.549605,126.867204),
    new daum.maps.LatLng(37.548108,126.869656),
    new daum.maps.LatLng(37.547529,126.870686),
    new daum.maps.LatLng(37.546959,126.872284),
    new daum.maps.LatLng(37.546789,126.87369),
    new daum.maps.LatLng(37.546768,126.874937)

];

// 지도에 표시할 선을 생성합니다
var polyline_gy1 = new daum.maps.Polyline({
path: linePath_gy1, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gy2 = [
    new daum.maps.LatLng(37.561125,126.81166),
    new daum.maps.LatLng(37.559861,126.824667),
    new daum.maps.LatLng(37.559249,126.831176),
    new daum.maps.LatLng(37.558901,126.834424),
    new daum.maps.LatLng(37.558404,126.838161),
    new daum.maps.LatLng(37.55666,126.837598),
    new daum.maps.LatLng(37.554819,126.83703),
    new daum.maps.LatLng(37.553479,126.836579),
    new daum.maps.LatLng(37.552437,126.836311),
    new daum.maps.LatLng(37.549154,126.836273),
    new daum.maps.LatLng(37.546092,126.836445),
    new daum.maps.LatLng(37.545345,126.83682),
    new daum.maps.LatLng(37.544354,126.837679),
    new daum.maps.LatLng(37.543423,126.838634),
    new daum.maps.LatLng(37.54191,126.840087),
    new daum.maps.LatLng(37.540226,126.84144),
    new daum.maps.LatLng(37.537914,126.842815),
    new daum.maps.LatLng(37.532114,126.846432),
    new daum.maps.LatLng(37.530561,126.847404),
    new daum.maps.LatLng(37.530708,126.849893),
    new daum.maps.LatLng(37.530915,126.852382),
    new daum.maps.LatLng(37.532008,126.861078),
    new daum.maps.LatLng(37.53255,126.865485),
    new daum.maps.LatLng(37.533084,126.869693),
    new daum.maps.LatLng(37.533598,126.869829),
    new daum.maps.LatLng(37.534637,126.869795),
    new daum.maps.LatLng(37.535238,126.870073),
    new daum.maps.LatLng(37.535566,126.870389),
    new daum.maps.LatLng(37.538451,126.873759),
    new daum.maps.LatLng(37.539277,126.874526),
    new daum.maps.LatLng(37.540111,126.875262),
    new daum.maps.LatLng(37.54065,126.875752),
    new daum.maps.LatLng(37.541078,126.876296),
    new daum.maps.LatLng(37.541576,126.877963),
    new daum.maps.LatLng(37.542196,126.879954),
    new daum.maps.LatLng(37.54271,126.881259),
    new daum.maps.LatLng(37.54328,126.881748)

];

// 지도에 표시할 선을 생성합니다
var polyline_gy2 = new daum.maps.Polyline({
path: linePath_gy2, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF9300', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_gyd = [
    new daum.maps.LatLng(37.484946,126.886816),
    new daum.maps.LatLng(37.484994,126.886524),
    new daum.maps.LatLng(37.484879,126.886103),
    new daum.maps.LatLng(37.487403,126.884977),
    new daum.maps.LatLng(37.493026,126.883453),
    new daum.maps.LatLng(37.493494,126.885325),
    new daum.maps.LatLng(37.493682,126.885852),
    new daum.maps.LatLng(37.494226,126.88697),
    new daum.maps.LatLng(37.495048,126.888592),
    new daum.maps.LatLng(37.494975,126.888979),
    new daum.maps.LatLng(37.492758,126.890765),
    new daum.maps.LatLng(37.491568,126.891819),
    new daum.maps.LatLng(37.49043,126.892959),
    new daum.maps.LatLng(37.492141,126.895719),
    new daum.maps.LatLng(37.494892,126.894688),
    new daum.maps.LatLng(37.497823,126.893908),
    new daum.maps.LatLng(37.498912,126.896017),
    new daum.maps.LatLng(37.499817,126.897722),
    new daum.maps.LatLng(37.502674,126.900265),
    new daum.maps.LatLng(37.503111,126.900753),
    new daum.maps.LatLng(37.504104,126.903039),
    new daum.maps.LatLng(37.500138,126.905699),
    new daum.maps.LatLng(37.500053,126.90888),
    new daum.maps.LatLng(37.500993,126.909733),
    new daum.maps.LatLng(37.501802,126.910197),
    new daum.maps.LatLng(37.502198,126.910357),
    new daum.maps.LatLng(37.502508,126.910409),
    new daum.maps.LatLng(37.503828,126.910197),
    new daum.maps.LatLng(37.504058,126.9102),
    new daum.maps.LatLng(37.505066,126.91072),
    new daum.maps.LatLng(37.505943,126.911091),
    new daum.maps.LatLng(37.509181,126.910908)

];

// 지도에 표시할 선을 생성합니다
var polyline_gyd = new daum.maps.Polyline({
path: linePath_gyd, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#009734', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_mpyd = [
    new daum.maps.LatLng(37.585352,126.879677),
new daum.maps.LatLng(37.585054,126.879464),
new daum.maps.LatLng(37.584752,126.879486),
new daum.maps.LatLng(37.580892,126.885864),
new daum.maps.LatLng(37.577085,126.892342),
new daum.maps.LatLng(37.579298,126.894622),
new daum.maps.LatLng(37.57814,126.896489),
new daum.maps.LatLng(37.575716,126.900126),
new daum.maps.LatLng(37.572432,126.90563),
new daum.maps.LatLng(37.570293,126.90306),
new daum.maps.LatLng(37.570066,126.903278),
new daum.maps.LatLng(37.56963,126.903884),
new daum.maps.LatLng(37.568693,126.906324),
new daum.maps.LatLng(37.567372,126.909685),
new daum.maps.LatLng(37.565909,126.911187),
new daum.maps.LatLng(37.565267,126.911718),
new daum.maps.LatLng(37.564171,126.907694),
new daum.maps.LatLng(37.562787,126.903209),
new daum.maps.LatLng(37.561638,126.899762),
new daum.maps.LatLng(37.560024,126.895995),
new daum.maps.LatLng(37.547652,126.888464),
new daum.maps.LatLng(37.547413,126.888024),
new daum.maps.LatLng(37.546749,126.886243),
new daum.maps.LatLng(37.546407,126.886103),
new daum.maps.LatLng(37.546096,126.886243),
new daum.maps.LatLng(37.544543,126.889343),
new daum.maps.LatLng(37.543467,126.891798),
new daum.maps.LatLng(37.540511,126.896676),
new daum.maps.LatLng(37.539039,126.897854),
new daum.maps.LatLng(37.538159,126.898357),
new daum.maps.LatLng(37.537278,126.898559),
new daum.maps.LatLng(37.53687,126.898337),
new daum.maps.LatLng(37.536512,126.898082),
new daum.maps.LatLng(37.534722,126.896792),
new daum.maps.LatLng(37.533428,126.895785),
new daum.maps.LatLng(37.533352,126.89563),
new daum.maps.LatLng(37.53205,126.894608),
new daum.maps.LatLng(37.530238,126.893191),
new daum.maps.LatLng(37.530195,126.893415),
new daum.maps.LatLng(37.53218,126.894978),
new daum.maps.LatLng(37.535866,126.897808),
new daum.maps.LatLng(37.534079,126.901413),
new daum.maps.LatLng(37.533641,126.901574),
new daum.maps.LatLng(37.533431,126.901531),
new daum.maps.LatLng(37.531275,126.899793),
new daum.maps.LatLng(37.529536,126.898425),
new daum.maps.LatLng(37.52951,126.898487),
new daum.maps.LatLng(37.531455,126.900033),
new daum.maps.LatLng(37.533407,126.901617)

];

// 지도에 표시할 선을 생성합니다
var polyline_mpyd = new daum.maps.Polyline({
path: linePath_mpyd, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF509D', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_sd = [
    new daum.maps.LatLng(37.476584,126.982636),
new daum.maps.LatLng(37.47673,126.980898),
new daum.maps.LatLng(37.476778,126.979095),
new daum.maps.LatLng(37.476654,126.978511),
new daum.maps.LatLng(37.476595,126.976923),
new daum.maps.LatLng(37.476412,126.975254),
new daum.maps.LatLng(37.476127,126.973758),
new daum.maps.LatLng(37.475705,126.971886),
new daum.maps.LatLng(37.475576,126.971403),
new daum.maps.LatLng(37.475399,126.970601),
new daum.maps.LatLng(37.475312,126.969584),
new daum.maps.LatLng(37.475351,126.968648),
new daum.maps.LatLng(37.475471,126.967893),
new daum.maps.LatLng(37.475631,126.967259),
new daum.maps.LatLng(37.47623,126.965659),
new daum.maps.LatLng(37.476331,126.965616),
new daum.maps.LatLng(37.477364,126.963078),
new daum.maps.LatLng(37.478238,126.960884),
new daum.maps.LatLng(37.478568,126.960041),
new daum.maps.LatLng(37.478374,126.95984),
new daum.maps.LatLng(37.477308,126.959227),
new daum.maps.LatLng(37.476973,126.959092),
new daum.maps.LatLng(37.476209,126.95906),
new daum.maps.LatLng(37.476214,126.958984),
new daum.maps.LatLng(37.47697,126.959009),
new daum.maps.LatLng(37.47734,126.959146),
new daum.maps.LatLng(37.477902,126.959502),
new daum.maps.LatLng(37.478614,126.959927),
new daum.maps.LatLng(37.480201,126.955824),
new daum.maps.LatLng(37.480654,126.955741),
new daum.maps.LatLng(37.48083,126.955667),
new daum.maps.LatLng(37.481782,126.954016),
new daum.maps.LatLng(37.482155,126.952665),
new daum.maps.LatLng(37.482574,126.948778),
new daum.maps.LatLng(37.482646,126.948049),
new daum.maps.LatLng(37.482719,126.947335),
new daum.maps.LatLng(37.482779,126.946713),
new daum.maps.LatLng(37.482913,126.946559),
new daum.maps.LatLng(37.48304,126.946501),
new daum.maps.LatLng(37.485,126.946823),
new daum.maps.LatLng(37.485991,126.946952),
new daum.maps.LatLng(37.486916,126.947005),
new daum.maps.LatLng(37.487547,126.946633),
new daum.maps.LatLng(37.488629,126.946318),
new daum.maps.LatLng(37.489244,126.946066),
new daum.maps.LatLng(37.489723,126.94567),
new daum.maps.LatLng(37.490376,126.945125),
new daum.maps.LatLng(37.490501,126.944944),
new daum.maps.LatLng(37.490814,126.944661),
new daum.maps.LatLng(37.491148,126.94442),
new daum.maps.LatLng(37.491642,126.944078),
new daum.maps.LatLng(37.49182,126.943959),
new daum.maps.LatLng(37.491941,126.943899),
new daum.maps.LatLng(37.493679,126.943221),
new daum.maps.LatLng(37.49453,126.942873),
new daum.maps.LatLng(37.494946,126.94274),
new daum.maps.LatLng(37.495376,126.942762),
new daum.maps.LatLng(37.496459,126.942957),
new daum.maps.LatLng(37.496998,126.943078),
new daum.maps.LatLng(37.497444,126.943258),
new daum.maps.LatLng(37.498712,126.943883),
new daum.maps.LatLng(37.498976,126.944019),
new daum.maps.LatLng(37.499121,126.944004),
new daum.maps.LatLng(37.5007,126.941686),
new daum.maps.LatLng(37.502798,126.939903),
new daum.maps.LatLng(37.504364,126.939227),
new daum.maps.LatLng(37.506258,126.939712),
new daum.maps.LatLng(37.507281,126.939982),
new daum.maps.LatLng(37.508206,126.940144),
new daum.maps.LatLng(37.509143,126.940182),
new daum.maps.LatLng(37.510739,126.940209)

];

// 지도에 표시할 선을 생성합니다
var polyline_sd = new daum.maps.Polyline({
path: linePath_sd, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#001947', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_sdmp = [
    new daum.maps.LatLng(37.592166,126.943781),
new daum.maps.LatLng(37.592108,126.943274),
new daum.maps.LatLng(37.591898,126.942628),
new daum.maps.LatLng(37.591528,126.941475),
new daum.maps.LatLng(37.59119,126.94146),
new daum.maps.LatLng(37.590582,126.941952),
new daum.maps.LatLng(37.589966,126.94252),
new daum.maps.LatLng(37.587905,126.945067),
new daum.maps.LatLng(37.585884,126.94715),
new daum.maps.LatLng(37.583838,126.949277),
new daum.maps.LatLng(37.583203,126.949805),
new daum.maps.LatLng(37.581338,126.950745),
new daum.maps.LatLng(37.580579,126.951556),
new daum.maps.LatLng(37.579446,126.952818),
new daum.maps.LatLng(37.578346,126.953908),
new daum.maps.LatLng(37.576422,126.955664),
new daum.maps.LatLng(37.575681,126.956273),
new daum.maps.LatLng(37.574086,126.958155),
new daum.maps.LatLng(37.570304,126.962078),
new daum.maps.LatLng(37.569435,126.963016),
new daum.maps.LatLng(37.56826,126.964147),
new daum.maps.LatLng(37.56613,126.96613),
new daum.maps.LatLng(37.565873,126.966232),
new daum.maps.LatLng(37.565616,126.966248),
new daum.maps.LatLng(37.564684,126.965614),
new daum.maps.LatLng(37.563222,126.964627),
new daum.maps.LatLng(37.561474,126.96349),
new daum.maps.LatLng(37.559888,126.962535),
new daum.maps.LatLng(37.559178,126.961763),
new daum.maps.LatLng(37.558552,126.96098),
new daum.maps.LatLng(37.5576,126.959735),
new daum.maps.LatLng(37.557363,126.95888),
new daum.maps.LatLng(37.557382,126.956083),
new daum.maps.LatLng(37.557339,126.953523),
new daum.maps.LatLng(37.557159,126.950973),
new daum.maps.LatLng(37.556817,126.945863),
new daum.maps.LatLng(37.552973,126.945884),
new daum.maps.LatLng(37.55256,126.945702),
new daum.maps.LatLng(37.551997,126.944935),
new daum.maps.LatLng(37.551421,126.944404),
new daum.maps.LatLng(37.550819,126.944114),
new daum.maps.LatLng(37.55006,126.943856),
new daum.maps.LatLng(37.54893,126.942816),
new daum.maps.LatLng(37.547835,126.94184),
new daum.maps.LatLng(37.545866,126.946402),
new daum.maps.LatLng(37.544865,126.948683),
new daum.maps.LatLng(37.54399,126.950825),
new daum.maps.LatLng(37.542795,126.94998),
new daum.maps.LatLng(37.541262,126.947927),
new daum.maps.LatLng(37.540482,126.946862),
new daum.maps.LatLng(37.539388,126.945375)

];

// 지도에 표시할 선을 생성합니다
var polyline_sdmp = new daum.maps.Polyline({
path: linePath_sdmp, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#A43F00', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_ydp1 = [
    new daum.maps.LatLng(37.541216,126.830577),
new daum.maps.LatLng(37.540494,126.83188),
new daum.maps.LatLng(37.532497,126.836772),
new daum.maps.LatLng(37.530693,126.831751),
new daum.maps.LatLng(37.52575,126.834669),
new daum.maps.LatLng(37.520908,126.837716),
new daum.maps.LatLng(37.524184,126.851599),
new daum.maps.LatLng(37.524584,126.853375),
new daum.maps.LatLng(37.525614,126.861084),
new daum.maps.LatLng(37.526048,126.864308),
new daum.maps.LatLng(37.525678,126.866917),
new daum.maps.LatLng(37.525458,126.86782),
new daum.maps.LatLng(37.525055,126.87046),
new daum.maps.LatLng(37.524865,126.871598),
new daum.maps.LatLng(37.526371,126.871963),
new daum.maps.LatLng(37.525503,126.877424),
new daum.maps.LatLng(37.52536,126.877751),
new daum.maps.LatLng(37.524124,126.877869),
new daum.maps.LatLng(37.524005,126.878636),
new daum.maps.LatLng(37.523546,126.881533),
new daum.maps.LatLng(37.523091,126.884344),
new daum.maps.LatLng(37.522567,126.887712),
new daum.maps.LatLng(37.52018,126.887149),
new daum.maps.LatLng(37.518972,126.894981),
new daum.maps.LatLng(37.518878,126.895368),
new daum.maps.LatLng(37.518727,126.896727),
new daum.maps.LatLng(37.518405,126.900723),
new daum.maps.LatLng(37.518381,126.90129),
new daum.maps.LatLng(37.518823,126.901132),
new daum.maps.LatLng(37.519712,126.900988),
new daum.maps.LatLng(37.520338,126.901022),
new daum.maps.LatLng(37.520476,126.90115),
new daum.maps.LatLng(37.519904,126.904889),
new daum.maps.LatLng(37.521314,126.904976),
new daum.maps.LatLng(37.525192,126.90547)

];

// 지도에 표시할 선을 생성합니다
var polyline_ydp1 = new daum.maps.Polyline({
path: linePath_ydp1, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#7A187C', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var linePath_ydp2 = [
    new daum.maps.LatLng(37.515537,126.83979),
new daum.maps.LatLng(37.511007,126.841933),
new daum.maps.LatLng(37.506478,126.844011),
new daum.maps.LatLng(37.501714,126.846469),
new daum.maps.LatLng(37.499788,126.847366),
new daum.maps.LatLng(37.498084,126.848764),
new daum.maps.LatLng(37.497653,126.849066),
new daum.maps.LatLng(37.497359,126.849153),
new daum.maps.LatLng(37.497345,126.848917),
new daum.maps.LatLng(37.497527,126.848616),
new daum.maps.LatLng(37.497806,126.848262),
new daum.maps.LatLng(37.498049,126.848493),
new daum.maps.LatLng(37.498209,126.85026),
new daum.maps.LatLng(37.498157,126.851299),
new daum.maps.LatLng(37.497866,126.85236),
new daum.maps.LatLng(37.497995,126.852408),
new daum.maps.LatLng(37.50048,126.85121),
new daum.maps.LatLng(37.50171,126.850621),
new daum.maps.LatLng(37.50283,126.850036),
new daum.maps.LatLng(37.505474,126.856992),
new daum.maps.LatLng(37.50731,126.86162),
new daum.maps.LatLng(37.507795,126.862782),
new daum.maps.LatLng(37.508262,126.863846),
new daum.maps.LatLng(37.508917,126.86475),
new daum.maps.LatLng(37.509892,126.866575),
new daum.maps.LatLng(37.510072,126.866889),
new daum.maps.LatLng(37.510481,126.867273),
new daum.maps.LatLng(37.510629,126.867432),
new daum.maps.LatLng(37.510973,126.868148),
new daum.maps.LatLng(37.51109,126.868645),
new daum.maps.LatLng(37.511111,126.868953),
new daum.maps.LatLng(37.511014,126.870514),
new daum.maps.LatLng(37.510849,126.871303),
new daum.maps.LatLng(37.50807,126.873918),
new daum.maps.LatLng(37.506783,126.875258),
new daum.maps.LatLng(37.505479,126.876839),
new daum.maps.LatLng(37.508926,126.881798),
new daum.maps.LatLng(37.512266,126.886495),
new daum.maps.LatLng(37.512341,126.886814),
new daum.maps.LatLng(37.512242,126.88721),
new daum.maps.LatLng(37.511866,126.888083),
new daum.maps.LatLng(37.511134,126.889209),
new daum.maps.LatLng(37.510712,126.889736),
new daum.maps.LatLng(37.510281,126.890231),
new daum.maps.LatLng(37.510066,126.890395),
new daum.maps.LatLng(37.511717,126.893737),
new daum.maps.LatLng(37.513036,126.897368),
new daum.maps.LatLng(37.513443,126.898536),
new daum.maps.LatLng(37.514372,126.901255),
new daum.maps.LatLng(37.514888,126.902722),
new daum.maps.LatLng(37.515378,126.904125),
new daum.maps.LatLng(37.51642,126.907138),
new daum.maps.LatLng(37.517021,126.908892),
new daum.maps.LatLng(37.517593,126.91049),
new daum.maps.LatLng(37.517908,126.911112),
new daum.maps.LatLng(37.518419,126.912443),
new daum.maps.LatLng(37.520377,126.915644),
new daum.maps.LatLng(37.521447,126.917508),
new daum.maps.LatLng(37.521471,126.917969),
new daum.maps.LatLng(37.524087,126.922158),
new daum.maps.LatLng(37.52655,126.926261),
new daum.maps.LatLng(37.524295,126.92845),
new daum.maps.LatLng(37.525675,126.930673),
new daum.maps.LatLng(37.52686,126.932628)

];

// 지도에 표시할 선을 생성합니다
var polyline_ydp2 = new daum.maps.Polyline({
path: linePath_ydp2, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#AA4A9C', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'강서양천1호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gy1">강서양천1호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gecXkUP" role="button">강서양천1호</a>',
        latlng: new daum.maps.LatLng(37.572534,126.806045)
        },
        {
        title:'강서양천2호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gy2">강서양천2호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/glhflUP" role="button">강서양천2호</a>',
        latlng: new daum.maps.LatLng(37.561125,126.81166)
        },
        {
        title:'관악동작호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gd">관악동작호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gHkulUP" role="button">관악동작호</a>',
        latlng: new daum.maps.LatLng(37.470863,126.941)
        },
        {
        title:'광명광명호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gmgm">광명광명호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gKPMlUP" role="button">광명광명호</a>',
        latlng: new daum.maps.LatLng(37.449771,126.88718)
        },
        {
        title:'구로영등포호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gyd">구로영등포호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gMO4lUP" role="button">구로영등포호</a>',
        latlng: new daum.maps.LatLng(37.484946,126.886816)
        },
        {
        title:'금천동작호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gdj">금천동작호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gfUrmUP" role="button">금천동작호</a>',
        latlng: new daum.maps.LatLng(37.442811,126.903886)
        },
        {
        title:'부천영등포호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_bcy">부천영등포호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/guGPmUP" role="button">부천영등포호</a>',
        latlng: new daum.maps.LatLng(37.489246,126.817638)
        },
        {
        title:'서초동작호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_sd">서초동작호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/g9F3mUP" role="button">서초동작호</a>',
        latlng: new daum.maps.LatLng(37.476584,126.982636)
        },
        {
        title:'양천영등포1호',
		content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_ydp1">양천영등포1호</a>',
        //content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/g2vlnUP" role="button">양천영등포1호</a>',
        latlng: new daum.maps.LatLng(37.541216,126.830577)
        },
        {
        title:'양천영등포2호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_ydp2">양천영등포2호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gP2AnUP" role="button">양천영등포2호</a>',
        latlng: new daum.maps.LatLng(37.515537,126.83979)
        },
        {
        title:'강북용산호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_gbys">강북용산호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/guQ8qUP" role="button">강북용산호</a>',
        latlng: new daum.maps.LatLng(37.6081801,127.0156002)
        },
        {
        title:'마포영등포호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_mpyd">마포영등포호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gfqorUP" role="button">마포영등포호</a>',
        latlng: new daum.maps.LatLng(37.585352,126.879677)
        },
        {
        title:'서대문마포호',
		content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_sdmp">서대문마포호</a>',
        //content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gVsArUP" role="button">서대문마포호</a>',
        latlng: new daum.maps.LatLng(37.592166,126.943781)
        },
        {
        title:'은평마포1호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_emp1">은평마포1호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/gQOUrUP" role="button">은평마포1호</a>',
        latlng: new daum.maps.LatLng(37.601022,126.933717)
        },
        {
        title:'은평마포2호',
        content :'<a class="btn btn-info btn-sm" data-toggle="modal" href="#myModal_emp2">은평마포2호</a>',
		//content: '<a class="btn btn-info btn-sm" href="https://open.kakao.com/o/g47fsUP" role="button">은평마포2호</a>',
        latlng: new daum.maps.LatLng(37.604665,126.910396)
        },
        {
        title:'19_PBS셔틀안내',
        content: '<a class="btn btn-danger btn-sm" data-toggle="modal" href="#myModal">19_PBS셔틀안내</a>',
        latlng: new daum.maps.LatLng(37.530471,126.923173)
        },

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

