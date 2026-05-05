/* ロード画面を3秒後に非表示にし、その後にmultiscrollを安全に動かす */
window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. ローディングが消えた瞬間に multiscroll を初期化する
        $('#multiscroll').multiscroll({
            licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
            verticalCentered: true,
            scrollingSpeed: 1000,
            touchSensitivity: 35,
            easing: 'easeInQuart',
            css3: true,            
            responsiveWidth: 768
        });

    }, 3000); 
});
