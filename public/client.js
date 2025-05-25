// Global variables
let map;
let currentMarker; 
let allStories = [];
let storyMarkers = {};
let philippinesFocus = true; 
const PH_BOUNDS_COORDS = {
    minLat: 4.5, maxLat: 21.2,
    minLng: 116.9, maxLng: 126.6
};
let philippinesMapBounds = null; // Will hold the L.latLngBounds object

// Dummy data
const dummyStories = [
    { id: '1', title: 'The White Lady of Balete Drive', locationName: 'Balete Drive, QC', lat: 14.6282, lng: 121.0448, snippet: '...' },
    { id: '2', title: 'Manila Film Center Tragedy', locationName: 'MFC, Pasay', lat: 14.5500, lng: 120.9849, snippet: '...' },
    { id: '3', title: 'Haunted Diplomat Hotel', locationName: 'Diplomat Hotel, Baguio', lat: 16.4023, lng: 120.5795, snippet: '...' },
    { id: '4', title: 'Tiyanak of San Pablo', locationName: 'San Pablo, Laguna', lat: 14.0678, lng: 121.3250, snippet: '...' }
];

// --- Function Definitions ---

function initMap() {
    const philippinesCenter = [12.8797, 121.7740];
    const initialZoom = 6;
    map = L.map('map').setView(philippinesCenter, initialZoom);

    // Define Leaflet LatLngBounds object for PH
    const southWest = L.latLng(PH_BOUNDS_COORDS.minLat, PH_BOUNDS_COORDS.minLng);
    const northEast = L.latLng(PH_BOUNDS_COORDS.maxLat, PH_BOUNDS_COORDS.maxLng);
    philippinesMapBounds = L.latLngBounds(southWest, northEast);
   
    // Base Tile Layer (Esri Satellite)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri — ...', // Keep your full attribution
        maxZoom: 18
    }).addTo(map);

    // --- Optional: Visual Labels Overlay ---
    // If you decide to add a visual label layer later (e.g., MapTiler with API key)
    // map.createPane('labelsPane');
    // var customLabelsPane = map.getPane('labelsPane');
    // if (customLabelsPane) {
    //     customLabelsPane.style.zIndex = 650; // Or appropriate z-index
    //     customLabelsPane.style.pointerEvents = 'none';
    // }
    // L.tileLayer('YOUR_LABELS_URL', { attribution: '...', pane: 'labelsPane' }).addTo(map);
    // --- End Optional Labels ---
    
    updateMapFocus(); // Apply initial focus state (bounds and story filter)

    map.on('click', function(event) {
        placeMarkerAndGetLocationName(event);
    });
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
        if (!response.ok) throw new Error(`Nominatim API request failed: ${response.status}`);
        const data = await response.json();
        if (data && data.display_name) {
            locationNameInput.value = data.display_name; 
        } else { // Simplified fallback
            locationNameInput.value = "Location name not found";
        }
    } catch (error) {
        console.error("Reverse geocoding error:", error);
        locationNameInput.value = "Error fetching location";
    }
}

function displayStories(storiesToDisplay) {
    const storiesContainer = document.getElementById('stories-container');
    storiesContainer.innerHTML = '';

    for (const storyId in storyMarkers) {
        if (storyMarkers.hasOwnProperty(storyId)) storyMarkers[storyId].remove();
    }
    storyMarkers = {};

    if (storiesToDisplay.length === 0) {
        storiesContainer.innerHTML = '<p>No stories found for this view.</p>';
        return;
    }

    storiesToDisplay.forEach(story => {
        const storyItem = document.createElement('div');
        storyItem.className = 'story-item';
        storyItem.setAttribute('data-story-id', story.id);

        const titleElement = document.createElement('h4');
        titleElement.textContent = story.title;
        const locationElement = document.createElement('p');
        locationElement.textContent = story.locationName;

        storyItem.appendChild(titleElement);
        storyItem.appendChild(locationElement);
        storyItem.addEventListener('click', () => handleStoryItemClick(story));
        storiesContainer.appendChild(storyItem);

        if (story.lat && story.lng) {
            const marker = L.marker([story.lat, story.lng])
                .addTo(map)
                .bindPopup(`<b>${story.title}</b><br>${story.locationName}`);
            storyMarkers[story.id] = marker;
        }
    });
}

function handleStoryItemClick(story) {
    if (map && story.lat && story.lng) {
        map.setView([story.lat, story.lng], 15);
        const marker = storyMarkers[story.id];
        if (marker) marker.openPopup();
    }
}

function filterStories(searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    let storiesToDisplayInList;

    // Determine base list: PH-only or all, based on current focus
    if (philippinesFocus) {
        storiesToDisplayInList = allStories.filter(story =>
            story.lat >= PH_BOUNDS_COORDS.minLat && story.lat <= PH_BOUNDS_COORDS.maxLat &&
            story.lng >= PH_BOUNDS_COORDS.minLng && story.lng <= PH_BOUNDS_COORDS.maxLng
        );
    } else {
        storiesToDisplayInList = allStories;
    }

    // Apply search term if present
    if (lowerCaseSearchTerm) {
        storiesToDisplayInList = storiesToDisplayInList.filter(story =>
            story.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            story.locationName.toLowerCase().includes(lowerCaseSearchTerm) ||
            (story.snippet && story.snippet.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }
    displayStories(storiesToDisplayInList);
}

function updateMapFocus() {
    const toggleButton = document.getElementById('toggle-world-button');
    // const mapDiv = document.getElementById('map'); // Not needed if not toggling CSS class for fog

    if (philippinesFocus) {
        if (map && philippinesMapBounds) map.setMaxBounds(philippinesMapBounds);
        if (toggleButton) toggleButton.textContent = 'Open up the Horrors of the World';
        // if (mapDiv) mapDiv.classList.remove('world-view-active'); // No longer needed

        const phStories = allStories.filter(story =>
            story.lat >= PH_BOUNDS_COORDS.minLat && story.lat <= PH_BOUNDS_COORDS.maxLat &&
            story.lng >= PH_BOUNDS_COORDS.minLng && story.lng <= PH_BOUNDS_COORDS.maxLng
        );
        displayStories(phStories);
    } else { // World view is active
        if (map) map.setMaxBounds(null);
        if (toggleButton) toggleButton.textContent = 'Focus on Philippines';
        // if (mapDiv) mapDiv.classList.add('world-view-active'); // No longer needed

        displayStories(allStories);
    }
}

function handleStorySubmit(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const storyText = document.getElementById('story').value;
    const latStr = document.getElementById('latitude').value;
    const lngStr = document.getElementById('longitude').value;
    const locationName = document.getElementById('locationName').value;

    if (!title || !storyText || !latStr || !lngStr || !locationName) {
        alert('Please fill in all fields and select a location on the map.');
        return;
    }

    const latNum = parseFloat(latStr);
    const lngNum = parseFloat(lngStr);

    if (philippinesFocus) {
        if (latNum < PH_BOUNDS_COORDS.minLat || latNum > PH_BOUNDS_COORDS.maxLat ||
            lngNum < PH_BOUNDS_COORDS.minLng || lngNum > PH_BOUNDS_COORDS.maxLng) {
            alert("Story location is outside the Philippines. To post, please 'View World Map' first or select a location within the Philippines.");
            return;
        }
    }

    const newStory = {
        id: 'story-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
        title: title,
        story: storyText, 
        locationName: locationName,
        lat: latNum,
        lng: lngNum,
        snippet: storyText.substring(0, 100) + (storyText.length > 100 ? '...' : '')
    };

    allStories.push(newStory);
    updateMapFocus(); // This will re-filter and display stories correctly

    document.getElementById('storyForm').reset();
    if (currentMarker) {
        currentMarker.remove();
        currentMarker = null; 
    }
    alert('Story posted locally!');
}

// --- Initial Setup when DOM is loaded ---
document.addEventListener('DOMContentLoaded', function() {
    initMap(); 

    const searchBar = document.getElementById('story-search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
            // Let filterStories handle the logic of current focus state
            filterStories(event.target.value);
        });
    }

    const toggleButton = document.getElementById('toggle-world-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            philippinesFocus = !philippinesFocus;
            updateMapFocus();
        });
    }

    const storyForm = document.getElementById('storyForm');
    if (storyForm) {
        storyForm.addEventListener('submit', handleStorySubmit);
    }

    allStories = [...dummyStories];
    updateMapFocus();
    // updateMapFocus() is already called at the end of initMap(),
    // so it will correctly display initial stories based on philippinesFocus.
    // No need for another explicit call here IF allStories is populated before initMap's updateMapFocus runs,
    // OR if updateMapFocus in initMap correctly uses the fresh allStories.
    // To be safe and clear, the call within initMap() is fine for the *initial* render.
});