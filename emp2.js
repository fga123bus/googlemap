var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.604665,126.910396), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
    new daum.maps.LatLng(37.6214252,126.9263792),
new daum.maps.LatLng(37.6206222,126.9248021),
new daum.maps.LatLng(37.6203927,126.9244534),
new daum.maps.LatLng(37.6200613,126.9234878),
new daum.maps.LatLng(37.6197724,126.9229245),
new daum.maps.LatLng(37.6192582,126.9224471),
new daum.maps.LatLng(37.6190883,126.9221306),
new daum.maps.LatLng(37.6188418,126.921165),
new daum.maps.LatLng(37.6187314,126.9208431),
new daum.maps.LatLng(37.6185486,126.9203925),
new daum.maps.LatLng(37.6184127,126.9201243),
new daum.maps.LatLng(37.6149538,126.9178927),
new daum.maps.LatLng(37.6112568,126.9172812),
new daum.maps.LatLng(37.6123787,126.9153929),
new daum.maps.LatLng(37.6137385,126.9115734),
new daum.maps.LatLng(37.6060934,126.9105703),
new daum.maps.LatLng(37.6056855,126.9105059),
new daum.maps.LatLng(37.604665,126.910396),
new daum.maps.LatLng(37.602394,126.910301),
new daum.maps.LatLng(37.601194,126.91025),
new daum.maps.LatLng(37.599969,126.910195),
new daum.maps.LatLng(37.597848,126.910053),
new daum.maps.LatLng(37.596958,126.909601),
new daum.maps.LatLng(37.596314,126.909213),
new daum.maps.LatLng(37.59203,126.914718),
new daum.maps.LatLng(37.588467,126.919143),
new daum.maps.LatLng(37.585628,126.922742),
new daum.maps.LatLng(37.577967,126.930327),
new daum.maps.LatLng(37.577113,126.93287),
new daum.maps.LatLng(37.576838,126.933836),
new daum.maps.LatLng(37.576335,126.935445),
new daum.maps.LatLng(37.575608,126.935268),
new daum.maps.LatLng(37.575156,126.935291),
new daum.maps.LatLng(37.574015,126.935517),
new daum.maps.LatLng(37.573251,126.935564),
new daum.maps.LatLng(37.572512,126.935322),
new daum.maps.LatLng(37.566944,126.931),
new daum.maps.LatLng(37.566095,126.930299),
new daum.maps.LatLng(37.563897,126.928656),
new daum.maps.LatLng(37.562484,126.927641),
new daum.maps.LatLng(37.561734,126.927117),
new daum.maps.LatLng(37.561334,126.926845),
new daum.maps.LatLng(37.560942,126.926701),
new daum.maps.LatLng(37.559373,126.926559),
new daum.maps.LatLng(37.558938,126.926734),
new daum.maps.LatLng(37.558575,126.926914),
new daum.maps.LatLng(37.558493,126.92706),
new daum.maps.LatLng(37.55518,126.936218)

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
        title:'-1.불광지구대',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal01">-1. 블광지구대(07:50)</a>',
        latlng: new daum.maps.LatLng(37.6214252,126.9263792)
        },
		{
        title:'0.구산치안센터',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal0">0. 구산치안센터(08:00)</a>',
        latlng: new daum.maps.LatLng(37.6114726,126.9111415)
        },
        {   
        title:'1.시립서북병원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 시립서북병원(08:00)</a>',
        latlng: new daum.maps.LatLng(37.604665,126.910396)
        },
        {
        title:'2.상신초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 상신초등학교(08:05)</a>',
        latlng: new daum.maps.LatLng(37.595705,126.909921)
        },
        {
        title:'3.신사초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 신사초등학교(08:06)</a>',
        latlng: new daum.maps.LatLng(37.593328,126.912948)
        },
        {
        title:'4.응암초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 응암초등학교(08:09)</a>',
        latlng: new daum.maps.LatLng(37.587601,126.920222)
        },
        {
        title:'5.명지전문대.충암중고등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 명지전문대 충암중고등학교(08:10)</a>',
        latlng: new daum.maps.LatLng(37.584762,126.923561)
        },
        {
        title:'6.흥연2교 현대교통종점',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 흥연2교 현대교통종점(08:21)</a>',
        latlng: new daum.maps.LatLng(37.578322,126.929922)
        },
        {
        title:'7.연희초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 연희초등학교(08:27)</a>',
        latlng: new daum.maps.LatLng(37.56974,126.933098)
        },
        {
        title:'8.신촌역8번 출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 신촌역8번 출구(08:33)</a>',
        latlng: new daum.maps.LatLng(37.555218,126.935995)
        }

];



