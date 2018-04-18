document.addEventListener('DOMContentLoaded', function() {
    var elem = document.getElementById('elem');
    elem.addEventListener('click', function() {
        this.classList.toggle('highlight');
        console.log(this.classList);
    }, false);
}, false);