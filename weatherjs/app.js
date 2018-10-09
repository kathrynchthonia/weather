// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

//  Weather class init
const weather = new Weather(weatherLocation.zip, weatherLocation.country);
// Init Ui
const ui = new UI();



// Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const zip = document.getElementById('zip').value;
  const country = document.getElementById('country').value;
// Change location
  weather.changeLocation(zip, country);

  // Set location in local storage
  storage.setLocationData(zip, country);

  // Get and display weather
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});

function getWeather(){
weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}