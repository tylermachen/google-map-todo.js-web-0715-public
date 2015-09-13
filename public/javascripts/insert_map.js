function insertMap(latitude, longitude) {
    var mapCanvas = document.getElementById('map_canvas'),
        mapOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 8
        },
        map = new google.maps.Map(mapCanvas, mapOptions);
}
