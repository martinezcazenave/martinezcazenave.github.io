const requestURL = 'https://martinezcazenave.github.io/Lesson12/json/rental_prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
});