text = "&lt;img src='' &lt;  &gt;";
//text=  text.replace(new RegExp("&lt;", "g"), "\<");
//console.log(text);

var regex=/&lt;/gi;  // 不能寫成 regex="/book\d+/gi";

var regex=/\&lt\;/gi;  // 不能寫成 regex="/book\d+/gi";
text = text.replace(regex,"<"); // 把 book123 取代成 test

console.log(text);



