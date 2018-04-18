$(document).ready(function() {
    var $homepageHgroup = $('#header-homepage').find('hgroup'),
        $body = $('body'),
        $burgerMenu = $('#burger-menu'),
        $mainNav = $('#main-nav'),
        $navOverlay = $('#nav-overlay'),
        $navTrigger = $('#navTrigger');

    //Custom functions

    //Custom scroll position watcher
    var scrollWatcher = function(el, distance) {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > distance) {
            el.addClass('scrolled');
        } else {
            el.removeClass('scrolled');
        }
    }

    //Custom timing function to close navigation
    var closeNav = function() {
        $mainNav.removeClass('active');
        $navTrigger.removeClass('active');
        $body.removeClass('nav-active');

        setTimeout(function() {
            $navOverlay.removeClass('background-change');
        }, 300);

        setTimeout(function() {
            $navOverlay.removeClass('active');
        }, 600);
    }

    //Homepage on load animations
    setTimeout(function() {
        $homepageHgroup.addClass('active');
    }, 2500);

    setTimeout(function() {
        $('#top-nav').addClass('active');
    }, 3500);


    //Navigation toggle
    $burgerMenu.click(function() {
        if($navTrigger.hasClass('active')) {//To close nav
            closeNav();
        } else { //To open nav
            $navTrigger.addClass('active');
            $navOverlay.addClass('active');
            $body.addClass('nav-active');

            setTimeout(function() {
                $navOverlay.addClass('background-change');
            }, 10);

            setTimeout(function() {
                $mainNav.addClass('active');
            }, 310);
        }
    });

    //To close nav by clicking overlay
    $navOverlay.click(function() {
        closeNav();
    });


    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        setTimeout(scrollWatcher($body, 100), 10);
    });

    //libs
    var tilt = $('#header-middle').tilt({
        maxTilt:        15,
        perspective:    4000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        speed:          3000,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        disableAxis:    null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
    });
});
