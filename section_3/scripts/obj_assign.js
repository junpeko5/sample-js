let pet = {
    type:'スノーホワイトハムスター',
    name:'キラ',
    description: {
        birth:'2014-02-15'
    }
};

let pet2 = {
    name:'山田きら',
    color:'白',
    description: {
        food:'ひまわりのタネ'
    }
};

let pet3 = {
    weight:42,
    photo:'http://.msn.to/img/ham.jpg'
};

Object.assign(pet,pet2,pet3);
console.log(pet);


// {type: "スノーホワイトハムスター", name: "山田きら", description: {…}, color: "白", weight: 42, …}
// color
// :
// "白"
// description
// :
// food
// :
// "ひまわりのタネ"
// __proto__
// :
// Object
// name
// :
// "山田きら"
// photo
// :
// "http://.msn.to/img/ham.jpg"
// type
// :
// "スノーホワイトハムスター"
// weight
// :
// 42
// __proto__
// :
// Object