var y = 'Global';
function outerFunc() {
    var y = 'Local Outer';
    function innerFunc() {
        var z = 'Local Inner';
        console.log(z);//Local Inner
        console.log(y);//Local Outer
        console.log(x);//error
    }
    innerFunc();
}
outerFunc();