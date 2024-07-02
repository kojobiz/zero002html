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
// pc
document.querySelectorAll('.p-nav-listbox__title').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのアンカー動作を防ぐ
        const targetId = this.querySelector('a').getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 117; // 117pxオフセット
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' 
            });
        }
        document.querySelector('.l-spnav').style.display = 'none';
    });
});

// sp
document.querySelectorAll('.p-spnav-listbox__title').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのアンカー動作を防ぐ
        const targetId = this.querySelector('a').getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70; // 70pxオフセット
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' 
            });
        }
        document.querySelector('.l-spnav').style.display = 'none';
    });
});


//////////////////////////////////////
// ctaボタン設定
//////////////////////////////////////
// スクロール位置を監視して条件を満たしたら .l-cta-aside を表示する
window.addEventListener('scroll', function() {
    const ctaAside = document.getElementById('l-cta-aside');
    if (window.scrollY >= 1080) {
        ctaAside.style.display = 'block';
    } else {
        ctaAside.style.display = 'none';
    }
});