window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. 縦画面・横画面どちらでも常に multiscroll を起動
        $('#multiscroll').multiscroll({
            licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
            verticalCentered: true,
            scrollingSpeed: 1200,   // スクロール速度を少し遅くして「一気に進む」バグを防ぐ
            touchSensitivity: 80,   // 感度を大幅に下げ、スマホの慣性スクロールを防止
            easing: 'easeInQuart',
            css3: true,             // 3D描画を有効化して表示を安定させる
            responsiveWidth: 0,     // スマホでも解除しない
            responsiveHeight: 0     // スマホでも解除しない
        });

    }, 3000); 
});
