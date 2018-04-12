var Member = function(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

var m = Member('ゴンベイ','佐藤');
console.log(m);//undefined
console.log(firstName);//ゴンベイ
console.log(m.firstName);
//Uncaught TypeError: Cannot read property 'firstName' of undefined
