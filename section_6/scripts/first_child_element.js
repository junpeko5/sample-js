var s = document.getElementById('food');
var child = s.firstElementChild;

while(child) {
    console.log(child.value);
    child = child.nextElementSibling;
}
// ラーメン
// 餃子
// 焼肉