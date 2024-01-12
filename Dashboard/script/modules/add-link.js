export const allURL = JSON.parse(localStorage.getItem('URL')) || []; 
// localStorage.removeItem('URL')

const itemContEl = document.querySelector('.item-cont');
export function addLink(url){
  let text = url.charAt(0).toUpperCase() + url.slice(1); 
  
  if(!text.includes('.com')) 
    if (!text.includes('.se'))
      return

  const icon = `https://www.google.com/s2/favicons?sz=32&domain_url=${text}&size=256`
  
  if(itemContEl.childElementCount < 4) 
    itemContEl.innerHTML += `
    <li class="item">
      <img src="${icon}" style="width: 24px;">
      <a href="${text}"><p>${text}</p></a>
    </li>`

  if(!allURL.includes(text)){
    allURL.push(text);
    localStorage.setItem('URL', JSON.stringify(allURL)); 
  }
}

export function renderIcons(allURL){
  if(allURL && itemContEl.childElementCount < 1) 
    allURL.forEach(url => {
      addLink(url);
    });
}
