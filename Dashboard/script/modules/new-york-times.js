import axios from "axios";
export default async function newYorkTimes(){
  const APIkey = 'WjjAAwj83Q52TwwWqcRYNwxx2BU5uJk6'
  const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${APIkey}`
  const response = await axios(URL)

  try {
    const data = response.data; 
    renderNews(data);
    console.log(response.data)
  } catch (error) {
    
  }
}

function renderNews(data){

}