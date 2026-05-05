window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. multiscroll を初期化する
        $('#multiscroll').multiscroll({
            licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
            verticalCentered: true,
            scrollingSpeed: 1000,
            touchSensitivity: 80, // スワイプの誤検知を防ぐ
            easing: 'easeInQuart',
            css3: true
        });

    }, 3000); 
});
