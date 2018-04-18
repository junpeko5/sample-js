document.addEventListener('DOMContentLoaded', function() {
    // var timer = window.setInterval(
    var timer = window.setTimeout(
        function() {
            var dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        },5000
    );

    document.getElementById('btn').addEventListener('click', function() {
        //ボタンクリック時にタイマー処理を中止
        // window.clearInterval(timer);
        window.clearTimeout(timer);
    }, false);
}, false);