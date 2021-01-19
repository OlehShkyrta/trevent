$(function(){
    $('.slider__inner').slick({
        arrows: false,
        autoplay: 3000,
        dots: true
    });

    $('.trust__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="images/arrow-right.svg"></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: 3000,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Burger button
    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.mobile__menu-list').toggleClass('mobile__menu-list--active');
    });

    function  deleteClass () {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.mobile__menu-list').removeClass('mobile__menu-list--active');
        $('.mobile__submenu-list').css('display', 'none');
    }

    $('.single-link').on('click', deleteClass);
    $('.mobile__submenu-link').on('click', deleteClass);

    //Mobile Menu
    $(".mobile__menu-link").on('click',function (e) {
        e.preventDefault();
        
        const menu = $(this).closest('.mobile__menu-list');
        
        if (false == $(this).next().is(':visible')) {
            menu.find('.mobile__menu-item').removeClass('slide active');
            menu.find('.mobile__menu-list').slideUp();
        }
        
        $(this).next().slideToggle();
        $(this).parent().addClass('slide');
    });
});

// Animation
ScrollReveal().reveal('.benefits__inner', {duration: 2000, distance: '50px'});
ScrollReveal().reveal('.product__main', {duration: 2000, distance: '50px'});
ScrollReveal().reveal('.trust__slider', {duration: 2000, distance: '50px'});