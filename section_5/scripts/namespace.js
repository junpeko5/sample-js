var Wings = Wings || {};
//Wingsが未定義の場合生成

Wings.Member = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName: function() {
        return this.lastName + ' ' + this.firstName;
    }
};

var mem = new Wings.Member('小西','純平');
console.log(mem.getName());
// 純平 小西