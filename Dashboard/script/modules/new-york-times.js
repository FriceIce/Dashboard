import axios from "axios";

export default async function newYorkTimesBestsellers(){
  const APIkey = 'WjjAAwj83Q52TwwWqcRYNwxx2BU5uJk6'
  const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${APIkey}`
  
  try {
    // const response = await axios(URL)
    const data = await response.data.results; 
    renderTheNewYorksHTML(data);
    console.log(data)
  } catch (error) {
    const allBooksEl = document.querySelector('.all-books');
    allBooksEl.innerHTML = '<p style="padding: 10px; color: red; font-style: italic; font-weight: 600;">Oj! Ett fel har inträffat, vi arbetar på att lösa det!</p> <img style="width: 70px; height: 70px; margin-inline: auto; margin-top: -2rem;" src="svg-icons/broken-link-svgrepo-com.svg">' 
  }
}

function renderTheNewYorksHTML(data){
  const allBooksEl = document.querySelector('.all-books'); 
  const html = data.books.map((value) => {
    return `
    <article class="book-cont">
      <div class="img-cont">
        <p>${value.rank}</p>
        <img src="${value.book_image}" alt="book image">
      </div>
      <div class="article-info">
        <ul class="purchase-cont">
          <a href="${value.buy_links[0].url}" target="_blank"><li>${value.buy_links[0].name}</li></a>
          <a href="${value.buy_links[1].url}" target="_blank"><li>${value.buy_links[1].name}</li></a>
          <a href="${value.buy_links[2].url}" target="_blank"><li>${value.buy_links[2].name}</li></a>
          <a href="${value.buy_links[3].url}" target="_blank"><li>${value.buy_links[3].name}</li></a>
          <a href="${value.buy_links[4].url}" target="_blank"><li>${value.buy_links[4].name}</li></a>
          <a href="${value.buy_links[5].url}" target="_blank"><li>${value.buy_links[5].name}</li></a>
        </ul>
        <div>
          <span style="font-size: 0.8rem;">${value.weeks_on_list} WEEKS ON THE LIST</span><br>
          <span style="font-weight: 600;">${value.title}</span><br>
          <span>${value.contributor}</span>
        </div>
        <div>
          <button class="buy-book-btn">Buy</button>
        </div>
      </div>
    </article>
    `
  }).join('')
  allBooksEl.innerHTML = html;
}