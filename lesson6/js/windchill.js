
var t= parseFloat(document.getElementById("value1").textContent);
var s= parseFloat(document.getElementById("value2").textContent);
function WindChill(){
var f= Math.round((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16)) * 10)/10;

if (t <= 50 && s > 3) {
    document.getElementById("value3").innerHTML= f + "&#xb0;F";  
}
else {
    document.getElementById("value3").innerHTML= "N/A";

}

}
WindChill();