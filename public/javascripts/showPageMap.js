//  js for map 

// const campground = require("../../models/campground");

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJvb2RoaWphemk1NSIsImEiOiJjbGNvc3dxaWIxenIyM29tdGpvcTF5c3IxIn0.L3xN8sn9VyvI9Zu4lzPBbw'
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
});
map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map.
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)
