/*  */
// import userLocation from "./user-location";

export default function globe(position, zoom){
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJpY2VpY2UiLCJhIjoiY2xyZXl4eW1rMGN4czJqbzB3OHkwcXBpcCJ9.noDS3FIuqbswTiHqeVIzdQ';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: zoom, 
    center: position
  });
  map.addControl(new mapboxgl.NavigationControl());
  

  const directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoiZnJpY2VpY2UiLCJhIjoiY2xyZXl4eW1rMGN4czJqbzB3OHkwcXBpcCJ9.noDS3FIuqbswTiHqeVIzdQ',
    unit: 'metric',
    profile: 'mapbox/cycling'
  });

  map.addControl(directions, 'top-left');
}

