(function($) {
	$(function() {
		// var banner_audio = new Audio();
		// banner_audio.src = 'media/123.mp3';
		//
		// $('.banner')
		// .bind('mouseover', function() {
		// 	banner_audio.load();
		// 	banner_audio.play();
		// })
		// .bind('mouseout', function() {
		// 	banner_audio.pause();
		// });
		$('.banner').banner_sound('media/123.mp3');
	});
})(jQuery);
