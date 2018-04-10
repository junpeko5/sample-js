var p = /http(s)?:\/\/([/w-]+\.)+[\w]+(\/[\w-.\/?%&=]*)?/gi;

var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サンプル紹介サイトもよろしく!';

console.log(p.test(str1));//true
console.log(p.test(str2));//false