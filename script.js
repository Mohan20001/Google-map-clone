let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    zoomControl: true,
    disableDefaultUI: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
    },
});

}



