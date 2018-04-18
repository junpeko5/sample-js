let data_ary = ['one','two','three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON','月曜'],['TUE','火曜'],['WED','水曜']]);

for(let d of data_ary) {
    console.log(d);
}

for(let d of data_str) {
    console.log(d);
}

for(let [key,value] of data_map) {
    console.log(`${key}: ${value}`);
}

// one
// iterator.js:6 two
// iterator.js:6 three
// iterator.js:10 あ
// iterator.js:10 い
// iterator.js:10 う
// iterator.js:10 え
// iterator.js:10 お
// iterator.js:14 MON: 月曜
// iterator.js:14 TUE: 火曜
// iterator.js:14 WED: 水曜