var linePath = [
    new daum.maps.LatLng(37.489246,126.817638),
new daum.maps.LatLng(37.490057,126.819139),
new daum.maps.LatLng(37.490928,126.8205),
new daum.maps.LatLng(37.4919,126.82193),
new daum.maps.LatLng(37.4926,126.823538),
new daum.maps.LatLng(37.492894,126.824748),
new daum.maps.LatLng(37.493128,126.825957),
new daum.maps.LatLng(37.493141,126.828886),
new daum.maps.LatLng(37.493162,126.831772),
new daum.maps.LatLng(37.493196,126.83748),
new daum.maps.LatLng(37.492847,126.836901),
new daum.maps.LatLng(37.492513,126.835865),
new daum.maps.LatLng(37.49223,126.834808),
new daum.maps.LatLng(37.491656,126.832566),
new daum.maps.LatLng(37.491077,126.83291),
new daum.maps.LatLng(37.490915,126.833103),
new daum.maps.LatLng(37.490374,126.833462),
new daum.maps.LatLng(37.489934,126.83376),
new daum.maps.LatLng(37.489591,126.834042),
new daum.maps.LatLng(37.48933,126.834475),
new daum.maps.LatLng(37.489078,126.835015),
new daum.maps.LatLng(37.488621,126.836069),
new daum.maps.LatLng(37.491707,126.840715),
new daum.maps.LatLng(37.492528,126.840634),
new daum.maps.LatLng(37.493194,126.840511),
new daum.maps.LatLng(37.493685,126.840422),
new daum.maps.LatLng(37.494367,126.840146),
new daum.maps.LatLng(37.496229,126.844403),
new daum.maps.LatLng(37.4971,126.846252),
new daum.maps.LatLng(37.497779,126.847284),
new daum.maps.LatLng(37.497973,126.847961),
new daum.maps.LatLng(37.498082,126.848756),
new daum.maps.LatLng(37.498197,126.850065),
new daum.maps.LatLng(37.498202,126.85102),
new daum.maps.LatLng(37.498053,126.851776),
new daum.maps.LatLng(37.49738,126.853804),
new daum.maps.LatLng(37.49725,126.853914),
new daum.maps.LatLng(37.497173,126.854371),
new daum.maps.LatLng(37.497244,126.856306),
new daum.maps.LatLng(37.497265,126.856733),
new daum.maps.LatLng(37.497216,126.857542),
new daum.maps.LatLng(37.496852,126.859552),
new daum.maps.LatLng(37.496531,126.861294),
new daum.maps.LatLng(37.49646,126.86179),
new daum.maps.LatLng(37.496458,126.86229),
new daum.maps.LatLng(37.49658,126.863074),
new daum.maps.LatLng(37.496816,126.863597),
new daum.maps.LatLng(37.498309,126.865532),
new daum.maps.LatLng(37.499072,126.866484),
new daum.maps.LatLng(37.499444,126.867268),
new daum.maps.LatLng(37.499491,126.868213),
new daum.maps.LatLng(37.499127,126.86997),
new daum.maps.LatLng(37.498725,126.871909),
new daum.maps.LatLng(37.498778,126.872552),
new daum.maps.LatLng(37.499098,126.873518),
new daum.maps.LatLng(37.500284,126.876104),
new daum.maps.LatLng(37.501039,126.877386),
new daum.maps.LatLng(37.503074,126.880143),
new daum.maps.LatLng(37.504306,126.881931),
new daum.maps.LatLng(37.506785,126.885328),
new daum.maps.LatLng(37.506745,126.885482),
new daum.maps.LatLng(37.50433,126.887745),
new daum.maps.LatLng(37.5045,126.888185),
new daum.maps.LatLng(37.506283,126.891607),
new daum.maps.LatLng(37.507136,126.893297),
new daum.maps.LatLng(37.50781,126.894624),
new daum.maps.LatLng(37.507628,126.895067),
new daum.maps.LatLng(37.506358,126.896481),
new daum.maps.LatLng(37.505172,126.897964),
new daum.maps.LatLng(37.510628,126.910377),
new daum.maps.LatLng(37.511326,126.91373),
new daum.maps.LatLng(37.511747,126.915833),
new daum.maps.LatLng(37.511932,126.916444),
new daum.maps.LatLng(37.512177,126.917067),
new daum.maps.LatLng(37.513198,126.918172),
new daum.maps.LatLng(37.514113,126.918831),
new daum.maps.LatLng(37.514229,126.918814),
new daum.maps.LatLng(37.514759,126.917974),
new daum.maps.LatLng(37.515238,126.917606),
new daum.maps.LatLng(37.516163,126.917095),
new daum.maps.LatLng(37.516721,126.91689)


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
        title:'1.동곡초.온수고가사거리',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1.동곡초.온수고가사거리</a>',
        latlng: new daum.maps.LatLng(37.489246,126.817658)
        },
        {
        title:'2.온수역',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2.온수역</a>',
        latlng: new daum.maps.LatLng(37.492519,126.823578)
        },
        {
        title:'3.오류남초등학교후문',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3.오류남초등학교 후문</a>',
        latlng: new daum.maps.LatLng(37.489738,126.837735)
        },
        {
        title:'4.개봉사거리',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4.개봉사거리</a>',
        latlng: new daum.maps.LatLng(37.497183,126.857261)
        },
        {
        title:'5.구로소방서 앞(고원초)',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5.구로소방서</a>',
        latlng: new daum.maps.LatLng(37.498142,126.865397)
        },
        {
        title:'6.서울미래초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6.서울미래초</a>',
        latlng: new daum.maps.LatLng(37.504959,126.889175)
        },
        {
        title:'7.도림동자치회관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7.도림동자치회관</a>',
        latlng: new daum.maps.LatLng(37.509352,126.907601)
        },
        {
        title:'8.대신시장',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8.대신시장</a>',
        latlng: new daum.maps.LatLng(37.511884,126.91645)
        },
        {
        title:'9.신길역1번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9.신길역1번출구</a>',
        latlng: new daum.maps.LatLng(37.51661,126.916928)
        }

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

