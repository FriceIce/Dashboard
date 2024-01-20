import axios from "axios";

export default async function getRandomBackgroundImage(){
  const token = '5SCRcJdnZ8ULKdavlthtwYTp1lU1U4HMDIq3xXuEp4Y'; 
  // const url = `https://api.unsplash.com/photos/random?client_id=${token}`
  const body = document.body; 
  
  try {
    const response = await axios(url);
    console.log(response.data);
    body.style.background = `url('${response.data.urls.regular}')`;
  } catch (error) {
    // DEFAULT IMAGE
    body.style.background = "url('https://images.unsplash.com/photo-1704913427603-6cb736d51f05?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
  }
}
