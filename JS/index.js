window.addEventListener('load', function(){
    //  multiscroll 初期化
    $('#multiscroll').multiscroll({
        licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
        verticalCentered: true,
        scrollingSpeed: 1000,
        touchSensitivity: 35,
        easing: 'easeInQuart'
    });

    // ローディング画面を消す
    setTimeout(function(){
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }
    }, 3000); 
});
