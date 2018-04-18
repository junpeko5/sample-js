document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        var onoff = document.getElementById('onoff');
        if(onoff.checked) {
            console.log(onoff.value);
            window.alert("送信しますか？");
        } else {
            console.log('確認チェックされていません');
            window.alert(onoff.value + "をチェックしてください");
        }

    }, false);
}, false);


