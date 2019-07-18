var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(37.585352,126.879677), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨
    };

var linePath = [
    new daum.maps.LatLng(37.585352,126.879677),
new daum.maps.LatLng(37.585054,126.879464),
new daum.maps.LatLng(37.584752,126.879486),
new daum.maps.LatLng(37.580892,126.885864),
new daum.maps.LatLng(37.577085,126.892342),
new daum.maps.LatLng(37.579298,126.894622),
new daum.maps.LatLng(37.57814,126.896489),
new daum.maps.LatLng(37.575716,126.900126),
new daum.maps.LatLng(37.572432,126.90563),
new daum.maps.LatLng(37.570293,126.90306),
new daum.maps.LatLng(37.570066,126.903278),
new daum.maps.LatLng(37.56963,126.903884),
new daum.maps.LatLng(37.568693,126.906324),
new daum.maps.LatLng(37.567372,126.909685),
new daum.maps.LatLng(37.565909,126.911187),
new daum.maps.LatLng(37.565267,126.911718),
new daum.maps.LatLng(37.564171,126.907694),
new daum.maps.LatLng(37.562787,126.903209),
new daum.maps.LatLng(37.561638,126.899762),
new daum.maps.LatLng(37.560024,126.895995),
new daum.maps.LatLng(37.547652,126.888464),
new daum.maps.LatLng(37.547413,126.888024),
new daum.maps.LatLng(37.546749,126.886243),
new daum.maps.LatLng(37.546407,126.886103),
new daum.maps.LatLng(37.546096,126.886243),
new daum.maps.LatLng(37.544543,126.889343),
new daum.maps.LatLng(37.543467,126.891798),
new daum.maps.LatLng(37.540511,126.896676),
new daum.maps.LatLng(37.539039,126.897854),
new daum.maps.LatLng(37.538159,126.898357),
new daum.maps.LatLng(37.537278,126.898559),
new daum.maps.LatLng(37.53687,126.898337),
new daum.maps.LatLng(37.536512,126.898082),
new daum.maps.LatLng(37.534722,126.896792),
new daum.maps.LatLng(37.533428,126.895785),
new daum.maps.LatLng(37.533352,126.89563),
new daum.maps.LatLng(37.53205,126.894608),
new daum.maps.LatLng(37.530238,126.893191),
new daum.maps.LatLng(37.530195,126.893415),
new daum.maps.LatLng(37.53218,126.894978),
new daum.maps.LatLng(37.535866,126.897808),
new daum.maps.LatLng(37.534079,126.901413),
new daum.maps.LatLng(37.533641,126.901574),
new daum.maps.LatLng(37.533431,126.901531),
new daum.maps.LatLng(37.531275,126.899793),
new daum.maps.LatLng(37.529536,126.898425),
new daum.maps.LatLng(37.52951,126.898487),
new daum.maps.LatLng(37.531455,126.900033),
new daum.maps.LatLng(37.533407,126.901617)

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
        title:'1.하늘초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal1">1. 하늘초등학교(08:00)</a>',
        latlng: new daum.maps.LatLng(37.585278,126.879728)
        },
        {
        title:'2.상암DMC홍보관.YTN',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal2">2. 상암DMC홍보관.YTN(08:05)</a>',
        latlng: new daum.maps.LatLng(37.577666,126.891276)
        },
        {
        title:'3.DMC역.공항철도,DMC역8번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal3">3. DMC역공항철도DMC역8번출구(08:08)</a>',
        latlng: new daum.maps.LatLng(37.577006,126.898102)
        },
        {
            title:'3-1.예원아파트',
            content :'<a class="arrow_box" data-toggle="modal" href="#myModal31">3-1. 예원아파트(08:08)</a>',
            latlng: new daum.maps.LatLng(37.5743991840517,126.90238363497906)
        },
		{
        title:'3-2.참누리아파트',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal32">3-2. 참누리아파트(08:08)</a>',
        latlng: new daum.maps.LatLng(37.572680,126.905153)
        },
        {
        title:'4.성산소방파출소',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal4">4. 성산소방파출소(08:12)</a>',
        latlng: new daum.maps.LatLng(37.569857,126.903453)
        },
        {
        title:'5.중동초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal5">5. 중동초등학교(08:14)</a>',
        latlng: new daum.maps.LatLng(37.566694,126.910338)
        },
        {
        title:'6.마포구청역7번출구',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal6">6. 마포구청역7번출구(08:19)</a>',
        latlng: new daum.maps.LatLng(37.562845,126.903074)
        },
        {
        title:'7.선유중학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal7">7. 선유중학교(08:30)</a>',
        latlng: new daum.maps.LatLng(37.532088,126.894559)
        },
        {
        title:'8.당서초등학교',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal8">8. 당서초등학교(08:35)</a>',
        latlng: new daum.maps.LatLng(37.53107,126.899564)
        },
        {
        title:'9.당산역삼성래미안 APT',
        content :'<a class="arrow_box" data-toggle="modal" href="#myModal9">9. 당산역삼성래미안 APT(08:38)</a>',
        latlng: new daum.maps.LatLng(37.533341,126.901657)
        }

];



