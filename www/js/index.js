var key = "phone";
var value = "xperia";
var key2 = "pen";
var value2 = "black";

window.localStorage.setItem( key, value );


var key = "phone";
var value = window.localStorage.getItem(key);

var key2 = "pen";
var value2 = window.localStorage.getItem(key2);

alert(value);
alert(value2);
