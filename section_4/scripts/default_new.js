function getTriangle(base = 1,height = 1) {
    return base * height / 2;
}
console.log(getTriangle(5));//2.5
console.log(getTriangle(5, null));//0
console.log(getTriangle(5, undefined));//2.5
