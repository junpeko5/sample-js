var s = document.getElementById('food');
var child = s.firstChild;
console.log(child);

while(child) {
    if (child.nodeType === 1) {
        console.log(child.value);
    }

    child = child.nextSibling;
}