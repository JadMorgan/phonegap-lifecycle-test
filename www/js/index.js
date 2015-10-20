var key = "phone";
var value = "xperia";

window.localStorage.setItem( key, value );


var key2 = "phone";
var value2 = window.localStorage.getItem(key);

alert(value);
alert(value2);
