window.addEventListener('DOMContentLoaded', function() {
    document.getElementById("file").addEventListener('change', function(e) {
        var inputs = document.getElementById("file").files;

        for (var i = 0, len = inputs.length; i < len; i++) {

            var input = inputs[0];
            console.log('ファイル名：' + input.name);
            console.log('種類：' + input.type);
            console.log('サイズ：' + input.size / 1024 + 'KB');
            console.log('最終更新日：' + input.lastModifiedDate);
        }
    }, true);
}, false);