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



    // Privacy nav

    if ($('.privacynav').length > 0) {
        var headers = document.querySelectorAll('.privpolcontent h3');
        for (var i = 0; i < headers.length; i++) {
            headers[i].setAttribute('id', i + 1);
        }


        var headers = document.querySelectorAll('.privpolcontent h3');
        var list = document.querySelector('.privacynav');
        var ul = document.createElement('ul');

        for (var i = 0; i < headers.length; i++) {
            var text = headers[i].textContent;
            var id = headers[i].getAttribute('id');
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.textContent = text;
            link.setAttribute('href', '#' + id);
            listItem.appendChild(link);
            ul.appendChild(listItem);
        }

        list.appendChild(ul);
    }

    // -----------


    $(".privacynav ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 105 }, 1500);
    });


    const links = document.querySelectorAll('.privacynav li a');
    window.addEventListener('scroll', () => {
        const anchors = document.querySelectorAll('.privpolcontent [id]');
        anchors.forEach(anchor => {
            if (anchor.closest('.privpolcontent')) {
                const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                if (window.pageYOffset >= anchorTop - 110) {
                    links.forEach(link => {
                        const correspondingLink = document.querySelector(`.privacynav li a[href="#${anchor.id}"]`);
                        if (correspondingLink) {
                            link.classList.remove('active');
                            correspondingLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });


    if ($('select').length > 0) {
        $(".js-example-basic-single").select2({
            placeholder: "Select",
            minimumResultsForSearch: -1
        });
    }
    
 
    if ($('video').length > 0) {
        const players = $('[id^="player-"]').map(function () {
            return new Plyr(this);
        }).get();
        players.forEach(function (player, index) {
            $(document).on('click', function (event) {
                let $target = $(event.target);
                if (!$target.closest('.modal-body').length) {
                    player.pause();
                }
            });
        });
    }

    window.onload = () => {
        $('#cookie').modal('show');
    }
    

});