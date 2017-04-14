import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();

    $('.footer__up').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $('.menu__open').click(function () {
        $('.menu__overlay').css("left", "0");
    });

    $('.menu__close').click(function () {
        $('.menu__overlay').css("left", "100%");
    });

    $(window).scroll(function() {
        if ($(".quick-menu__bg").offset().top > 500) {
            $(".quick-menu__bg").addClass("quick-menu__bg_show");
        }
    });

});
