document.addEventListener('DOMContentLoaded', function() {
    var setCheckboxValue = function(name, value) {
        var elems = document.getElementsByName(name);

        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            if (value.indexOf(elem.value) > -1) {
                elem.checked = true;
            }
        }
    };
    setCheckboxValue('food',['ラーメン','餃子']);
}, false);

