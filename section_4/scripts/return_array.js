function getMaxMin(...nums) {
    return [Math.max(...nums),Math.min(...nums)];
}

let result = getMaxMin(10,35,-5,78,0);
console.log(result);//[78,5]

let[max,min] = getMaxMin(10,35,-5,78,0);
console.log(max);//78

console.log(min);//-5