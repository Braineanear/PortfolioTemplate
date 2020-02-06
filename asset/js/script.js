$(function () {
    // Toggle the btn class from black-btn to white-btn on white pages
    $("#btn").click(function () {
        $('#btn').toggleClass('black-btn', 'white-btn');
    });

    // Toggle the btn class from black-btn to white-btn on Clients Page
    $("#btn-client").click(function () {
        $('#btn-client').toggleClass('black-btn', 'white-btn');
    });

    // Make overflow of the body hidden if it's auto and reverse
    $("#btn").click(function () {
        if ($('body').css('overflow') == 'auto') {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

    // Menu Animation 
    var t1 = new TimelineMax({
        paused: true
    });

    t1.to(".overlay", 1.4, {
        top: 0,
        ease: Expo.easeInOut
    });

    t1.staggerFrom(".menu ul li", 1, {
        y: 100,
        opacity: 0,
        ease: Expo.easeOut
    }, 0.2);

    t1.reverse();
    $(document).on("click", ".menu-btn", function () {
        t1.reversed(!t1.reversed());
    });

    t1.reverse();
    $(document).on("click", "li", function () {
        t1.reversed(!t1.reversed());
    });

    // Typescript Settings
    var typed = new Typed("#typed", {
        strings: ["Aloha There! &#128075;", "I'm &nbsp;<strong>Mahmoud Yasser</strong>&#128515;", "I'm a <strong>&nbsp;Full-Stack Web Developer&#9749;</strong>"],
        loop: true,
        loopCount: Infinity,
        typeSpeed: 50,
        backSpeed: 100,
        backDelay: 1500
    });
});