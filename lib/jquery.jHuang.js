/**
 * Created by Jason Huang.
 *
 * 个人开发中汇总的一些jQuery特效方法
 */

(function ($) {

    /**
     * 闪烁特效(使用递归函数)
     *
     * TODO:Firefox存在bug,闪烁一段时间后失效
     */
    $.fn.blink = function () {
        return $(this).fadeOut('1000', function () {
            $(this).fadeIn('1000', function () {
                $(this).blink();
            });
        });
    };

    /**
     * 动态切换标签页
     *
     * ajax不刷新当前页面进行标签页动态切换
     */
    /************ HTML格式示例 *************
     <ul id="nav">
     <li><a href="home.html">欢迎</a></li>
     ...
     <li><a href="about.html">关于</a></li>
     </ul>
     <div id="content">
     ...
     </div>
     **************************************/
    $.fn.dynamicSwitchTab = function () {
        return $(this).click(function () { //当导航链接单击时执行事件处理代码
            var toLoad = $(this).attr('href') + ' #content'; //获取当前导航链接href+#content
            $('#content').hide('fast', loadContent);         //隐藏当前content中的内容
            //获取hash值
            window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);
            function loadContent() {
                $('#content').load(toLoad, '', showNewContent()); //显示新内容
            }

            function showNewContent() {
                $('#content').show();
            }

            return false;
        });
    };

})(jQuery);
