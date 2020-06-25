const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
const icon = document.querySelector('img');
        document.getElementById('current-temp').textContent = jsObject.main.temp;

    

    const imagesrc = `https://api.openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    icon.setAttribute('src', imagesrc);
    icon.setAttribute('alt', desc);
});