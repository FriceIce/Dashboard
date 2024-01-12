// const apiKey = '691bd0077813775638e00b909e6b2157';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

import axios from "axios";

export async function getWeather(city='Stockholm'){
  console.log('Entering getWeather() function..')
  const apiKeyCurrent = '691bd0077813775638e00b909e6b2157';
  // const apiKeyFourDays = '1385a7fd85515a5e3e931c804079457e' Kolla upp denna senare. 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyCurrent}&units=metric`;

  try {
    const response = await axios(url)
    const data = await response.data; 
    console.log(city, 'data:', response.data)

    if(response.status !== 200)
      throw new Error(response.status);  
    
    renderWeatherData(data); 
  } catch (error) {
    
    switch (error) {
      case 400:
        console.log('Status code', error)
        break;
      case 401:
        console.log('Status code', error)
        break;
      case 404: 
      console.log('Status code', error)
        break;
    }
  }
}

function renderWeatherData(data){
  const cardEl = document.querySelector('[data-weather-card]'); 
  console.log(cardEl)
  const {
    name,
    main: {temp}, 
    main: {humidity}, 
    wind: {speed},
    weather: [{description}],
    weather: [{icon: weatherIcon}]
  } = data; 

  const html = 
    `<div class="city-cont">
      <h3>${name}</h3>
    </div>
    <div class="weather-cont">
      <div class="celcius">
        <div>
          <h4>${Math.round(temp)}<img style="width: 30px;" src="svg-icons/celcius-svgrepo-com.svg" alt="Celcius"></h4>
        </div>
        <div class="weather-icon">
          <img style="width: 80px;" src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="">
          <p>${description}</p>
        </div>
      </div>
      <div class="description-cont">
        <div class="desc-card">
          <p>Humidity: ${humidity}</p>
        </div>
        <div class="desc-card">
          <p>Wind: ${Math.round(speed)} m/s</p>
        </div>
      </div>
    </div>
    <div class="add-cont">
      <form class="card-form" id="add-weather-form">
        <input placeholder="Land / Stad" type="text" name="weather-input" id="weather-input" class="card-input">
        <button id="add-wather-btn" class="icon-btn">
          <img src="svg-icons/search-svgrepo-com.svg" alt="search">
        </button>
      </form>
    </div>
    `
  cardEl.innerHTML = html;
  console.log(weatherIcon)
}