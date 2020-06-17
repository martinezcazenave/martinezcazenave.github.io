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
    document.getElementById(
        "currentdate"
        ).textContent = new Date().toLocaleDateString("en-gb", options);
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
      if (i == 1 || i == 4 || i == 5) {
        let town = document.createElement('article');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');
        let alt = document.createElement('alt');

        // alt.setAttribute('alt', towns[i].name);
        image.setAttribute('src', "images/" + cities[i].photo);  
        h2.textContent = cities[i].name;
        motto.textContent = cities[i].motto;
        year.textContent = 'Year Founded: ' + cities[i].yearFounded;
        population.textContent = 'Population: ' + cities[i].currentPopulation;
        rainfall.textContent = 'Annual Rain Fall: ' + cities[i].averageRainfall;

        town.appendChild(h2);
        town.appendChild(motto);
        town.appendChild(year);
        town.appendChild(population);
        town.appendChild(rainfall);
        town.appendChild(image);
        // town.appendChild(alt);


        document.querySelector('div.townname').appendChild(town);
      }
    }
  });