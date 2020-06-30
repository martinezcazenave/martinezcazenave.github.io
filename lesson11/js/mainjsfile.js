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


    



      //Image loader

      //get all imgs with data src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
threshold: 1,
rootMarging: "0px 0px 50px 0px"
};

const loadImages = (image) => {
image.setAttribute('src', image.getAttribute('data-src'));
image.onload = () => {image.removeAttribute('data-src');};
};

// first check to see if intersection Observer is supported
if('IntersectionObserver' in window) {
const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        } 
    });
}, imgOptions);

// loop through each img an check status and load if necessary
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else {// just load All immages if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    })


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