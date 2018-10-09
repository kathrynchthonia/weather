class Storage {
  constructor() {
    this.zip;
    this.country;
    this.defaultZip = '72936';
    this.defaultCountry = 'us';
  }

  getLocationData(){
    if(localStorage.getItem('zip') === null){
      this.zip = this.defaultZip;
    } else {
      this.zip = localStorage.getItem('zip');
    }
    if(localStorage.getItem('country') === null){
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      zip: this.zip,
      country: this.country
    }
  }

  setLocationData(zip, country){
    localStorage.setItem('zip', zip);
    localStorage.setItem('country', country);

  }

}