var x =document.lastModified;
document.getElementById("lastupdated").innerHTML = "Last Updated:" + x;

function toggleMenu() {

    document.getElementById("primaryNav").classList.toggle("hide");
}



const requestURL = 'https://martinezcazenave.github.io/lesson13/json/rental_prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const rentals = jsonObject['rentals'];


    for (let i = 0 ; i < rentals.length; i++){
            
        let row = document.createElement('tr');
          let type = document.createElement('td');
         
          let maxpeople = document.createElement('td');
          let reservehalfday = document.createElement('td');
          let reservefullday = document.createElement('td');
          let walkinhalfday = document.createElement('td');
          let walkinfullday = document.createElement('td');

          type.textContent = rentals[i].type;
          maxpeople.textContent = rentals[i].max_person;
          reservehalfday.textContent = rentals[i].halfday_reservation;
          reservefullday.textContent = rentals[i].fullday_reservation;
          walkinhalfday.textContent = rentals[i].halfday_walkin;
          walkinfullday.textContent = rentals[i].fullday_walkin;

            row.appendChild(type);
            row.appendChild(maxpeople);
            row.appendChild(reservehalfday);
            row.appendChild(reservefullday);
            row.appendChild(walkinhalfday);
            row.appendChild(walkinfullday);
            
          document.getElementById('rental_table').appendChild(row);
          
          
        }




























});