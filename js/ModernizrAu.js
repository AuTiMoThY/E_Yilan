//查詢瀏覽器
var WHAT = navigator.userAgent;
console.log(WHAT);
var userAgent = window.WHAT.toLowerCase();

/**
 * Modernizr
 */
if(!Modernizr.textshadow){
  console.log("你的瀏覽器不支援textshadow");
}
if(!Modernizr.input.placeholder){
  console.log("你的瀏覽器不支援input placeholder");
}
if(!Modernizr.inputtypes.search){
  console.log("你的瀏覽器不支援input search");
}
if(!Modernizr.input.pattern){
  console.log("你的瀏覽器不支援input pattern");
}
if(!Modernizr.input.required){
  console.log("你的瀏覽器不支援input required");
}
if(!Modernizr.csscolumns){
  console.log("你的瀏覽器不支援csscolumns");
}
if(!Modernizr.csstransforms){
  console.log("你的瀏覽器不支援csstransforms");
}


