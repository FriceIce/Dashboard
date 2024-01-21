export const allURL = JSON.parse(localStorage.getItem('URL')) || []; 
// localStorage.removeItem('URL')

const itemContEl = document.querySelector('.item-cont');
export function addLink(url){
  let text = url.charAt(0).toUpperCase() + url.slice(1);
  
  //replaces Https:// with an empty string
  if(text.includes('Https://')){
    text = text.replace('Https://', '')
    text = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(text)
  }

  //Not valid input. 
  if(!text.includes('.com')) 
    if(!text.includes('.se'))
      if(!text.includes('.dev'))
        if(!text.includes('.org'))
          return

  const icon = `https://www.google.com/s2/favicons?sz=32&domain_url=${text}&size=256`

  if(itemContEl.childElementCount < 4) 
    itemContEl.innerHTML += `
    <li class="item">
      <img src="${icon}" style="width: 24px;">
      <a href="http://${text}" target="_Blank"><p>${text}</p></a>
      <img class="removeURLBtn" src="svg-icons/remove-ellipse-svgrepo-com.svg">
    </li>`

  if(!allURL.includes(text)){
    allURL.push(text);
    saveURL(); 
  }
}

export function renderIcons(allURL){
  if(allURL && itemContEl.childElementCount < 1) 
    allURL.forEach(url => {
      addLink(url);
    });
}

export function saveURL(){
  return localStorage.setItem('URL', JSON.stringify(allURL));
}