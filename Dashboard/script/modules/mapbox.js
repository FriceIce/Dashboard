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
  // map.addControl(new mapboxgl.FullscreenControl(), 'bottom-left');



  map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
  });
     
  // The following values can be changed to control rotation speed:
    
  // At low zooms, complete a revolution every two minutes.
  const secondsPerRevolution = 120;
  // Above zoom level 5, do not rotate.
  const maxSpinZoom = 5;
  // Rotate at intermediate speeds between zoom levels 3 and 5.
  const slowSpinZoom = 3;
    
  let userInteracting = false;
  let spinEnabled = true;
    
  function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
  let distancePerSecond = 360 / secondsPerRevolution;
  if (zoom > slowSpinZoom) {
  // Slow spinning at higher zooms
  const zoomDif =
  (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
  distancePerSecond *= zoomDif;
  }
  const center = map.getCenter();
  center.lng -= distancePerSecond;
  // Smoothly animate the map over one second.
  // When this animation is complete, it calls a 'moveend' event.
  map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
  }
    
  // Pause spinning on interaction
  map.on('mousedown', () => {
  userInteracting = true;
  });
    
  // Restart spinning the globe when interaction is complete
  map.on('mouseup', () => {
  userInteracting = false;
   spinGlobe();
  });
    
  // These events account for cases where the mouse has moved
  // off the map, so 'mouseup' will not be fired.
  map.on('dragend', () => {
  userInteracting = false;
   spinGlobe();
  });
  map.on('pitchend', () => {
  userInteracting = false;
   spinGlobe();
  });
  map.on('rotateend', () => {
  userInteracting = false;
   spinGlobe();
  });
    
  // When animation is complete, start spinning if there is no ongoing interaction
  map.on('moveend', () => {
   spinGlobe();
  });

  document.getElementById('btn-spin').addEventListener('click', (e) => {
    spinEnabled = !spinEnabled;
    if (spinEnabled) {
    spinGlobe();
    e.target.innerHTML = 'Pause rotation';
    } else {
    map.stop(); // Immediately end ongoing animation
    e.target.innerHTML = 'Start rotation';
    }
  });
    spinGlobe();
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
    globe([17.34, 60.12], 3) //Swedens coords
  } else {
    body.style.overflow = 'auto'
    cardLayout.insertBefore(card, cardLayout.lastElementChild);
    card.removeAttribute('data-fullscreen')
    map.dataset.fullscreen = 'false';
    img.title="Helskärmsläge"
    img.src="svg-icons/full-screen-display-button-1-svgrepo-com.svg"
    card.scrollIntoView() //Scrolling card element to view. 
    globe([17.34, 60.12], 2)
  }
}
