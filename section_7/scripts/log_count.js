for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        console.count('LOOP');
    }
}

console.count('LOOP');

for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        console.count();
    }
}

console.count();