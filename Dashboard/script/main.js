import axios, { all } from "axios";
import { addLink, allURL, renderIcons, saveURL } from "./modules/add-url.js";
import { getWeather, renderSidebarWeather, renderWeatherData, sidebarLocations} from "./modules/add-weather.js";
import dateAndTime from "./modules/date-time.js";
import userLocation from "./modules/user-location.js";
import globe from "./modules/mapbox.js";
import newYorkTimesBestsellers from "./modules/new-york-times.js";

//------------------USER LOCATION-----------------------
userLocation(renderWeatherData, getWeather)
// -----------------------------------------------------

// ---------------------------------------The New York Times------------------------------
newYorkTimesBestsellers()
const allBooksEl = document.querySelector('.all-books'); 
allBooksEl.addEventListener('click', (el) => {
  const buyBtns = document.querySelectorAll('.buy-book-btn');
  const purchaseCont = document.querySelectorAll('.purchase-cont')
  const target = el.target; 
  buyBtns.forEach((btn, index) => {
   if(btn === target){
    if(purchaseCont[index].dataset.purchaseCont === 'open'){
      purchaseCont[index].dataset.purchaseCont = 'close'; 
      return
    }
    purchaseCont[index].dataset.purchaseCont = 'open'; 
   } else {
    purchaseCont[index].dataset.purchaseCont = 'close'; 
   }
  })
});

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

/*
------------------------------------------------------------------------------- 
|                                                                             |
|                          WEATHER EVENTS                                     |
|                                                                             |
-------------------------------------------------------------------------------
*/
const weatherFormEl = document.querySelector('#add-location-form');
const inputWeather = document.querySelector('#location-input'); 
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
  const weatherLocation = document.querySelector('.sidebar-location'); 
  const userLocationEL = document.querySelector('#user-location')
  if(target === sideBarMenu){
    // console.log('inne')
    sideBar.dataset.sidebar='open';
    return 
    
  } else if(target === userLocationEL){
    console.log('true')
    userLocation(renderWeatherData, getWeather)
    
  }else if(weatherLocation !== null && target.tagName === 'P' ){
    const location = target.textContent; 
    sidebarLocations.forEach((data) => {
      if(data.name === location)
      renderWeatherData(data)
  })
}
sideBar.dataset.sidebar='close'
})

// console.log(sidebarLocations)
if(sidebarLocations) {
  sidebarLocations.forEach(data => renderSidebarWeather(data))
}

//----------------------------------------MAPS------------------------------------------
globe();




