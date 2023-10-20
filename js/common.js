$(document).ready(function () {

    AOS.init({disable: 'mobile'});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('header.header').addClass('sticky');
        } else {
            $('header.header').removeClass('sticky');
        }
    });

    if ($(this).scrollTop() > 10) {
        $('header.header').addClass('sticky');
    } else {
        $('header.header').removeClass('sticky');
    }



    var swiper = new Swiper(".trustedby-slider", {
        slidesPerView: 6,
        spaceBetween: 20,
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 6,
            },

        }
    });

    $('.burger').click(function(){
        $('.header__nav').addClass('show');
    });

    $('.close-menu').click(function(){
        $('.header__nav').removeClass('show');
    });
    

    if ($(window).width() < 992) {
       $('.sublink > a').click(function(){
        $(this).next('.submenu').slideToggle();
       });
    }







});