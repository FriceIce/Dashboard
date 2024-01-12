import axios, { all } from "axios";
import { addLink, allURL, renderIcons } from "./modules/add-link";
import { getWeather} from "./modules/add-weather.js";

// Render all Icon
renderIcons(allURL)
getWeather()
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
const cardEl = document.querySelector('[data-weather-card]'); 
cardEl.addEventListener('click', (el) => {
  const addWeatherEl = document.querySelector('#add-wather-btn');
  const searchIcon = addWeatherEl.querySelector('img');
  const inputWeather = document.querySelector('#weather-input'); 
  
  el.preventDefault()
  if(el.target === addWeatherEl || el.target === searchIcon){
    const city = inputWeather.value;
    inputWeather.value = ''; 
    if (!city) {
      inputWeather.placeholder = 'The inputfield is empty..'
      setTimeout(() => {
        inputWeather.placeholder = 'Land / Stad'
      },5000)
    return
    } 
    getWeather(city);
  }
})

