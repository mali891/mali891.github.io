$(document).ready(function() {
    var $homepageHgroup = $('#header-homepage').find('hgroup'),
        $body = $('body');

    setTimeout(function() {
        $homepageHgroup.addClass('active');
    }, 2500);

    setTimeout(function() {
        $('#top-nav').addClass('active');
    }, 3500);

    $('#burger-menu').click(function(){
        $('#navTrigger').toggleClass('active');
    });

    function scrollWatcher(el, distance) {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > distance) {
            el.addClass('scrolled');
        } else {
            el.removeClass('scrolled');
        }
    }

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        setTimeout(scrollWatcher($body, 100), 10);
    });

    //libs
    var tilt = $('#header-middle').tilt({
        maxTilt:        15,
        perspective:    4000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        speed:          300,    // Speed of the enter/exit transition.
        transition:     true,   // Set a transition on enter/exit.
        disableAxis:    null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        glare:          false,  // Enables glare effect
    });
});
