// Global variables
let map;
let currentMarker;


function initMap() {
    const philippinesCenter = [12.8797, 121.7740];
    const initialZoom = 6;
    map = L.map('map').setView(philippinesCenter, initialZoom);

  
    map.createPane('labelsPane');
    var customLabelsPane = map.getPane('labelsPane');
    if (customLabelsPane) {
        customLabelsPane.style.zIndex = 650;
        customLabelsPane.style.pointerEvents = 'none';
    } else {
        console.error("Could not create or get 'labelsPane'");
    }
   
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
    }).addTo(map);

   
    /*
    L.tileLayer('SOME_LABELS_LAYER_URL', {
        attribution: 'LABELS_ATTRIBUTION',
        pane: 'labelsPane'
    }).addTo(map);
    */
    


    map.on('click', function(event) {
     
        placeMarkerAndGetLocationName(event);
    });
}

function placeMarkerAndGetCoords(latlng) { 
    if (currentMarker) {
        currentMarker.remove(); 
    }

    
    currentMarker = L.marker([latlng.lat, latlng.lng]).addTo(map); // 

   
    document.getElementById('latitude').value = latlng.lat.toFixed(6);
    document.getElementById('longitude').value = latlng.lng.toFixed(6);

   
    console.log('Selected Latitude:', latlng.lat.toFixed(6));
    console.log('Selected Longitude:', latlng.lng.toFixed(6));
}

async function placeMarkerAndGetLocationName(mapClickEvent) {
    const latlng = mapClickEvent.latlng;

    if (currentMarker) {
        currentMarker.remove();
    }
    currentMarker = L.marker([latlng.lat, latlng.lng]).addTo(map);

    document.getElementById('latitude').value = latlng.lat.toFixed(6);
    document.getElementById('longitude').value = latlng.lng.toFixed(6);

    const locationNameInput = document.getElementById('locationName'); 
    locationNameInput.value = "Fetching location..."; 

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`);
        if (!response.ok) {
            throw new Error(`Nominatim API request failed: ${response.status}`);
        }
        const data = await response.json();

        console.log("Nominatim Response:", data); 

        if (data && data.display_name) {
            locationNameInput.value = data.display_name; 
        } else if (data && data.address) {
         
            let constructedName = "";
            if (data.address.road) constructedName += data.address.road;
            if (data.address.city) constructedName += (constructedName ? ", " : "") + data.address.city;
            else if (data.address.town) constructedName += (constructedName ? ", " : "") + data.address.town;
            else if (data.address.village) constructedName += (constructedName ? ", " : "") + data.address.village;
            
            if (constructedName) {
                locationNameInput.value = constructedName;
            } else {
                locationNameInput.value = "Location name not found";
            }
        } else {
            locationNameInput.value = "Location name not found";
        }
    } catch (error) {
        console.error("Reverse geocoding error:", error);
        locationNameInput.value = "Error fetching location";
    }

}



document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

