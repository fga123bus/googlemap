var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.572534, 126.806045), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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

var linePath2 = [
new daum.maps.LatLng(37.5643357,126.848799),
new daum.maps.LatLng(37.566938,126.8505907),
new daum.maps.LatLng(37.5672952,126.8508589),
new daum.maps.LatLng(37.5665893,126.8516529),
new daum.maps.LatLng(37.5657304,126.8527472),
new daum.maps.LatLng(37.5651096,126.8537128),
new daum.maps.LatLng(37.5640125,126.852715),
new daum.maps.LatLng(37.5628474,126.8516636)
];

// 지도에 표시할 선을 생성합니다
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var polyline2 = new daum.maps.Polyline({
path: linePath2, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title: '1.개화산역2번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 개화산역2번출구(08:00)</a>',
        latlng: new daum.maps.LatLng(37.572474,126.806125)

    },
	{
        title: '1-1.방화현대2차아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">1-1. 방화현대2차아파트(08:00)</a>',
        latlng: new daum.maps.LatLng(37.573226,126.819349)

    },
    {
        title: '2.양천초,겸재정선미술관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 양천초,겸재정선기념관(08:09)</a>',
        latlng: new daum.maps.LatLng(37.56867,126.840617)

    },
    {
        title: '3.탑산초근처(우회됨)', 
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 탑산초근처-우회됨(08:12)</a>',
        latlng: new daum.maps.LatLng(37.5653902,126.8531871)
    },
    {
        title: '4.가양역 우성아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 가양역 우성아파트(08:13)</a>',
        latlng: new daum.maps.LatLng(37.561317,126.854381)
    },
    {
        title: '5.강서소방서,이마트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 강서소방서.이마트(08:20)</a>',
        latlng: new daum.maps.LatLng(37.557306,126.861926)
    },
    {
        title: '6.백석어린이 공원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 백석어린이 공원(08:23)</a>',
        latlng: new daum.maps.LatLng(37.55256,126.863642)
    },
    {
        title: '7.등촌역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 등촌역4번출구(08:27)</a>',
        latlng: new daum.maps.LatLng(37.549504,126.867277)
    },
    {
        title: '8.염창역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 염창역3번출구(08:28)</a>',
        latlng: new daum.maps.LatLng(37.546768,126.874937)
    }
    

];



