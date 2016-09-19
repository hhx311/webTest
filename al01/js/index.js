//index页面banner图淡入淡出效果
$(function () {

    var index = 0,
        $dot_ul = $(".d_b_dot").find("ul"),
        $dot_li = $dot_ul.find("li"),
        dot_len = $dot_li.length;

    function a(x) {
        $dot_li.eq(x).addClass("d_b_dot_s").siblings().removeClass("d_b_dot_s");
        $(".d_b").eq(x).stop(true, true).fadeIn(function () {
            $(this).siblings().fadeOut()
        });
    }
    $dot_li.bind("click",(function () {
        index = $(this).index();
        a(index);
    }));
    $dot_ul.mouseover(function () {
        clearInterval(show);
    }).mouseout(function () {
        show = setInterval(function () {
            a(index);
            index++;
            if (index == dot_len)index = 0;
        }, 5000);
    }).mouseout();
});
//index页面iphone轮播效果
$(function () {
    $(window).resize(function () {
        $ul.attr('style', '');            //动画前后，变化的是标签内style属性 所以直接消除掉style即可
        o = 0;
        scaleImage(o);
        flag = 2;
        $(".d_c_dot_s").removeClass("d_c_dot_s");
        $(".d_c_dot").find("li").eq(flag).addClass("d_c_dot_s");
    });
    var
        $ul = $(".d_c_ct ul"),
        $li = $ul.children(),
        flag = 2,
        l_w = null,
        o = 0,
        li_l = $li.length;      // 5

    $li.clone(true).appendTo($ul);
    $ul.children("li:lt(5)").clone(true).prependTo($ul);
    $li_all = $ul.children();
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(".container").height() / 2) {
            scaleImage(o);
        }
    });

    //向左滑动按钮
    $(".t_l").click(function () {
        l_w = $li.css("width");
        if (!$ul.is(":animated")) {
            o--;
            $ul
                .stop(true, false)
                .animate({
                    "left": "+=" + l_w
                }, 500, function () {
                    if ($ul[0].style.left == "0px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * li_l + "px");
                    }
                    if ($ul[0].style.left == "-150px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * li_l - 150 + "px");
                    }
                    if ($ul[0].style.left == "-350px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * li_l - 350 + "px");
                    }
                    scaleImage(o);
                    toggleSize();
                });
            if (flag == 0)
                flag = 5;
            $(".d_c_dot_s").removeClass("d_c_dot_s");
            $(".d_c_dot").find("li").eq(flag - 1).addClass("d_c_dot_s");
            flag--;
        }
    });
    //向右滑动按钮
    $(".t_r").click(function () {
        l_w = $li.css("width");
        if (!$ul.is(":animated")) {
            o++;
            $ul
                .stop(true, false)
                .animate({
                    "left": "-=" + l_w
                }, 500, function () {
                    if ($ul[0].style.left == -parseInt(l_w) * 10 + "px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * 5 + "px");
                    }
                    if ($ul[0].style.left == "-1950px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * 5 - 150 + "px");
                    }
                    if ($ul[0].style.left == "-2150px") {
                        o = 0;
                        $ul.css("left", -parseInt(l_w) * 5 - 350 + "px");
                    }
                    scaleImage(o);
                    toggleSize();
                });
            if (flag == 4)
                flag = -1;
            $(".d_c_dot_s").removeClass("d_c_dot_s");
            $(".d_c_dot").find("li").eq(flag + 1).addClass("d_c_dot_s");
            flag++;
        }
    });
    //加不同的scale
    function scaleImage(o) {
        if (document.body.clientWidth > 600) {
            var x = li_l + Math.ceil(li_l / 2) + o;
            $li.siblings(".centerify").removeClass("centerify");
            $li.siblings(".sideify").removeClass("sideify");
            $li_all.eq(x).addClass("sideify");
            $li_all.eq(x - 1).addClass("centerify");
            $li_all.eq(x - 2).addClass("sideify");
        }
    }

    //预先给未来的加scale，达到无缝动画连接
    function toggleSize() {
        if (document.body.clientWidth > 600) {
            if ($ul[0].style.left == "-" + l_w || $ul[0].style.left == "-330px" || $ul[0].style.left == "-530px") {
                $li_all.eq(7).addClass("sideify");
                $li_all.eq(8).addClass("centerify");
                $li_all.eq(9).addClass("sideify");
            }
            if ($ul[0].style.left == -parseInt(l_w) * 9 + "px" || $ul[0].style.left == "-1770px" || $ul[0].style.left == "-1970px") {
                $li_all.eq(7).addClass("sideify");
                $li_all.eq(6).addClass("centerify");
                $li_all.eq(5).addClass("sideify");
            }
        }
    }

});
//导航点击切换效果
$(function () {
    $(".nav_img").click(function () {
        $(this).find("ul").fadeToggle();
    });
});
//campus页面banner高度自适应
$(function () {
    var h = $(window).height() - $(".header").height();
    var h_m = ($(window).height() - $(".header").height()) * 0.7;
    $m = $(".cam_ct>div:nth-of-type(2n+1):not(.cam-m01)");
    if (document.body.clientWidth > 900) {
        $(".cam-m01").height(h);
        $m.height(Math.max(530, h_m));
        $(window).resize(function () {
            var h_size = $(window).height() - $(".header").height();
            $(".cam-m01").height(h_size);    //h=400
            var h_m_size = ($(window).height() - $(".header").height()) * 0.7;
            $m.height(Math.max(530, h_m_size));
        });
    }
});
//campus页面应用群动画效果
$(function () {
    var index = 0;
    var len = $(".m05_d_list").find("li").length;

    function show(index) {
        $(".m05_d_list").find("li").eq(index).addClass("m05_d_list_selected").siblings().removeClass("m05_d_list_selected");
        $(".cam-m05-box").find("li").eq(index).stop(true, true).show().siblings().stop(true, true).hide();
    }

    $(".m05_img").mouseover(function () {
        clearInterval(circle);
    }).mouseout(function () {
        show(index);
        circle = setInterval(x = function () {
            show(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 4000);
    }).mouseout();
    $(".m05_d_list").find("li").each(function () {
        $(this).click(function () {
            index = $(this).index();
            show(index);
        });
    });


});
//campus页面点击下拉效果
$(function () {
    if (document.body.clientWidth > 600) {
        $(".cam_a_d").each(function () {
                $(this).bind("click", function () {
                        var tar = $(this).attr("data-target"),
                            c_h = $(".header").height(),
                            w_h = $(window).height(),
                            i_h = $(".cam-m05").height(),
                            h = (w_h + c_h - i_h) / 2,
                            o = $(tar).offset().top - h;
                        $("html,body").animate({
                            scrollTop: o
                        }, 2000, "easeInOutCubic")
                    }
                )
            }
        );
    }
});


