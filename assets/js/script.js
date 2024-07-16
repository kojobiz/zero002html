//////////////////////////////////////
// pcとspメニュー切り替え
//////////////////////////////////////
// sp-open
document.getElementById('spnav-open').addEventListener('click', function() {
    document.querySelector('.l-spnav').style.display = 'block';
});
document.getElementById('spnav-open').addEventListener('click', function() {
    document.querySelector('.l-spnav').style.display = 'block';
});
// sp-close
document.getElementById('spnav-close').addEventListener('click', function() {
    document.querySelector('.l-spnav').style.display = 'none';
});


//////////////////////////////////////
// 遷移時にオフセットと非表示
//////////////////////////////////////
// function updateHeaderHeight() {
//     var headerHeight = $(".l-header-inner").outerHeight();
//     // $(".l-main").css("padding-top", headerHeight + "px");
// }

// function scrollToSection(event) {
//     event.preventDefault();
//     var targetId = $(this).attr("href");
//     var targetOffset = $(targetId).offset().top;
//     var headerHeight = $(".l-header-inner").outerHeight();
//     $('html, body').animate({
//         scrollTop: targetOffset - headerHeight
//     }, 500);
// }

// $(document).ready(function() {
//     updateHeaderHeight();
//     $(window).resize(updateHeaderHeight);
//     $('a[href^="#"]').on('click', scrollToSection);
// });
$(document).ready(function() {
    function updateHeaderHeight() {
        var headerHeight = $(".l-header-inner").outerHeight();
        $(".l-section").css("padding-top", headerHeight + "px");
    }

    function scrollToHash() {
        var hash = window.location.hash;
        if (hash) {
            setTimeout(function() { // ページが完全にロードされた後に少し遅れて実行
                var targetOffset = $(hash).offset().top;
                var headerHeight = $(".l-header-inner").outerHeight();
                $('html, body').animate({
                    scrollTop: targetOffset - headerHeight
                }, 500);
            }, 800);
        }
    }

    updateHeaderHeight();
    scrollToHash(); // ハッシュに基づいてスクロール

    $(window).resize(updateHeaderHeight);

    $('.l-header-inner a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var targetId = $(this).attr("href");
        var targetOffset = $(targetId).offset().top;
        var headerHeight = $(".l-header-inner").outerHeight();
        $('html, body').animate({
            scrollTop: targetOffset - headerHeight
        }, 500);
    });
});



//////////////////////////////////////
// ctaボタン設定
//////////////////////////////////////
// スクロール位置を監視して条件を満たしたら .l-cta-aside を表示する
window.addEventListener('scroll', function() {
    const ctaAside = document.getElementById('l-cta-aside');
    if (window.scrollY >= 600 && window.innerWidth >= 768) {
        ctaAside.style.display = 'block';
    } else {
        ctaAside.style.display = 'none';
    }
});

//////////////////////////////////////
// 表示タイミング
//////////////////////////////////////

$(function() {
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        $(".box, .text, .text80").each(function() {
            const boxTop = $(this).offset().top;
            if (scroll + windowHeight > boxTop + 50) {
                $(this).addClass("is-active");
            } else {
                // $(this).removeClass("is-active");
            }
        });
    });
});

setTimeout(function() {
    $(".text81").each(function() {
        $(this).addClass("is-active");
    });
}, 800);
setTimeout(function() {
    $(".text82").each(function() {
        $(this).addClass("is-active");
    });
}, 1300);