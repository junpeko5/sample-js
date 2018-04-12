var Member = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('純平','小西');
mem.getName = function() {
    return this.lastName + ' ' + this.firstName;
}

console.log(mem.getName());

var mem2 = new Member('奈美','掛谷');
console.log(mem2.getName());
//Uncaught TypeError: mem2.getName is not a function
