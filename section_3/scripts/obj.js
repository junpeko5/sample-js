var obj1 = {x:1,y:2,z:3};

var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

var obj3 = Object.create(Object.prototype, {
    x: {value: 1, writable: true, configurable: true, enumerable: true},
    y: {value: 2, writable: true, configurable: true, enumerable: true},
    z: {value: 3, writable: true, configurable: true, enumerable: true},
}
);
console.log(obj1);
console.log(obj2);
console.log(obj3);