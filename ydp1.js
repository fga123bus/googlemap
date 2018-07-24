var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.541216,126.830577), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.강서교육청',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 강서교육청(08:00)</a>',
        latlng: new daum.maps.LatLng(37.541216,126.830577)
        },
        {
        title:'2.월정초등학교 정문건너편',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 월정초등학교 정문건너편(08:06)</a>',
        latlng: new daum.maps.LatLng(37.534386,126.835589)
        },
        {
        title:'3.서서울호수공원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 서서울호수공원(08:15)</a>',
        latlng: new daum.maps.LatLng(37.52916,126.832658)
        },
        {
        title:'4.강서초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 강서초등학교(08:22)</a>',
        latlng: new daum.maps.LatLng(37.521829,126.841637)
        },
        {
        title:'5.양강중학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 양강중학교(08:25)</a>',
        latlng: new daum.maps.LatLng(37.523753,126.849954)
        },
        {
        title:'6.신정역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 신정역(08:27)</a>',
        latlng: new daum.maps.LatLng(37.524698,126.854423)
        },
        {
        title:'7.목동역 목동오거리',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 목동역 목동오거리(08:30)</a>',
        latlng: new daum.maps.LatLng(37.525828,126.863094)
        },
        {
        title:'8.목운초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 목운초등학교(08:33)</a>',
        latlng: new daum.maps.LatLng(37.526141,126.873182)
        },
        {
        title:'9.영문초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 영문초등학교(08:39)</a>',
        latlng: new daum.maps.LatLng(37.520046,126.887911)
        },
        {
        title:'10.문래역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 문래역(08:43)</a>',
        latlng: new daum.maps.LatLng(37.519034,126.89436)
        },
		{
        title:'10-1.영등포시장역2번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal101">10-1.영등포시장역2번출구(08:43)</a>',
        latlng: new daum.maps.LatLng(37.522956,126.905253)
        },
        {
        title:'11.신화병원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">11. 신화병원(08:49)</a>',
        latlng: new daum.maps.LatLng(37.525144,126.90547)
        }
       

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

