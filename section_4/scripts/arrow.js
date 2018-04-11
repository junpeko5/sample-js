let getTriangle = (base,height) => {
    return base * height / 2;
};
console.log('三角形の面積：' + getTriangle(5,2));

let getTriangle2 = (base,height) => base * height / 2;

console.log('三角形の面積：' + getTriangle2(5,2));


let getCircle = radius =>  radius * radius * Math.PI;

console.log('円の面積：' + getCircle(3));


let show = () => console.log('こんにちは、世界!');

console.log(show);
show;