$(".site-header__offcanvas .navbar-toggler").on("click", function() {
    0 < $(this).parents(".stuck").length && $("html, body").animate({
        scrollTop: $("body")
    }, 0),
    $(this).closest(".site-header__offcanvas").toggleClass("toggled"),
    $("body").toggleClass("off-canvas-active")
})