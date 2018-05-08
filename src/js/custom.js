/**
 * Services
 **/

$(function () {
    // Animate on scroll
    new WOW().init();
});

/**
 * Work
 **/

$(function () {
    // Magnific popup
    $('#work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/**
 * Team
 **/

$(function () {
    // Owl carousel
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/**
 * Testimonials
 **/

$(function () {
    // Owl carousel
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/**
 * Stats
 **/

$(function () {
    // Counter-Up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/**
 * Clients
 **/

// Owl carousel
$("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
});