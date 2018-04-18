document.addEventListener('DOMContentLoaded', function() {

    var setRadioValue = function(name,value) {
        var elems = document.getElementsByName('food');

        for(var i = 0, len = elems.length; i < len; i++) {
            var elem = elems.item(i);
            if(elem.value === value) {
                elem.checked = true;
                break;
            }
        }
    };

    // setRadioValue('food','餃子');
    setRadioValue('food','ラーメン');
}, false);