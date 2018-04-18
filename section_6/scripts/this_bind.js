document.addEventListener('DOMContentLoaded', function() {
    var data = {
        title: 'Javaポケットリファレンス',
        price: 2680,
        show: function() {
            console.log(this.title + '/' + this.price + '円');
        }
    };

    ///thisはボタンを表すのでundefined円となる
    // document.getElementById('btn').addEventListener('click', data.show, false);
    //bind(that) : 関数のthisを紐づけする
    document.getElementById('btn').addEventListener('click', data.show.bind(data), false);
}, false);

