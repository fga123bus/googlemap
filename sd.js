var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.476584,126.982636), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
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
var polyline = new daum.maps.Polyline({
path: linePath, // 선을 구성하는 좌표배열 입니다
strokeWeight: 5, // 선의 두께 입니다
strokeColor: '#FF0000', // 선의 색깔입니다
strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
strokeStyle: 'solid' // 선의 스타일입니다
});

var positions = [
    {
        title:'1.사당역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 사당역(08:00)</a>',
        latlng: new daum.maps.LatLng(37.476608,126.98265)
        },
        {
        title:'2.예술인마을',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 예술인마을(08:05)</a>',
        latlng: new daum.maps.LatLng(37.47595,126.972829)
        },
        {
        title:'3.낙성대입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 낙성대입구(08:10)</a>',
        latlng: new daum.maps.LatLng(37.477883,126.96187)
        },
        {
        title:'4.인헌초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 인헌초등학교(08:12)</a>',
        latlng: new daum.maps.LatLng(37.476542,126.959112)
        },
        {
        title:'5.서울대입구역,원당초등학교정문',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 서울대입구역 원당초등학교정문(08:15)</a>',
        latlng: new daum.maps.LatLng(37.480497,126.955805)
        },
        {
        title:'6.신봉초입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 신봉초입구(08:18)</a>',
        latlng: new daum.maps.LatLng(37.484507,126.946794)
        },
        {
        title:'7.현대시장',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 현대시장(08:19)</a>',
        latlng: new daum.maps.LatLng(37.487265,126.946868)
        },
        {
        title:'8.신상도초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 신상도초등학교(08:23)</a>',
        latlng: new daum.maps.LatLng(37.499444,126.943622)
        },
        {
        title:'9.장승배기역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 장승배기역(08:26)</a>',
        latlng: new daum.maps.LatLng(37.504216,126.939325)
        },
        {
        title:'10.동작구청,노량진초등학교앞',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal10">10. 동작구청 노량진초등학교앞(08:27)</a>',
        latlng: new daum.maps.LatLng(37.510683,126.940259)
        }
        

];



