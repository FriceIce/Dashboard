import axios, { all } from "axios";
import { addLink, allURL, renderIcons } from "./modules/add-link";
import { getWeather } from "./modules/add-weather.js";

// Render all Icon
renderIcons(allURL)

// Add New Icon
const addUrlEl = document.querySelector('#add-link-form'); 
const inputUrl = addUrlEl.querySelector('input')
addUrlEl.addEventListener('submit', (el) => {
  el.preventDefault(); 
  const url = inputUrl.value;
  inputUrl.value = '';
  console.log(url)
  addLink(url)
})

//Add weather forecast
const addWeatherEl = document.querySelector('#add-wather-btn'); 
const inputWeather = document.querySelector('#weather-input'); 

addWeatherEl.addEventListener('submit', (el) => {
  el.preventDefault(); 

  const city = inputWeather.value;
  inputWeather.value = ''; 
  
  if (city)
  console.log(city)
  getWeather(city);
});
