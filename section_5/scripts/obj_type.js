var Animal = function() {};
var Hamster = function() {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor === Animal);//true
console.log(h.constructor === Animal);//true
console.log(h.constructor === Hamster);//false

console.log(h instanceof Animal);//true
console.log(h instanceof Hamster);//true

console.log(Hamster.prototype.isPrototypeOf(h));//true
console.log(Animal.prototype.isPrototypeOf(h));//true

