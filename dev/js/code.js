
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
	var $dot_0 = $('#dot_0').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_1 = $('#dot_1').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_2 = $('#dot_2').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_3 = $('#dot_3').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_4 = $('#dot_4').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var $dot_5 = $('#dot_5').dotdotdot({
		ellipsis: "\u2026 ",
		keep: '.readmore',
		callback: function( isTruncated ) {
			var self =$(this)
			if (isTruncated) {
			}else {
				self.find(".readmore").css("display","none");
			}

		}
	});
	var api_0 = $dot_0.data("dotdotdot");
	var api_1 = $dot_1.data("dotdotdot");
	var api_2 = $dot_2.data("dotdotdot");
	var api_3 = $dot_3.data("dotdotdot");
	var api_4 = $dot_4.data("dotdotdot");
	var api_5 = $dot_5.data("dotdotdot");
	$dot_0.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_0.hasClass( 'ddd-truncated' ) )
			{
				api_0.restore();
				$dot_0.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_0.removeClass( 'full-story' );
				api_0.truncate();
				api_0.watch();
			}
		});
	$dot_1.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_1.hasClass( 'ddd-truncated' ) )
			{
				api_1.restore();
				$dot_1.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_1.removeClass( 'full-story' );
				api_1.truncate();
				api_1.watch();
			}
		});
	$dot_2.on('click', '.readmore', function( e ){
			e.preventDefault();
			console.dir(this);
			//	When truncated, restore
			if ( $dot_2.hasClass( 'ddd-truncated' ) )
			{
				api_2.restore();
				$dot_2.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_2.removeClass( 'full-story' );
				api_2.truncate();
				api_2.watch();
			}
		});
	$dot_3.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_3.hasClass( 'ddd-truncated' ) )
			{
				api_3.restore();
				$dot_3.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_3.removeClass( 'full-story' );
				api_3.truncate();
				api_3.watch();
			}
		});
	$dot_4.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_4.hasClass( 'ddd-truncated' ) )
			{
				api_4.restore();
				$dot_4.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_4.removeClass( 'full-story' );
				api_4.truncate();
				api_4.watch();
			}
		});
	$dot_5.on('click', '.readmore', function( e ){
			e.preventDefault();
		
			//	When truncated, restore
			if ( $dot_5.hasClass( 'ddd-truncated' ) )
			{
				api_5.restore();
				$dot_5.addClass( 'full-story' );
			}
			//	Not truncated, truncate
			else
			{
				$dot_5.removeClass( 'full-story' );
				api_5.truncate();
				api_5.watch();
			}
		});
  

});

    