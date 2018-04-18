document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    var listener = function() {
        window.alert('こんにちは、世界!');
    };

    //イベントリスナー登録
    btn.addEventListener('click', listener, false);

    //イベントリスナー破棄
    btn.removeEventListener('click', listener, false);
}, false);