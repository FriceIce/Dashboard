/*  */
// import userLocation from "./user-location";

export function globe(position, zoom, id='map'){
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJpY2VpY2UiLCJhIjoiY2xyZXl4eW1rMGN4czJqbzB3OHkwcXBpcCJ9.noDS3FIuqbswTiHqeVIzdQ';
  const map = new mapboxgl.Map({
    container: id,
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: zoom, 
    center: position
  });
  map.addControl(new mapboxgl.NavigationControl());
  

  const directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiZnJpY2VpY2UiLCJhIjoiY2xyZXl4eW1rMGN4czJqbzB3OHkwcXBpcCJ9.noDS3FIuqbswTiHqeVIzdQ',
    unit: 'metric',
    profile: 'mapbox/driving'
  });

  map.addControl(directions, 'top-left');
}

export function resizeMap(img){
  const cardLayout = document.querySelector('.cards-layout');
  const card = document.querySelector('.third-card');
  const map = document.querySelector('#map') // fullscreen --> false 
  const body = document.body; 
  if(map.dataset.fullscreen === 'false'){
    body.append(card)
    window.scrollTo(0,0)
    body.style.overflow = 'hidden'
    card.dataset.fullscreen = 'true'; 
    map.dataset.fullscreen = 'true';
    img.title = 'Normalt läge' 
    img.src="svg-icons/full-screen-button-7-svgrepo-com.svg"
    globe([17.34, 60.12], 3) //Sveriges koordinater
  } else {
    body.style.overflow = 'auto'
    cardLayout.insertBefore(card, cardLayout.lastElementChild);
    card.removeAttribute('data-fullscreen')
    map.dataset.fullscreen = 'false';
    img.title="Helskärmsläge"
    img.src="svg-icons/full-screen-display-button-1-svgrepo-com.svg"
    card.scrollIntoView() //Scrollar fönstret till kortet. 
    globe([17.34, 60.12], 2)
  }
}
