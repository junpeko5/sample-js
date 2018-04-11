var scope = 'Grobal Variable';

function checkScope() {
    var scope = 'Local Variable';

    var f_lit = function() { return scope; };
    console.log(f_lit());//Local Variable


    var f_con = new Function('return scope;');
    console.log(f_con());//Grobal Variable
}

checkScope();
