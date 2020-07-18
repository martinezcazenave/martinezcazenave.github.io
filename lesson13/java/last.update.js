var x =document.lastModified;
document.getElementById("lastupdated").innerHTML = "Last Updated:" + x;

function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
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

       //weather API
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
  fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
          //console.log(jsObject);
          document.getElementById('current').textContent = jsObject.weather[0].main;
          document.getElementById('temp').textContent = jsObject.main.temp;
          document.getElementById('humidity').textContent = jsObject.main.humidity;
      }); 

          //5 day forecast
    const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=5c3caa1b5caabeae3d05c45c9ed42ddd";
    
    fetch(apiforecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));

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
