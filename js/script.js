$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $(".index").addClass("sticky-header");
        } else {
            $(".index").removeClass("sticky-header");
        }
    })
})          