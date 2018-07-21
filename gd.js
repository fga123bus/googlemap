var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.470876,126.940944), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
    new daum.maps.LatLng(37.470863,126.941),
    new daum.maps.LatLng(37.470755,126.940126),
    new daum.maps.LatLng(37.470742,126.939605),
    new daum.maps.LatLng(37.471052,126.936746),
    new daum.maps.LatLng(37.471176,126.93577),
    new daum.maps.LatLng(37.471365,126.934997),
    new daum.maps.LatLng(37.471698,126.934316),
    new daum.maps.LatLng(37.471448,126.933881),
    new daum.maps.LatLng(37.46904,126.932588),
    new daum.maps.LatLng(37.467152,126.931526),
    new daum.maps.LatLng(37.466232,126.931352),
    new daum.maps.LatLng(37.46395,126.931581),
    new daum.maps.LatLng(37.4618,126.931862),
    new daum.maps.LatLng(37.461268,126.931838),
    new daum.maps.LatLng(37.460408,126.931524),
    new daum.maps.LatLng(37.459524,126.930834),
    new daum.maps.LatLng(37.459143,126.930529),
    new daum.maps.LatLng(37.458885,126.930236),
    new daum.maps.LatLng(37.458514,126.929323),
    new daum.maps.LatLng(37.458422,126.928864),
    new daum.maps.LatLng(37.45844,126.928458),
    new daum.maps.LatLng(37.458557,126.92816),
    new daum.maps.LatLng(37.458725,126.927938),
    new daum.maps.LatLng(37.459064,126.927766),
    new daum.maps.LatLng(37.45993,126.927659),
    new daum.maps.LatLng(37.460271,126.927458),
    new daum.maps.LatLng(37.460339,126.927181),
    new daum.maps.LatLng(37.46074,126.926275),
    new daum.maps.LatLng(37.461259,126.925127),
    new daum.maps.LatLng(37.461366,126.924504),
    new daum.maps.LatLng(37.461623,126.924488),
    new daum.maps.LatLng(37.461858,126.924212),
    new daum.maps.LatLng(37.461949,126.923743),
    new daum.maps.LatLng(37.461885,126.923448),
    new daum.maps.LatLng(37.460903,126.921691),
    new daum.maps.LatLng(37.46046,126.920914),
    new daum.maps.LatLng(37.460284,126.920224),
    new daum.maps.LatLng(37.460414,126.919639),
    new daum.maps.LatLng(37.460699,126.919196),
    new daum.maps.LatLng(37.460907,126.919093),
    new daum.maps.LatLng(37.461636,126.919049),
    new daum.maps.LatLng(37.462693,126.919062),
    new daum.maps.LatLng(37.463354,126.919033),
    new daum.maps.LatLng(37.463671,126.919086),
    new daum.maps.LatLng(37.464087,126.919253),
    new daum.maps.LatLng(37.46447,126.919202),
    new daum.maps.LatLng(37.464663,126.919248),
    new daum.maps.LatLng(37.46565,126.919999),
    new daum.maps.LatLng(37.466548,126.920401),
    new daum.maps.LatLng(37.467076,126.920591),
    new daum.maps.LatLng(37.467418,126.920612),
    new daum.maps.LatLng(37.467836,126.920466),
    new daum.maps.LatLng(37.468182,126.920272),
    new daum.maps.LatLng(37.468586,126.919961),
    new daum.maps.LatLng(37.468764,126.919961),
    new daum.maps.LatLng(37.469292,126.920068),
    new daum.maps.LatLng(37.469966,126.920052),
    new daum.maps.LatLng(37.470805,126.919926),
    new daum.maps.LatLng(37.471093,126.919911),
    new daum.maps.LatLng(37.47146,126.919834),
    new daum.maps.LatLng(37.472172,126.919489),
    new daum.maps.LatLng(37.472546,126.919287),
    new daum.maps.LatLng(37.472944,126.918915),
    new daum.maps.LatLng(37.472982,126.918982),
    new daum.maps.LatLng(37.4731,126.918999),
    new daum.maps.LatLng(37.47402,126.918756),
    new daum.maps.LatLng(37.474358,126.918693),
    new daum.maps.LatLng(37.47506,126.918373),
    new daum.maps.LatLng(37.476056,126.917657),
    new daum.maps.LatLng(37.476464,126.917312),
    new daum.maps.LatLng(37.477142,126.916916),
    new daum.maps.LatLng(37.477864,126.916541),
    new daum.maps.LatLng(37.477791,126.91592),
    new daum.maps.LatLng(37.477727,126.915363),
    new daum.maps.LatLng(37.479703,126.914974),
    new daum.maps.LatLng(37.480752,126.914756),
    new daum.maps.LatLng(37.481758,126.914553),
    new daum.maps.LatLng(37.481804,126.91473),
    new daum.maps.LatLng(37.483193,126.922316),
    new daum.maps.LatLng(37.484232,126.929762),
    new daum.maps.LatLng(37.485496,126.929583),
    new daum.maps.LatLng(37.485888,126.929507),
    new daum.maps.LatLng(37.486773,126.929137),
    new daum.maps.LatLng(37.489529,126.927918),
    new daum.maps.LatLng(37.491293,126.927085),
    new daum.maps.LatLng(37.491821,126.926886),
    new daum.maps.LatLng(37.492362,126.926811),
    new daum.maps.LatLng(37.496133,126.927667),
    new daum.maps.LatLng(37.49804,126.928062),
    new daum.maps.LatLng(37.49888,126.928209),
    new daum.maps.LatLng(37.499398,126.928248),
    new daum.maps.LatLng(37.499738,126.928192),
    new daum.maps.LatLng(37.499774,126.926724),
    new daum.maps.LatLng(37.499796,126.92606)

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
        title:'1.서울산업정보학교,삼성교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 서울산업정보학교,삼성교(08:00)</a>',
        latlng: new daum.maps.LatLng(37.470876,126.940944)
        },
        {
        title:'2.미림여고,미림여자정보과학고',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 미림여자정보과학고(08:04)</a>',
        latlng: new daum.maps.LatLng(37.465628,126.931322)
        },
		{
        title:'2-1.삼성산주공아파트 입구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal21">2-1.삼성산 주공아파트 입구(08:04)</a>',
        latlng: new daum.maps.LatLng(37.461089,126.925567)
        },
        {
        title:'3.난향동주민센터',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 난향동주민센터(08:09)</a>',
        latlng: new daum.maps.LatLng(37.461011,126.919145)
        },
        {
        title:'4.우림시장, 난곡보건분소',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 우림시장 난곡보건분소(08:11)</a>',
        latlng: new daum.maps.LatLng(37.470518,126.919978)
        },
        {
        title:'5.난우초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 난우초등학교(08:12)</a>',
        latlng: new daum.maps.LatLng(37.476017,126.917706)
        },
        {
        title:'6.남서울중학교,성보중고등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6.남서울중,성보중고(08:15)</a>',
        latlng: new daum.maps.LatLng(37.48286,126.920793)
        },
        {
        title:'7.신림사거리, 신림역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 신림사거리신림역(08:18)</a>',
        latlng: new daum.maps.LatLng(37.483931,126.927948)
        },
        {
        title:'8.보라매공원, 보라매병원',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 보라매공원보라매병원(08:22)</a>',
        latlng: new daum.maps.LatLng(37.490418,126.927561)
        },
        {
        title:'9.대림초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 대림초등학교(08:26)</a>',
        latlng: new daum.maps.LatLng(37.499796,126.92606)
        }
        

];



