var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.484946,126.886816), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.남구로역2번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 남구로역2번출구(08:00)</a>',
        latlng: new daum.maps.LatLng(37.484942,126.886854)
        },
        {
        title:'2.구로4동자치회관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 구로4동자치회관(08:01)</a>',
        latlng: new daum.maps.LatLng(37.486104,126.885623)
        },
        {
        title:'3.구로구청',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 구로구청(08:06)</a>',
        latlng: new daum.maps.LatLng(37.494692,126.888061)
        },
        {
        title:'4.대림역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 대림역(08:09)</a>',
        latlng: new daum.maps.LatLng(37.490895,126.893833)
        },
        {
        title:'5.대림역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 대림역(08:11)</a>',
        latlng: new daum.maps.LatLng(37.494324,126.894911)
        },
        {
        title:'6.신영초교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 신영초교(08:13)</a>',
        latlng: new daum.maps.LatLng(37.499024,126.896388)
        },
        {
        title:'7.대영초중고',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 대영초중고(08:17)</a>',
        latlng: new daum.maps.LatLng(37.50219,126.904252)
        },
        {
        title:'8.신풍역,백악관웨딩문화원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 신풍역,백악관웨딩문화원(08:20)</a>',
        latlng: new daum.maps.LatLng(37.501239,126.909894)
        },
        {
        title:'9.우신초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 우신초등학교(08:23)</a>',
        latlng: new daum.maps.LatLng(37.509169,126.910914)
        }

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

