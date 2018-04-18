document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');
    var attrs = logo.attributes;
    for (var i = 0, len = attrs.length; i < len; i++) {
        var attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false);

// id:logo
// src:http://www.wings.msn.to/image/wings.jpg
// height:67
// width:215
// border:0
// alt:WINGS (www INtegurated Guide on Server-architecture)