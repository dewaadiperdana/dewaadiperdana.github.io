/**
 * Main.js
 */

(function($) {

    "use strict";

    $(window).on('scroll', function() {
        var that        = $(this),
            scrollTop   = that.scrollTop(),
            topWrap     = $('.top-wrapper'),
            scrollToTop = $('.scroll-to-top a');

        /* Top shrinking */
        if(scrollTop > (topWrap.height() - 20)) {
            topWrap.addClass('shrink');
        } else {
            topWrap.removeClass('shrink');
        }

        /* Scroll to top */
        if(scrollTop > 1150) {
            scrollToTop.addClass('active');
        } else {
            scrollToTop.removeClass('active');
        }
    });

    /* Burger menu */
    $('.burger-menu').on('click', function() {
        $(this).toggleClass('active');
    });

    /* Scrolling menu */
    $('.scroll-element').on('click', function(e) {
        var that    = $(this),
            target  = that.attr('href');

        $.smoothScroll({
            offset: 0,
            direction: 'top',
            scrollTarget: target,
            delegateSelector: null,
            easing: 'swing',
            speed: 400,
            autoCoefficient: 2,
            preventDefault: true
        });

        e.preventDefault();
    });

    /* Responsive toggle menu navigation */
    if($(window).width() <= 780) {
        var siteNav     = $('.site-nav ul'),
            burgerMenu  = $('.burger-menu'),
            topWrap     = $('.top-wrapper');

        burgerMenu.on('click', function() {
            siteNav.toggleClass('active');
        });

        siteNav.css({
            'margin-top': topWrap.height()
        });

        $(window).on('scroll', function() {
            siteNav.css({
                'margin-top': topWrap.height()
            });
        });
    }

}) (jQuery);
