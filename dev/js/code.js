
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
		$(".short_0").hide()
		$("#det_0").show()
		$(this).hide()
		$("#hide_0").show()	
	});
	$('#hide_0').click(function(){
		$("#det_0").hide()
		$(this).hide()
		$("#show_0").show()
		$(".short_0").show()
	});
	
	$('#show_1').click(function(){
		$(".short_1").hide()
		$("#det_1").show()
		$(this).hide()
		$("#hide_1").show()	
	});
	$('#hide_1').click(function(){
		$("#det_1").hide()
		$(this).hide()
		$("#show_1").show()
		$(".short_1").show()
	});
	
	$('#show_2').click(function(){
		$(".short_2").hide()
		$("#det_2").show()
		$(this).hide()
		$("#hide_2").show()	
	});
	$('#hide_2').click(function(){
		$("#det_2").hide()
		$(this).hide()
		$("#show_2").show()
		$(".short_2").show()
	});
	
	$('#show_3').click(function(){
		$(".short_3").hide()
		$("#det_3").show()
		$(this).hide()
		$("#hide_3").show()	
	});
	$('#hide_3').click(function(){
		$("#det_3").hide()
		$(this).hide()
		$("#show_3").show()
		$(".short_3").show()
	});

	$('#show_4').click(function(){
		$(".short_4").hide()
		$("#det_4").show()
		$(this).hide()
		$("#hide_4").show()	
	});
	$('#hide_4').click(function(){
		$("#det_4").hide()
		$(this).hide()
		$("#show_4").show()
		$(".short_4").show()
	});

	$('#show_5').click(function(){
		$(".short_5").hide()
		$("#det_5").show()
		$(this).hide()
		$("#hide_5").show()	
	});
	$('#hide_5').click(function(){
		$("#det_5").hide()
		$(this).hide()
		$("#show_5").show()
		$(".short_5").show()
	});
	
	
	
	
	
	
});