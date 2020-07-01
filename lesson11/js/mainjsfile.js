function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      
    };
    document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-gb", options);
} catch (e) {
    alert ("error")
}




    var date = new Date();
    var dayOfWeek = date.getDay();
  
    if (dayOfWeek == 5) {
      var pancake = document.getElementById("pancake");
      pancake.style.display = "block";
    }
  
    function adjustRating(rating) {
        document.getElementById("ratingvalue").innerHTML = rating;
    }

  


//WindChill
var t= parseFloat(document.getElementById("temp").innerHTML);
var s= parseFloat(document.getElementById("wind").innerHTML);
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