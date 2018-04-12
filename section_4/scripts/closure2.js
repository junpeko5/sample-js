function closure(init) {
    var counter = init;
    return function() {
        return ++ counter;
    }
}

var myClosure1 = closure(1);
var myClosure2 = closure(100);

console.log(myClosure1());//2
console.log(myClosure2());//101
console.log(myClosure1());//3
console.log(myClosure2());//102