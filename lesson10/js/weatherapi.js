const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;

    }); 

    const imagesrc = 'https://api.openweathermap.org/img/2.5/weather?id=5604473&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description; 
    document.getElementById('imagesrc').textContent = imagesrc; 
    document.getElementById('icon').setAttribute('src', imagesrc); 
    document.getElementById('icon').setAttribute('alt', desc);
