scope = 'Global Variable';

function getValue() {
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());//Local Variable

console.log(scope);
//Local Variable


//var命令を使わずに宣言された変数はすべてグローバル変数とみなす