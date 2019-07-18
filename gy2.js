var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.561125,126.81166), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
    title: '1.송정역3번출구',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 송정역3번출구(08:00)</a>',
    latlng: new daum.maps.LatLng(37.561087,126.811601)
    },
	{
    title: '1-1.마곡엠밸리',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">1-1. 마곡엠밸리(08:00)</a>',
    latlng: new daum.maps.LatLng(37.5600697,126.8217914)
    },
    {
    title: '1-2. 마곡역',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal12">1-2. 마곡역</a>',
    latlng: new daum.maps.LatLng(37.559761174726525,126.82540878194253)
    },
	{
    title:'2.발산역8번출구',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 발산역8번출구(08:03)</a>',
    latlng: new daum.maps.LatLng(37.55847,126.836898)
    },
    {
    title:'3.우장산역 4번출구',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 우장산역 4번출구(08:07)</a>',
    latlng: new daum.maps.LatLng(37.548847,126.836246)
    },
    {
    title:'4.화곡역8번출구',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 화곡역8번출구(08:12)</a>',
    latlng: new daum.maps.LatLng(37.541922,126.839985)
    },
    {
    title:'5.까치산역4번출구',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 까치산역4번출구(08:19)</a>',
    latlng: new daum.maps.LatLng(37.532331,126.84626)
    },
    {
    title:'6.화곡2치안센터',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 화곡2치안센터(08:24)</a>',
    latlng: new daum.maps.LatLng(37.530915,126.852382)
    },
    {
    title:'7.영도초등학교',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 영도초등학교(08:34)</a>',
    latlng: new daum.maps.LatLng(37.535558,126.870448)
    },
    {
    title:'8.월촌초등학교',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 월촌초등학교(08:35)</a>',
    latlng: new daum.maps.LatLng(37.540281,126.875502)
    },
    {
    title:'9.목원초등학교 정문',
    content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 목원초등학교 정문(08:38)</a>',
    latlng: new daum.maps.LatLng(37.543267,126.881812)
    }

];



