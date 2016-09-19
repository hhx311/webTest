(function($) {

	$(function() {

		/* 仪表板聚焦时淡入与淡出 */
		$('#dashboard').hover(
			function() {
				$(this).stop().animate({
					left: '0',
					backgroundColor: 'white'
				}, 500, 'easeInSine');
			},
			function() {
				$(this).stop().animate({
					left: '-92px',
					backgroundColor: 'gray'
				}, 1500, 'easeOutBounce');
			}); // end $('#dashboard').hover()

		/* 图片聚焦时切换大图(遍历) */
		$('#dashboard img').each(function() {
			var newImg = new Image();
			var oldImg = $(this).attr('src');
			var regex = /(\.\w{3,4}$)/;
			newImg = oldImg.replace(regex, '_h$1');
			var oldPhoto = new Image();
			$(this).hover(
				function() {
					$(this).attr('src', newImg);
					$('#photo_showBox img').hide();
					$('#photo_showBox img').attr('src', newImg).slideDown(1000);
					oldPhoto = $('#photo_showBox img');
				},
				function() {
					$(this).attr('src', oldImg);
				}); // end $(this).hover()
		}); // end $('#dashboard img').each()

		$('#dashboard a').fancybox({
			openEffect: 'elastic',
			closeEffect: 'elastic',
			openEasing: 'easeOutBounce',
			closeEasing: 'easeInSine',
			autoPlay: true,
			padding: 5,
			titlePosition: 'outside',
			closeBtn: false
		}); // end fancybox
		$('.fancybox-overlay').css('background', chartreuse);
	}); // end $(function)

})(jQuery);