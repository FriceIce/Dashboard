import axios, { all } from "axios";
import { addLink, allURL, renderIcons, saveURL } from "./modules/add-url.js";
import { getWeather, renderWeatherData} from "./modules/add-weather.js";
import dateAndTime from "./modules/date-time.js";
import userLocation from "./modules/user-location.js";

//USER LOCATION
userLocation(renderWeatherData, getWeather)

//DATE AND TIME
dateAndTime();
setInterval(() => {
  dateAndTime();
}, 1000)

// RENDER ALL ICONS
renderIcons(allURL)


//ADD NEW URL
const addUrlEl = document.querySelector('#add-link-form'); 
const inputUrl = addUrlEl.querySelector('input')
addUrlEl.addEventListener('submit', (el) => {
  el.preventDefault(); 
  const url = inputUrl.value;
  inputUrl.value = '';
  console.log(url)
  addLink(url)
})

//REMOVE URL
const addURLCard = document.querySelector('[data-url]'); 
addURLCard.addEventListener('click', (el) => {
  const removeBtnsEl = document.querySelectorAll('.removeURLBtn'); 
  const target = el.target;

  removeBtnsEl.forEach((btn, index) => {
    if(target === btn){
      allURL.splice(index, 1); 
      btn.closest('.item').remove(); 
      saveURL(); // LocalStorage.
    }
  })
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
