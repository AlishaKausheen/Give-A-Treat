$(document).ready(function() {

    // $("nav").click(function() {
    // $(this).toggleClass(`bi-x-lg`);
    //   $(`nav`).toggleClass("nav-toggle");
    //});
    $("nav ul li a").click(function() {
        $("nav").removeClass("nav-toggleClass");
    });
    $(`.dot1`).click(function() {
        $(`.video1`).css(`display`, `block`);
        $(`.video2`).css(`display`, `none`);
        $(`.video3`).css(`display`, `none`);
    });
    $(`.dot2`).click(function() {
        $(`.video1`).css(`display`, `none`);
        $(`.video2`).css(`display`, `block`);
        $(`.video3`).css(`display`, `none`);
    });
    $(`.dot3`).click(function() {
        $(`.video1`).css(`display`, `none`);
        $(`.video2`).css(`display`, `none`);
        $(`.video3`).css(`display`, `block`);
    });
    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 20) {
            $(`#header`).addClass(`header-active`);
        } else {
            $(`#header`).removeClass(`header-active`);
        }
    });
});