window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. 画面サイズに関係なく multiscroll を起動
        $('#multiscroll').multiscroll({
            licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
            verticalCentered: true,
            scrollingSpeed: 1000,
            touchSensitivity: 75,  // スワイプ判定を鈍くし、2ページ進むバグを抑制
            easing: 'easeInQuart',
            css3: true,
            
            // 縦でも横でも常に multiscroll を有効にするためレスポンシブ制限を解除
            responsiveWidth: 0,
            responsiveHeight: 0
        });

    }, 3000); 
});

