$(function($) {
	$('#title').hover(function() {
		$('.subtitle-item').css('opacity', '0.2')
		$('#hovers').css('opacity', '1.0')
	}, function() {
	    $('.subtitle-item').css('opacity', '1.0')
		$('#hovers').css('opacity', '0.2').css('color', '#618dd0')
	})
	
	$('#slider').slides({
	  generatePagination: true
	})
})