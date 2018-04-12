var Member = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var mem = new Member('純平','小西');

//インスタンス化の後に関数を追加
Member.prototype.getName = function() {
    return this.lastName + ' ' + this.firstName;
};

console.log(mem.getName());
