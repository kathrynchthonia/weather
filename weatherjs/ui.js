class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.tempMax = document.getElementById('w-temp-max');
    this.tempMin = document.getElementById('w-temp-min');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    // this.details.textContent = weather.weather[0].description;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.tempMin.textContent = `Low Temperature: ${weather.main.temp_min}`;
    this.tempMax.textContent = `High Temperature: ${weather.main.temp_max}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}MPH`;
    

  }
}