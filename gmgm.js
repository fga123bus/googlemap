var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.449771,126.88718), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
    new daum.maps.LatLng(37.449771,126.88718),
new daum.maps.LatLng(37.450627,126.889545),
new daum.maps.LatLng(37.453275,126.887623),
new daum.maps.LatLng(37.454578,126.886694),
new daum.maps.LatLng(37.455774,126.885669),
new daum.maps.LatLng(37.457669,126.889826),
new daum.maps.LatLng(37.458864,126.888993),
new daum.maps.LatLng(37.46,126.888118),
new daum.maps.LatLng(37.462244,126.886248),
new daum.maps.LatLng(37.470843,126.878829),
new daum.maps.LatLng(37.470838,126.878695),
new daum.maps.LatLng(37.469134,126.875873),
new daum.maps.LatLng(37.468485,126.874757),
new daum.maps.LatLng(37.46699,126.868717),
new daum.maps.LatLng(37.466249,126.868985),
new daum.maps.LatLng(37.465193,126.869524),
new daum.maps.LatLng(37.464708,126.87003),
new daum.maps.LatLng(37.464257,126.870632),
new daum.maps.LatLng(37.46369,126.870053),
new daum.maps.LatLng(37.463647,126.869802),
new daum.maps.LatLng(37.463783,126.868751),
new daum.maps.LatLng(37.463855,126.868778),
new daum.maps.LatLng(37.46378,126.86932),
new daum.maps.LatLng(37.463726,126.869698),
new daum.maps.LatLng(37.46374,126.869905),
new daum.maps.LatLng(37.463904,126.870168),
new daum.maps.LatLng(37.464267,126.870501),
new daum.maps.LatLng(37.464815,126.869698),
new daum.maps.LatLng(37.465309,126.869315),
new daum.maps.LatLng(37.465598,126.869178),
new daum.maps.LatLng(37.466456,126.868784),
new daum.maps.LatLng(37.467029,126.868619),
new daum.maps.LatLng(37.467407,126.868604),
new daum.maps.LatLng(37.468689,126.868685),
new daum.maps.LatLng(37.470064,126.868669),
new daum.maps.LatLng(37.472224,126.867811),
new daum.maps.LatLng(37.47441,126.867018),
new daum.maps.LatLng(37.474839,126.866772),
new daum.maps.LatLng(37.475475,126.866271),
new daum.maps.LatLng(37.47589,126.865469),
new daum.maps.LatLng(37.47685,126.863101),
new daum.maps.LatLng(37.478408,126.863932),
new daum.maps.LatLng(37.479622,126.863884),
new daum.maps.LatLng(37.48364,126.86655),
new daum.maps.LatLng(37.485011,126.86622),
new daum.maps.LatLng(37.486186,126.86589),
new daum.maps.LatLng(37.486414,126.866045),
new daum.maps.LatLng(37.486706,126.866629),
new daum.maps.LatLng(37.487052,126.867411)

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
        title:'1.소하초중고등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 소하초중고등학교(08:00)</a>',
        latlng: new daum.maps.LatLng(37.449708,126.88722)
        },
        {
        title:'2.철산중학교, 진성고등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 철산중학교 진성고등학교(08:08)</a>',
        latlng: new daum.maps.LatLng(37.469801,126.876925)
        },
        {
        title:'3.하안북초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. 하안북초등학교(08:12)</a>',
        latlng: new daum.maps.LatLng(37.464052,126.870183)
        },
        {
        title:'4.철산푸르지오하늘채아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 철산푸르지오하늘채아파트(08:14)</a>',
        latlng: new daum.maps.LatLng(37.472362,126.867906)
        },
        {
        title:'5.광명시민회관',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 광명시민회관(08:15)</a>',
        latlng: new daum.maps.LatLng(37.476124,126.864992)
        },
        {
        title:'6.광명북중고등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 광명북중고등학교(08:21)</a>',
        latlng: new daum.maps.LatLng(37.487026,126.86747)
        }
        
        

];

var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

