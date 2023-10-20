$(document).ready(function () {

    AOS.init({ disable: 'mobile' });

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

    $('.burger').click(function () {
        $('.header__nav').addClass('show');
    });

 





    $('.sublink > a').click(function (e) {
        e.preventDefault(); 
        var submenu = $(this).siblings('.submenu');

        if (submenu.is(':visible')) {
            submenu.hide(); 
            $('header.header').removeClass('header_whitetg');
        } else {
            $('.submenu').hide();
            submenu.show();
            $('header.header').addClass('header_whitetg'); 
        }
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('header.header').length) {
            $('.submenu').hide();
            $('header.header').removeClass('header_whitetg');
        }
    });

    if ($(window).width() > 991) {
        $(document).on('click', function (e) {
            if ($('.submenu').is(':visible')) {
                $('.menuoverlay').css('display', 'block');
            } else {
                $('.menuoverlay').css('display', 'none');
            }
        });
    }

    $('.close-menu').click(function () {
        $('.header__nav').removeClass('show');
        $('header.header').removeClass('header_whitetg');
        $('.menuoverlay').css('display', 'none');
        $('header.header .submenu').hide();
    });

  

});