$(document).ready(function(){
  var $longitude = $('#longitude'),
      $latitude  = $('#latitude');

  function showPosition(position){
    $longitude.text(position.coords.longitude.toFixed(2));
    $latitude.text(position.coords.latitude.toFixed(2));
  }

  function getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }
  }

  getLocation();
  insertMap($longitude.text(), $latitude.text());
});
