var listUser=[];
var username=document.getElementById("userName");
var pwd=document.getElementById("passwod");
var butn=document.getElementById("butn");


// var newCookie = document.cookie;
// var cookieParts = newCookie.split(“=”);  var cookieName = cookieParts[0];
// var cookieValue = unescape(cookieParts[1]);
// alert(cookieName);
// alert(cookieValue);

createCookie(username.value,pwd.value)
function createCookie(name,pwds){
    today = new Date();
    var expire = new Date();
   
    document.cookie = name.value,pwds.value ;
} 

