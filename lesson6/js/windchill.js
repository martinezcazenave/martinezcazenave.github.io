
var t= parseFloat(document.getElementById("value1").textContent);
var s= parseFloat(document.getElementById("value2").textContent);
function WindChill(){
var f= Math.ceil(35.74 + (0.6215*t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));
document.getElementById("value3").innerHTML= f;
}
WindChill();