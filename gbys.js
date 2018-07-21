var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.6081801,127.0156002), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.열매교회',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1.열매교회(08:00)</a>',
        latlng: new daum.maps.LatLng(37.608898,127.015388)
        },
        {
        title:'2.돈암사거리,성신여대입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 돈암사거리성신여대입구(08:06)</a>',
        latlng: new daum.maps.LatLng(37.5934151,127.0177889)
        },
        {
        title:'3.한성대입구역 7번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 한성대입구역 7번출구(08:11)</a>',
        latlng: new daum.maps.LatLng(37.588876,127.006833)
        },
        {
        title:'4.맥도날드 성대점앞',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 맥도날드 성대점앞(08:14)</a>',
        latlng: new daum.maps.LatLng(37.5834257,126.9989812)
        },
        {
        title:'5.광장시장',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 광장시장(08:24)</a>',
        latlng: new daum.maps.LatLng(37.5698549,126.997726)
        },
        {
        title:'6.을지로4가역 3번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 을지로4가역 3번출구(08:24)</a>',
        latlng: new daum.maps.LatLng(37.5676779,126.9978869)
        },
        {
        title:'7.충무로역 8번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 충무로역 8번출구(08:28)</a>',
        latlng: new daum.maps.LatLng(37.5616313,126.9954515)
        },
        {
        title:'8.명동역 5번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 명동역 5번출구(08:32)</a>',
        latlng: new daum.maps.LatLng(37.5610189,126.9848085)
        },
        {
        title:'9.서울역 13번 출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 서울역 13번출구(08:42)</a>',
        latlng: new daum.maps.LatLng(37.5524201,126.9722557)
        },
        {
        title:'10.숙대입구역 10번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 숙대입구역 10번출구(08:44)</a>',
        latlng: new daum.maps.LatLng(37.545479,126.9716978)
        },
        {
        title:'11.용산경찰서앞',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">11. 용산경찰서앞(08:48)</a>',
        latlng: new daum.maps.LatLng(37.5403324,126.9689298)
        },
        {
        title:'12.효창공원역 2번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal12">12. 효창공원역 2번출구(08:52)</a>',
        latlng: new daum.maps.LatLng(37.5391073,126.9619989)
        },
        {
        title:'13.용마루고개 정류장',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal13">13. 용마루고개 정류장(08:54)</a>',
        latlng: new daum.maps.LatLng(37.5406386,126.9582438)
        },
        {
        title:'14.공덕역 7번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal14">14. 공덕역 7번출구(08:58)</a>',
        latlng: new daum.maps.LatLng(37.5431737,126.95274)
        }
        
        

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

