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

  //weather API
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind').textContent = jsObject.wind.speed;
    }); 

    //5 day forecast
    const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
    
    fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        //console.log(fivedayforecast);
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(screenforecast => {
          let d = new Date(screenforecast.dt_txt);
          document.getElementById(`forecast${day+1}`).textContent = screenforecast.main.temp;
          document.getElementById(`dayoftheweek${day+1}`).textContent = weekdays[d.getDay()];
          day++;
        })

      });