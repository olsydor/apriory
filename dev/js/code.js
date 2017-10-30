$(document).ready(function(){
});
function initMap() {
        var uluru = {lat: 55.7412458, lng: 37.6044463};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
		
    }