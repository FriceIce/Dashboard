import axios from "axios";
import {globe} from "./mapbox";
export default function userLocation(weatherFn, onError){
  
  // ON SUCESS
  const sucess = async (position) => {
    const {latitude: lat, longitude: lon} = position.coords; 
    const apiKey = '1385a7fd85515a5e3e931c804079457e'; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    try {
      const response = await axios(URL)
      const data = await response.data; 
      // console.log('Fetch successful, data:', response)

      if(response.status !== 200)
        throw new Error(response.status);  
      
      weatherFn(data); 
      const userLocation = document.querySelector('#user-location')
      userLocation.innerText = `Din plats: ${data.name}`;
    } catch (error) {
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
        const cardEl = document.querySelector('[data-weather-cont]'); 
        const img = `<img style="height 60px; width: 60px; margin: auto 0px;" src="svg-icons/country-direction-location-map-navigation-pin-svgrepo-com.svg">`
        cardEl.innerHTML = img + '404 City Not Found'
        console.log('Status code', error)
          break;
      }
    }
    console.log(position.coords);

    // --------Globe----------
    globe([position.coords.longitude, position.coords.latitude], 12) //Globe([...coords], zoom)
  }

  // ON ERROR, User denies location.
  const error = (err) => {
    globe([17.34, 60.12], 3.5) //Globe([...coords], zoom) Sverige
    const userLocation = document.querySelector('#user-location')
    userLocation.innerText = 'Din plats: Okänd'
    console.log(err)
    onError() //Get default weather data ---> Sweden.
  }
  
  //USER LOCATION
  navigator.geolocation.getCurrentPosition(sucess, error); 
}