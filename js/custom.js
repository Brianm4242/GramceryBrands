//MENU ACTIVE CLASS & SCROLL
// $(window).scroll(function () {
//     if ($(window).scrollTop() > $(".header").outerHeight()) {
//         $(".header").addClass("fixed");
//     } else {
//         $(".header").removeClass("fixed");
//     }
// });

$(document).ready(function () {
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        var scroll;
        if ($(window).scrollTop() == 0) {
            scroll = $target.offset().top - 160;
        } else {
            scroll = $target.offset().top - 60;
        }
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: scroll,
                },
                500,
                "swing",
                function () {
                    //window.location.hash = target;
                }
            );
    });
});

$(window).on("scroll", function () {
    var sections = $("section"),
        nav = $("nav"),
        nav_height = nav.outerHeight(),
        cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find("li a").removeClass("active");
            sections.removeClass("active");

            $(this).addClass("active");
            nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
    });
});
//

$("button.navbar-toggler").click(function(){
  $("body").addClass("overflow");
});
$("button.close").click(function(){
  $("body").removeClass("overflow");
});
$(".navbar-nav .nav-item .nav-link").click(function(){
  $("body").removeClass("overflow");
});
