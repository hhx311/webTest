(function($) {
	$.fn.banner_sound = function(audio_src) {
		var banner_audio;
		return this.each(function() {
			$(this)
			.bind('mouseover', function() {
				banner_audio.load();
				banner_audio.play();
			})
			.bind('mouseout', function() {
				banner_audio.pause();
			});
		});
	};
})(jQuery);
