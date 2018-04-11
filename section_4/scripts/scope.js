var scope = 'Global Variable';

function getValue() {
    var scope = 'Local Variable';
    return scope;
}

console.log(getValue());//Local Variable

console.log(scope);//Global Variable

