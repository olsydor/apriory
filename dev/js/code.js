
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
$(document).ready(function(){
	$('#show_0').click(function(){
		$("#det_0").slideDown(1000);
		$(this).hide()
		$("#hide_0").show()	
	});
	$('#hide_0').click(function(){
		$("#det_0").slideUp(1000);
		$(this).hide()
		$("#show_0").show()	
	});
	
	$('#show_1').click(function(){
		$("#det_1").slideDown(1000);
		$(this).hide()
		$("#hide_1").show()		
	});
	$('#hide_1').click(function(){
		$("#det_1").slideUp(1000);
		$(this).hide()
		$("#show_1").show()	
	});
	
	$('#show_2').click(function(){
		$("#det_2").slideDown(1000);
		$(this).hide()
		$("#hide_2").show()	
	});
	$('#hide_2').click(function(){
		$("#det_2").slideUp(1000);
		$(this).hide()
		$("#show_2").show()
	});
	
	$('#show_3').click(function(){
		$("#det_3").slideDown(1000);
		$(this).hide()
		$("#hide_3").show()	
	});
	$('#hide_3').click(function(){
		$("#det_3").slideUp(1000);
		$(this).hide()
		$("#show_3").show()
		
	});
	$('#show_4').click(function(){
		$("#det_4").slideDown(1000);
		$(this).hide()
		$("#hide_4").show()
	});
	$('#hide_4').click(function(){
		$("#det_4").slideUp(1000);
		$(this).hide()
		$("#show_4").show()
		
	});
	$('#show_5').click(function(){
		$("#det_5").slideDown(1000);
		$(this).hide()
		$("#hide_4").show()
		
	});
	$('#hide_5').click(function(){
		$("#det_5").slideUp(1000);
		$(this).hide()
		$("#show_5").show()
		
	});
});