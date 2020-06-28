  //weather API
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
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
    const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
    
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

          const imagesrc = 'https://openweathermap.org/img/wn/' + screenforecast.weather[0].icon + '.png';


          const desc = screenforecast.weather[0].description;
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
          
    
          day++;
        })

      });