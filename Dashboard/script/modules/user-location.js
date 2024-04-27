import axios from "axios";
import {globe} from "./mapbox";
export default function userLocation(weatherFn, onError){
  
  // ON SUCESS
  const sucess = async (position) => {
    const {latitude: lat, longitude: lon} = position.coords; 
    const apiKey = import.meta.env.VITE_WEATHER_KEY; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    try {
      const response = await axios(URL)
      const data = await response.data;
      
      weatherFn(data); 
      const userLocation = document.querySelector('#user-location')
      userLocation.innerText = `Din plats: ${data.name}`;
    } catch (error) {       
      console.log('Status code', error)

      const cardEl = document.querySelector('[data-weather-cont]'); 
      const img = `<img style="height 60px; width: 60px; margin: auto 0px;" src="svg-icons/country-direction-location-map-navigation-pin-svgrepo-com.svg">`
      cardEl.innerHTML = img + '404 City Not Found'
    }

    console.log(position.coords);
    // --------Globe----------
    globe([position.coords.longitude, position.coords.latitude], 12) //Globe([...coords], zoom)
  }

  // ON ERROR, User denies location.
  const error = (err) => {
    globe([20, 20], 0.7)
    const userLocation = document.querySelector('#user-location')
    userLocation.innerText = 'Din plats: Okänd'
    console.log(err)
    onError() //Get default weather data ---> Sweden.
  }
  
  //USER LOCATION
  navigator.geolocation.getCurrentPosition(sucess, error); 
}