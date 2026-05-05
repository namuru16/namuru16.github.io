window.addEventListener('load', function(){
    setTimeout(function(){
        // 1. ローディング画面を非表示にする
        const loader = document.getElementById('Loading');
        if (loader) {
            loader.classList.add('loaded');
        }

        // 2. 画面サイズ（768px以下かどうか）を判定
        if (window.innerWidth <= 768) {
            // --- スマホ用の処理（縦並びに組み替える） ---
            
            // 4つのセクションの並び替えを実行
            for (let i = 1; i <= 4; i++) {
                const rightEl = document.getElementById('right' + i);
                const leftEl = document.getElementById('left' + i);
                
                if (rightEl && leftEl) {
                    // 親要素（#multiscroll）の末尾に、右（画像）→ 左（文章）の順で追加し直す
                    const parent = document.getElementById('multiscroll');
                    parent.appendChild(rightEl);
                    parent.appendChild(leftEl);
                }
            }

            // 元の `.ms-left` や `.ms-right` の枠組みを削除してレイアウトを1カラム化
            $('.ms-left, .ms-right').remove();

        } else {
            // --- PC用の処理（そのまま multiscroll を起動） ---
            $('#multiscroll').multiscroll({
                licenseKey: 'OPEN-SOURCE-GPLv3-LICENSE',
                verticalCentered: true,
                scrollingSpeed: 1000,
                touchSensitivity: 35,
                easing: 'easeInQuart',
                css3: true
            });
        }

    }, 3000); 
});
