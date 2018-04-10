var p = /http(s)?:\/\/([/w-]+\.)+[\w]+(\/[\w-.\/?%&=]*)?/gi;

var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サンプル紹介サイトもよろしく!';

console.log(str1.search(p));//8
console.log(str2.search(p));//-1