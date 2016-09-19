/**
 * Created by Jason on 16/8/19.
 */
(function ($) {
    $(function () {
        $('a').hover(function () {
            $(this).toggleClass('selected');
        });
    });
})(jQuery);