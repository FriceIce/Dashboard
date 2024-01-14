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
    
    renderSidebarWeather(data)
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
  const cardEl = document.querySelector('[data-weather-cont]'); 
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
      <h2 style="font-size:1.5rem; font-style: italic; font-weight: 500;">Dagens Väder</h2>
    </div>
    <div class="weather-cont">
      <div class="celcius">
        <div style="display: flex; align-items: center;">
          <h4>${Math.round(temp)}<img style="width: 30px;" src="svg-icons/celcius-svgrepo-com.svg" alt="Celcius"></h4>
          <img style="width: 80px;" src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="">
          </div>
          <div class="weather-icon">
          <box-icon type='solid' name='location-plus' style="width
          15px; height: 15px;"></box-icon><h3 style="font-weight: 500;">${name}</h3>
        </div>
      </div>
      <div class="description-cont">
        <div class="desc-card">
          <img src="svg-icons/humidity-svgrepo-com.svg">
          <p>Humidity: ${humidity}</p>
        </div>
        <div class="desc-card">
          <img src="svg-icons/wind-svgrepo-com.svg">
          <p>Wind: ${Math.round(speed)} m/s</p>
        </div>
      </div>
    </div>
  
    `
  cardEl.innerHTML = html;
  console.log(weatherIcon)
}

export function renderSidebarWeather(data){
  const sideBar = document.querySelector('.forecast-sidebar'); 
  console.log(data)
  const {
    name,
    main: {temp}, 
    weather: [{description}],
    weather: [{icon: weatherIcon}]
  } = data; 


  const html = 
  ` <div class="weather-mini-cont">
      <div class="forecast-icon"><img src="https://openweathermap.org/img/wn/${weatherIcon}.png"></div>
      <div class="weather-info">
        <div>
          <p>${name}</p>
          <div>
            <p>${Math.round(temp)}<img style="width: 10px;" src="svg-icons/celcius-svgrepo-com.svg" alt="Celcius"> ${description}</p>
          </div>
        </div>
      </div>
    </div>`

  sideBar.innerHTML += html; 
}