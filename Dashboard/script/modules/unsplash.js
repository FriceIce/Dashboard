import axios from "axios";

export default async function getRandomBackgroundImage(){
  const token = '5SCRcJdnZ8ULKdavlthtwYTp1lU1U4HMDIq3xXuEp4Y'; 
  const url = `https://api.unsplash.com/photos/random?client_id=${token}`
  const body = document.body; 
  
  try {
    // const response = await axios(url);
    console.log(response.data);
    body.style.backgroundImage = `url('${response.data.urls.regular}')`;
  } catch (error) {
    // DEFAULT IMAGE
    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1702234852270-8bb491075e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NTM5NDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDU3NDkxNzd8&ixlib=rb-4.0.3&q=80&w=1080')"
  }
}
