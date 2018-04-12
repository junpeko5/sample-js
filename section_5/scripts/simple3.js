var Menber = function(firstName, lastName) {
    if(!(this instanceof Member)) {
        return new Member(firstName, lastName);
    }
    this.firstName = firstName;
    this.firstName = lastName;
};

var m = Member('ゴンベイ','佐藤');//エラー
//コンストラクタ関数呼び出しを防ぐ