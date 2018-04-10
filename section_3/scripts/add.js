var dat = new Date(2017,4,15,11,40);
console.log(dat.toLocaleString());//2017/5/15 11:40:00

dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleString());//2017/8/15 11:40:00

dat.setDate(dat.getDate() - 20);
console.log(dat.toLocaleString());//2017/7/26 11:40:00