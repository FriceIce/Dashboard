// const apiKey = '691bd0077813775638e00b909e6b2157';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

import axios from "axios";

export async function getWeather(city){
  const apiKeyCurrent = '691bd0077813775638e00b909e6b2157';
  // const apiKeyFourDays = '1385a7fd85515a5e3e931c804079457e' Kolla upp denna senare. 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyCurrent}&units=metric`;

  try {
    const data = await axios(url)
    console.log(data)

    if(data.status !== 200)
      throw new Error(data.status); 
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