let s = new Set();
s.add(NaN);
s.add(NaN);
console.log(s.size);//1

s.add({});
s.add({});
console.log(s.size);//3

