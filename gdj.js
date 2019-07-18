var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.442811,126.903886), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
new daum.maps.LatLng(37.434496,126.903250),
new daum.maps.LatLng(37.438965,126.903222),
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
new daum.maps.LatLng(37.51039,126.924577),
new daum.maps.LatLng(37.5123896,126.9253063),
new daum.maps.LatLng(37.5147725,126.9270444),
new daum.maps.LatLng(37.516951,126.9284821),
new daum.maps.LatLng(37.5174489,126.928246),
new daum.maps.LatLng(37.5184785,126.927259)


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
        title:'0.석수역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal0">0. 석수역(07:55)</a>',
        latlng: new daum.maps.LatLng(37.43460015472234,126.90350557087955)
        },
    {
        title:'1.박미마을',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 박미마을(08:00)</a>',
        latlng: new daum.maps.LatLng(37.442777,126.903916)
        },
        {
        title:'2.금천폭포공원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 금천폭포공원(08:01)</a>',
        latlng: new daum.maps.LatLng(37.44728,126.903643)
        },
        {
        title:'3.시흥초등학교,금빛공원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 시흥초등학교</a>',
        latlng: new daum.maps.LatLng(37.453468,126.904167)
        },
        {
        title:'4.무지개아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 무지개아파트(08:08)</a>',
        latlng: new daum.maps.LatLng(37.456878,126.898638)
        },
        {
        title:'5.두산초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 두산초등학교(08:11)</a>',
        latlng: new daum.maps.LatLng(37.466367,126.891457)
        },
        {
        title:'6.문성초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 문성초등학교(08:17)</a>',
        latlng: new daum.maps.LatLng(37.474512,126.898483)
        },
        {
        title:'7.신대방상원상떼빌',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 신대방상원상떼빌(08:23)</a>',
        latlng: new daum.maps.LatLng(37.486587,126.904541)
        },
        {
        title:'8.교수아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 교수아파트(08:27)</a>',
        latlng: new daum.maps.LatLng(37.496332,126.913255)
        },
        {
        title:'9.보라매공원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 보라매공원(08:28)</a>',
        latlng: new daum.maps.LatLng(37.496809,126.916313)
        },
        {
        title:'10.서울공고옆',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 서울공고옆(08:31)</a>',
        latlng: new daum.maps.LatLng(37.502814,126.921562)
        },
        {
        title:'11.공군회관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">11. 공군회관(08:33)</a>',
        latlng: new daum.maps.LatLng(37.510114,126.924615)
        },
        {
        title:'12.여의도자이아파트 건너편',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal12">12. 여의도자이아파트 건너편(08:33)</a>',
        latlng: new daum.maps.LatLng(37.5184785,126.927259)
		}

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

