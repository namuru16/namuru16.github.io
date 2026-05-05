window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. 画面サイズ判定 (768pxより大きいPCのみmultiscrollを起動)
        if (window.innerWidth > 768) {
            $('#multiscroll').multiscroll({
                licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
                verticalCentered: true,
                scrollingSpeed: 1200,   // スクロール速度を遅くして「一気に進む」バグを防ぐ
                touchSensitivity: 80,   // 感度を大幅に下げて、慣性スクロールの誤動作を防止
                easing: 'easeInQuart',
                css3: true              // 3D描画を有効化
            });
        }

    }, 3000); // 3秒後に発火
});
