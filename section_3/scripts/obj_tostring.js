var obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());
// [object Object]
// {}

var dat = new Date();

console.log(dat.toString());
console.log(dat.valueOf());

// Wed Apr 11 2018 09:11:16 GMT+0900 (JST)
// obj_tostring.js:10 1523405476368

var ary = ['prototype.js','jQuery','Yahoo! UI'];

console.log(ary.toString());
console.log(ary.valueOf());
// obj_tostring.js:15 prototype.js,jQuery,Yahoo! UI
// obj_tostring.js:16 (3) ["prototype.js", "jQuery", "Yahoo! UI"]

var num = 10;

console.log(num.toString());
console.log(num.valueOf());
// obj_tostring.js:21 10
// obj_tostring.js:22 10

var reg = /[0-9]{3}-[0-9]{4}/g;

console.log(reg.toString());
console.log(reg.valueOf());

// obj_tostring.js:26 /[0-9]{3}-[0-9]{4}/g
// obj_tostring.js:27 /[0-9]{3}-[0-9]{4}/g