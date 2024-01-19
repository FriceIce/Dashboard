import axios, { AxiosError } from "axios";

export async function getWeather(location='Sverige'){
  console.log('Entering getWeather() function..')
  const apiKey = '691bd0077813775638e00b909e6b2157';
  // const apiKeyFourDays = '1385a7fd85515a5e3e931c804079457e' Kolla upp denna senare. 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  try {
    console.log('fetching data...')
    const response = await axios(url)
    const data = await response.data; 
    console.log(location, 'data:', data)
  
    renderWeatherData(data); 

    //Kollar ifall platsen redan finns i listan.
    let matchingLocation = false; 
    sidebarLocations.forEach(location => {
      if(data.name === location.name){
        matchingLocation = true; 
      }
    });
    
    if(!matchingLocation){
      renderSidebarWeather(data)
      sidebarLocations.push(data);
      localStorage.setItem('sidebarLocations', JSON.stringify(sidebarLocations));
    }

  } catch (error) {
    const cardEl = document.querySelector('[data-weather-cont]'); 
    console.log(error)
    const {response: {status}} = error
    switch (status) {
      case 400:
        console.log('Status code', error)
        break;
      case 401:
        console.log('Status code', error)
        break;
      case 404: 
      const img = `<img style="height 60px; width: 60px; margin-top: 6rem" src="svg-icons/country-direction-location-map-navigation-pin-svgrepo-com.svg">`
      cardEl.innerHTML = img + '<p style="margin-bottom: 2rem;">404 City Not Found</p>'
      console.log('Status code', error)
        break;
      default: 
      cardEl.innerHTML = '<p style="padding: 10px; color: red; font-style: italic; font-weight: 600;">Oj! Ett fel har inträffat, vi arbetar på att lösa det!</p> <img style="width: 70px; height: 70px; margin-inline: auto; margin-top: -2rem;" src="svg-icons/broken-link-svgrepo-com.svg">'
      break
    }
    return
  }
}

export function renderWeatherData(data){
  const cardEl = document.querySelector('[data-weather-cont]'); 
  // console.log(cardEl)
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
      <h2 style="font-size:1.5rem; font-style: italic; font-weight: 500;">Dagens väder</h2>
    </div>
    <div class="weather-cont">
      <div class="celcius">
        <div style="display: flex; align-items: center;">
          <h4>${Math.round(temp)}&#176</h4>
          <img style="width: 80px; margin-left: -10px;" src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="">
          </div>
          <div class="weather-icon">
          <box-icon type='solid' name='location-plus' style="width: 15px; height: 15px;"></box-icon><h3 style="font-weight: 500;">${name}</h3>
        </div>
      </div>
      <div class="description-cont">
        <div class="desc-card">
          <img src="svg-icons/humidity-svgrepo-com.svg">
          <p>Humidity: ${humidity}%</p>
        </div>
        <div class="desc-card">
          <img src="svg-icons/wind-svgrepo-com.svg">
          <p>Wind: ${Math.round(speed)} m/s</p>
        </div>
      </div>
    </div>
    `
  cardEl.innerHTML = html;
  // console.log(sidebarLocations)
}

export const sidebarLocations = JSON.parse(localStorage.getItem('sidebarLocations')) || []; 
// localStorage.removeItem('sidebarLocations')
export function renderSidebarWeather(data){
  const sideBar = document.querySelector('.forecast-sidebar'); 
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
          <p class="sidebar-location">${name}</p>
          <div>
            <p>${Math.round(temp)}&#176 ${description}</p>
          </div>
        </div>
      </div>
    </div>`

  sideBar.innerHTML += html; 
}