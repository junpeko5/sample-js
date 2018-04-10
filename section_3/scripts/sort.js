var ary = [5,25,10];
//文字列としてソート
console.log(ary.sort());
//数値としてソート
console.log(ary.sort(function(x,y) {
    return x - y;
}));