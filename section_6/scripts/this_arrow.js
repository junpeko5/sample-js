document.addEventListener('DOMContentLoaded', function() {
    var Counter = function(elem) {
        this.count = 0;
        this.elem = elem;
        elem.addEventListener('click', () => {
            this.count++;
            this.show();
        }, false);
    };

    //カウンター情報を表示するためのshowメソッド
    Counter.prototype.show = function() {
        console.log(this.elem.id + 'は' + this.count + '回クリックされました。');
    }

    var c = new Counter(document.getElementById('btn'));
}, false);

