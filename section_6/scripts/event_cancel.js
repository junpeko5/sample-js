document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナーが発生しました。');
        //親ノードへのバブリングをキャンセルする
        // e.stopPropagation();
        //その場でバブリングをキャンセルする
        // e.stopImmediatePropagation();
        e.preventDefault();
    }, false);

    document.getElementById('inner').addEventListener('click', function(e) {
        window.alert('#innerリスナー2が発生しました。');

    }, false);

    document.getElementById('outer').addEventListener('click', function(e) {
        window.alert('#outerリスナーが発生しました。');
    }, false);
}, false);