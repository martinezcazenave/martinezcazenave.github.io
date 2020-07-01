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
