var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.592166,126.943781), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.홍제초등학교정문',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 홍제초등학교정문(08:00)</a>',
        latlng: new daum.maps.LatLng(37.592291,126.943858)
        },
		{
        title:'1-1.홍제역4번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal11">1-1. 홍제역4번출구(08:00)</a>',
        latlng: new daum.maps.LatLng(37.5895524,126.9429843)
        },
        {
        title:'2.안산초등학교정문',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 안산초등학교정문(08:06)</a>',
        latlng: new daum.maps.LatLng(37.579519,126.952604)
        },
        {
        title:'3.영천시장입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 영천시장입구(08:11)</a>',
        latlng: new daum.maps.LatLng(37.569492,126.962861)
        },
        {
        title:'4.서대문전철역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 서대문전철역(08:13)</a>',
        latlng: new daum.maps.LatLng(37.565384,126.966054)
        },
        {
        title:'5.미동초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 미동초등학교(08:14)</a>',
        latlng: new daum.maps.LatLng(37.563422,126.964692)
        },
        {
        title:'6.아현역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 아현역(08:16)</a>',
        latlng: new daum.maps.LatLng(37.557382,126.956083)
        },
        {
        title:'7.이대전철역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 이대전철역(08:19)</a>',
        latlng: new daum.maps.LatLng(37.555886,126.945796)
        },
        {
        title:'8.마포자이2차아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 마포자이2차아파트(08:22)</a>',
        latlng: new daum.maps.LatLng(37.548607,126.942495)
        },
        {
        title:'9.공덕역1번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 공덕역1번출구(08:24)</a>',
        latlng: new daum.maps.LatLng(37.54408,126.950433)
        },
        {
        title:'10.마포역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 마포역(08:26)</a>',
        latlng: new daum.maps.LatLng(37.53959,126.9456)
        }

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

