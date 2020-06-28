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


    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const cities = jsonObject['towns'];
    
    for (let i = 0; i < cities.length; i++) {
    let place = cities[i]
    let townname = ["Fish Haven", "Preston", "Soda Springs"]
        if (townname.includes(place.name)) {
       // creating an article section 
        let section = document.createElement('article');
        section.classList.add('maincontainer')
        // creating first div
        let containtext = document.createElement('div');
        containtext.classList.add('textcol');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
          
        h2.textContent = place.name;
        motto.textContent = place.motto;
        year.textContent = 'Year Founded: ' + place.yearFounded;
        population.textContent = 'Population: ' + place.currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + place.averageRainfall;

        containtext.appendChild(h2);
        containtext.appendChild(motto);
        containtext.appendChild(year);
        containtext.appendChild(population);
        containtext.appendChild(rainfall);

            // creating second div
          let picture = document.createElement('div');
          picture.classList.add('homepic')
          let image = document.createElement('img');
          let alt = document.createElement('alt');
          alt.setAttribute('alt', place.name);
          image.setAttribute('src', "images/" + place.photo);
          picture.appendChild(image)

          
          section.appendChild(containtext)
          section.appendChild(picture)
          

        document.querySelector('div.townname').appendChild(section);
      }
    }
  });




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
var t= parseFloat(document.getElementById("temp").textContent);
var s= parseFloat(document.getElementById("wind").textContent);
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