var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.601022,126.933717), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.녹번역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 녹번역(08:00)</a>',
        latlng: new daum.maps.LatLng(37.601064,126.933674)
        },
		{
        title:'1-1.은평구청근처',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">1-1. 은평구청근처(08:00)</a>',
        latlng: new daum.maps.LatLng(37.601367,126.930573)
        },
        {
        title:'2.녹번초등학교.서대문세무서별관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 녹번초등학교서대문세무서별관(08:03)</a>',
        latlng: new daum.maps.LatLng(37.602908,126.926112)
        },
        {
        title:'3.역촌역1번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 역촌역1번출구(08:05)</a>',
        latlng: new daum.maps.LatLng(37.605214,126.922235)
        },
		{
        title:'3-1.하늘애 주상복합근처',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal31">3-1. 하늘애 주상복합 근처(08:05)</a>',
        latlng: new daum.maps.LatLng(37.600312,126.918742)
        },
        {
        title:'4.응암역.신사오거리',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 응암역 신사오거리(08:09)</a>',
        latlng: new daum.maps.LatLng(37.597761,126.915204)
        },
        {
        title:'4-1.신흥시장 정류장',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal41">4-1. 신흥시장 정류장(08:09)</a>',
        latlng: new daum.maps.LatLng(37.595381,126.914644)
        },
		{
        title:'5.새절역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 새절역(08:11)</a>',
        latlng: new daum.maps.LatLng(37.591207,126.913494)
        },
        {
        title:'6.증산역.증산동주민센터',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 증산역 증산동주민센터(08:14)</a>',
        latlng: new daum.maps.LatLng(37.58393,126.909535)
        },
        {
        title:'7.마포구청.마포장애인복지관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 마포구청 마포장애인복지관(08:23)</a>',
        latlng: new daum.maps.LatLng(37.564886,126.901869)
        },
        {
        title:'8.망원시장.망원동월드컵시장입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 망원시장 망원동월드컵시장입구(08:26)</a>',
        latlng: new daum.maps.LatLng(37.557452,126.908622)
        },
		{
        title:'8-1.망원동물병원 근처',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal81">8-1 망원동물병원 근처(08:26)</a>',
        latlng: new daum.maps.LatLng(37.554809,126.911055)
        },
        {
        title:'9.합정역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 합정역(08:29)</a>',
        latlng: new daum.maps.LatLng(37.550609,126.912671)
        },
        {
        title:'10.광흥창역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 광흥창역(08:35)</a>',
        latlng: new daum.maps.LatLng(37.547418,126.930592)
        },

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

