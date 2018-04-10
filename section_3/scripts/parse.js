var n = '123xxx';
console.log(Number(n));//NaN
console.log(Number.parseFloat(n));//123
console.log(Number.parseInt(n));//123


var d = new Date();
console.log(Number(d));//1523269990290
console.log(Number.parseFloat(d));//NAN
console.log(Number.parseInt(d));//NAN

var h = '0x10';
console.log(Number(h));//16
console.log(Number.parseFloat(h));//0
console.log(Number.parseInt(h));//16

var b = '0b11';
console.log(Number(b));//3
console.log(Number.parseFloat(b));//0
console.log(Number.parseInt(b));//0

var e = '1.01e+2';
console.log(Number(e));//101
console.log(Number.parseFloat(e));//101
console.log(Number.parseInt(e));//1