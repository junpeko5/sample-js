document.addEventListener('DOMContentLoaded', function() {
    var data = {
        title: 'Javaポケットリファレンス',
        price: 2680,
        handleEvent: function() {
            console.log(this.title + '/' + this.price + '円');
        }
    };

    //thisをhandleEventで紐づけ
    document.getElementById('btn').addEventListener('click', data, false);
}, false);