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