// maincontent 버튼fill모션
$(function () {
    let duration = 300;
    $(".btn_fill").mouseover(function () {
        $(this).find(">span").stop().animate({ height: "100%" }, duration);
    });

    $(".btn_fill").mouseout(function () {
        $(this).find(">span").stop().animate({ height: "0%" }, duration);
    });
});


// nav상단바 sticky모션 및 hover시 메가메뉴 실현
$(function () {

    let sticky = $(".main_nav").offset().top;
    $(window).scroll(function () {


        if ($(window).scrollTop() > sticky) {
            $(".main_nav").css({ position: "fixed", top: "0", left: "0", width: "100%", background: "#fff" });
            $(".main_nav").addClass("on");
            $(".head_left2").css({ display: "block" });
            $(".head_right2").css({ display: "block" });

        } else {
            $(".main_nav").css({ position: "static" });
            $(".head_left2").css({ display: "none" });
            $(".head_right2").css({ display: "none" });
            $(".main_nav").removeClass("on");
        }
    });

    $(".dropdown").mouseover(function () {
        $(this).find(".dropdown-content").css({ display: "block" });

    });

    $(".dropdown").mouseout(function () {
        $(".dropdown-content").css({ display: "none" });
    });

});






// 푸터 아코디언
$(function () {
    $(".footer_lists > .footer_li").click(function () {
        $(this).siblings(".footer_li").removeClass("is-active").children(".footer_list").slideUp();
        $(this).toggleClass("is-active").children(".footer_list").slideToggle();
    });
});

// Map.html에서의 자주묻는질문 아코디언
$(function () {
    $(".question > .question-item").click(function () {
        $(this).siblings(".question-item").removeClass("is-active").children(".question-panel").slideUp();
        $(this).toggleClass("is-active").children(".question-panel").slideToggle();
    });
});

// slidebar 아코디언
$(function () {
    $(".sidebar_lists > .sidebar_li").click(function () {
        $(this).siblings(".sidebar_li").removeClass("is-active").children(".sidebar_list").slideUp();
        $(this).toggleClass("is-active").children(".sidebar_list").slideToggle();
    });
});
