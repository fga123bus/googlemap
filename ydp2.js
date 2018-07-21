var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.515537,126.83979), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.강신중학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 강신중학교(08:00)</a>',
        latlng: new daum.maps.LatLng(37.515537,126.83979)
        },
        {
        title:'2.신정동 현대아파트/서부트럭터미널',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 신정동 현대APT 서부트럭터미널(08:02)</a>',
        latlng: new daum.maps.LatLng(37.508398,126.842962)
        },
        {
        title:'3.세곡초등학교인근 제일약국',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 세곡초 인근 제일약국(08:07)</a>',
        latlng: new daum.maps.LatLng(37.502762,126.850092)
        },
        {
        title:'4.덕의초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 덕의초등학교(08:12)</a>',
        latlng: new daum.maps.LatLng(37.506378,126.859429)
        },
        {
        title:'5.은정초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 은정초등학교(08:14)</a>',
        latlng: new daum.maps.LatLng(37.510395,126.867236)
        },
        {
        title:'6.갈산초등학교후문',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 갈산초등학교후문(08:15)</a>',
        latlng: new daum.maps.LatLng(37.511029,126.869431)
        },
        {
        title:'7.대림5차아파트702동',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 대림5차아파트702동(08:19)</a>',
        latlng: new daum.maps.LatLng(37.507511,126.879819)
        },
        {
        title:'8.우성아파트(신도림초)',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 우성아파트(신도림초)(08:21)</a>',
        latlng: new daum.maps.LatLng(37.511468,126.885399)
        },
        {
        title:'9.신도림역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 신도림역(08:23)</a>',
        latlng: new daum.maps.LatLng(37.5105,126.889856)
        },
        {
        title:'10.영등포초교 앞',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 영등포초교 앞(08:26)</a>',
        latlng: new daum.maps.LatLng(37.513038,126.897622)
        },
        {
        title:'11.여의나루역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">11. 여의나루역(08:33)</a>',
        latlng: new daum.maps.LatLng(37.527073,126.932767)
        }

];


