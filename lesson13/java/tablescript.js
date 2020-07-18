const requestURL = 'https://martinezcazenave.github.io/lesson13/json/rental_prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
});