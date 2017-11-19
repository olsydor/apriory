
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

	$("#show_0").click(function(){
		$(this).hide();
		$("#dot_0").css({'max-height': '1000px',
						});
		$("#hide_0").show();
	});
	$("#hide_0").click(function(){
		$(this).hide();
		$("#dot_0").css({'max-height': '100px',
						});
		$("#show_0").show();
	});
	
	$("#show_1").click(function(){
		$(this).hide();
		$("#dot_1").css({'max-height': '1000px',
						});
		$("#hide_1").show();
	});
	$("#hide_1").click(function(){
		$(this).hide();
		$("#dot_1").css({'max-height': '100px',
						});
		$("#show_1").show();
	});
	
	$("#show_2").click(function(){
		$(this).hide();
		$("#dot_2").css({'max-height': '1000px',
						});
		$("#hide_2").show();
	});
	$("#hide_2").click(function(){
		$(this).hide();
		$("#dot_2").css({'max-height': '100px',
						});
		$("#show_2").show();
	});
	
	$("#show_3").click(function(){
		$(this).hide();
		$("#dot_3").css({'max-height': '1000px',
						});
		$("#hide_3").show();
	});
	$("#hide_3").click(function(){
		$(this).hide();
		$("#dot_3").css({'max-height': '100px',
						});
		$("#show_3").show();
	});
	
	$("#show_4").click(function(){
		$(this).hide();
		$("#dot_4").css({'max-height': '1000px',
						});
		$("#hide_4").show();
	});
	$("#hide_4").click(function(){
		$(this).hide();
		$("#dot_4").css({'max-height': '100px',
						});
		$("#show_4").show();
	});
	
	$("#show_5").click(function(){
		$(this).hide();
		$("#dot_5").css({'max-height': '1000px',
						});
		$("#hide_5").show();
	});
	$("#hide_5").click(function(){
		$(this).hide();
		$("#dot_5").css({'max-height': '100px',
						});
		$("#show_5").show();
	});
	
});

    