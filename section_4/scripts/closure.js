function closure(init) {
    var counter = init;

    return function() {
        return ++counter;
    }
}
var myClosure = closure(1);
console.log(myClosure());//2
console.log(myClosure());//3
console.log(myClosure());//4

