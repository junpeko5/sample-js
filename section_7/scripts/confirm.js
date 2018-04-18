document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fm').addEventListener('submit', function(e) {
        if (!window.confirm('ページを送信しても良いですか？')) {
            //送信を中止する
            e.preventDefault();
        }
    }, false);
}, false);
