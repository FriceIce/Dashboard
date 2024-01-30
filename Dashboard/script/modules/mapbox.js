const accessToken = import.meta.env.VITE_MAPBOX_TOKEN
export function globe(position, zoom, id='map'){
  mapboxgl.accessToken = accessToken;
  const map = new mapboxgl.Map({
    container: id,
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    zoom: zoom, 
    center: position
  });
  map.addControl(new mapboxgl.NavigationControl());
  
  const directions = new MapboxDirections({
    accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
    unit: 'metric',
    profile: 'mapbox/driving'
  });

  map.addControl(directions, 'top-left');
  map.addControl(new mapboxgl.FullscreenControl(), 'bottom-left');
}

// export function resizeMap(img){
//   const cardLayout = document.querySelector('.cards-layout');
//   const card = document.querySelector('.third-card');
//   const map = document.querySelector('#map') // fullscreen --> false 
//   const body = document.body; 
//   if(map.dataset.fullscreen === 'false'){
//     body.append(card)
//     window.scrollTo(0,0)
//     body.style.overflow = 'hidden'
//     card.dataset.fullscreen = 'true'; 
//     map.dataset.fullscreen = 'true';
//     img.title = 'Normalt läge' 
//     img.src="svg-icons/full-screen-button-7-svgrepo-com.svg"
//     globe([17.34, 60.12], 3) //Swedens coords
//   } else {
//     body.style.overflow = 'auto'
//     cardLayout.insertBefore(card, cardLayout.lastElementChild);
//     card.removeAttribute('data-fullscreen')
//     map.dataset.fullscreen = 'false';
//     img.title="Helskärmsläge"
//     img.src="svg-icons/full-screen-display-button-1-svgrepo-com.svg"
//     card.scrollIntoView() //Scrolling card element to view. 
//     globe([17.34, 60.12], 2)
//   }
// }
