import axios, { all } from "axios";
import { addLink, allURL, renderIcons } from "./modules/add-link";
import { getWeather} from "./modules/add-weather.js";

// RENDER ALL ICONS
renderIcons(allURL)
getWeather()

//ADD NEW LINKS
const addUrlEl = document.querySelector('#add-link-form'); 
const inputUrl = addUrlEl.querySelector('input')
addUrlEl.addEventListener('submit', (el) => {
  el.preventDefault(); 
  const url = inputUrl.value;
  inputUrl.value = '';
  console.log(url)
  addLink(url)
})

//ADD WEATHER FORECAST
const weatherFormEl = document.querySelector('#add-weather-form');
const inputWeather = document.querySelector('#weather-input'); 
weatherFormEl.addEventListener('submit', (el) => {
  el.preventDefault(); 

  const city = inputWeather.value; 
  inputWeather.value = ''
  if(!city){
    inputWeather.placeholder = 'Inmatningsfältet är tom..'
    setTimeout(() => {
      inputWeather.placeholder = 'Land / Stad'
    }, 5000)
    return 
  }
  
  getWeather(city);
})

// SIDEBAR
const forecastCont = document.querySelector('[data-forecast-cont]')
const sideBar = document.querySelector('.forecast-sidebar'); 
const sideBarMenu = document.querySelector("[name='menu-alt-left']")

forecastCont.addEventListener('click', (el) => {
  const target = el.target;
  if(target === sideBarMenu){
    console.log('inne')
    sideBar.dataset.sidebar='open'
  } else {
    sideBar.dataset.sidebar='null'
  }
})
