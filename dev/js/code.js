
function initMap() {
	var uluru = {lat: 55.7412458, lng: 37.6044463};
	var mark_in_map = new google.maps.LatLng(55.7466322,37.6341819);
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom:14,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: mark_in_map,
	  map: map
	});	
}