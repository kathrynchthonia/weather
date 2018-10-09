class Weather {
  constructor(zip, country) {
    this.apiKey = '03d416d45944a86f12bf71ffcd10864f';
    
    this.zip = zip;
    this.country = country;
  }

  // Fetch weather from api
  async getWeather() {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?zip=${this.zip},${this.country}&units=imperial&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(zip, country) {
    this.zip = zip;
    this.country = country;
  }
}