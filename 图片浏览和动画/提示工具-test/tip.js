(function($) {
	$(function() {
		var $tipTool = $('.tipTool');
		$tipTool.hide();
		var $trigger,
			$tip,
			tipLeft,
			tipTop;
		$('.trigger').hover(
			function(evt) {
				$trigger = $(this);
				$tip = $($trigger.attr('data-tooltip'));
				tipLeft = evt.pageX;
				tipTop = evt.pageY + $trigger.outerHeight();
				$tip.css({
					'position': 'absolute',
					'left': tipLeft,
					'top': tipTop
				}).fadeIn(200);
			},
			function() {
				$tip.fadeOut(200);
			});
	});
})(jQuery);