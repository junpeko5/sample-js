document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem');
    console.log(elem);
    elem.addEventListener('click', function() {
        this.className = (this.className === 'highlight' ? '' : 'highlight');
    }, false);
}, false);
