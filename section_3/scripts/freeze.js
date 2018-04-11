'use strict';
//通知されるようにしている

var pet = {type:'スノーホワイトハムスター',name:'キラ'};

// Object.preventExtensions(pet);
//プロパティ追加を禁止
// Object.seal(pet);
//プロパティ削除を禁止
Object.freeze(pet);
//プロパティは読み取り専用

pet.name = '山田きら';

delete pet.type;

pet.weight = 42;
