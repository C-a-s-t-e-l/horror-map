// Global variables
let map;
let currentMarker; // For the pin placed by the user when posting a new story
let allStories = [];
let storyMarkers = {};
let philippinesFocus = true;
const PH_BOUNDS_COORDS = {
    minLat: 4.5, maxLat: 21.2,
    minLng: 116.9, maxLng: 126.6
};
let philippinesMapBounds = null;
let lastClickedLatLng = null; 

// Dummy data
const dummyStories = [
    { id: '1', title: 'The White Lady of Balete Drive', locationName: 'Balete Drive, QC', lat: 14.6282, lng: 121.0448, snippet: '...' },
    { id: '2', title: 'Manila Film Center Tragedy', locationName: 'MFC, Pasay', lat: 14.5500, lng: 120.9849, snippet: '...' },
    { id: '3', title: 'Haunted Diplomat Hotel', locationName: 'Diplomat Hotel, Baguio', lat: 16.4023, lng: 120.5795, snippet: '...' },
    { id: '4', title: 'Tiyanak of San Pablo', locationName: 'San Pablo, Laguna', lat: 14.0678, lng: 121.3250, snippet: '...' },
    { id: '5', title: 'Biringan City', locationName: 'Somewhere in Samar', lat: 11.8000, lng: 125.0000, snippet: 'A mythical invisible city...' }, // Added another story for testing
    { id: '6', title: 'Old UST Hospital', locationName: 'UST, Manila', lat: 14.6091, lng: 120.9898, snippet: 'Many ghostly tales from the old hospital...' }
];

// --- Helper Function: Haversine Distance ---
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// --- Map Initialization and Interaction ---
function initMap() {
    const philippinesCenter = [12.8797, 121.7740];
    const initialZoom = 6;
    map = L.map('map').setView(philippinesCenter, initialZoom);

    const southWest = L.latLng(PH_BOUNDS_COORDS.minLat, PH_BOUNDS_COORDS.minLng);
    const northEast = L.latLng(PH_BOUNDS_COORDS.maxLat, PH_BOUNDS_COORDS.maxLng);
    philippinesMapBounds = L.latLngBounds(southWest, northEast);
   
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri — ...',
        maxZoom: 18
    }).addTo(map);
    
    // Set initial reference point for sorting (map center)
    lastClickedLatLng = map.getCenter();
    updateMapFocus(); 

    map.on('click', function(event) {
        placeMarkerAndGetLocationName(event); // For posting new stories
        
        // When map is clicked, update the reference point for story sorting
        lastClickedLatLng = event.latlng;
        const storyListTitle = document.querySelector('#story-list-panel h3');
        if (storyListTitle) storyListTitle.textContent = 'Nearby Supernatural Stories';
        filterStories(document.getElementById('story-search-bar').value); // Re-filter/sort based on new click
    });
}

async function placeMarkerAndGetLocationName(mapClickEvent) { // For new story submission
    const latlng = mapClickEvent.latlng;
    if (currentMarker) currentMarker.remove();
    currentMarker = L.marker([latlng.lat, latlng.lng]).addTo(map);

    document.getElementById('latitude').value = latlng.lat.toFixed(6);
    document.getElementById('longitude').value = latlng.lng.toFixed(6);

    const locationNameInput = document.getElementById('locationName'); 
    locationNameInput.value = "Fetching location..."; 

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`);
        if (!response.ok) throw new Error(`Nominatim: ${response.status}`);
        const data = await response.json();
        locationNameInput.value = data.display_name || "Location name not found";
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
        storiesContainer.innerHTML = '<p>No stories found for this view/search.</p>';
        return;
    }

    // --- Sort stories by proximity to lastClickedLatLng before displaying ---
    let sortedStories = [...storiesToDisplay]; // Create a mutable copy
    if (lastClickedLatLng) {
        sortedStories.sort((a, b) => {
            const distA = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, a.lat, a.lng);
            const distB = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, b.lat, b.lng);
            return distA - distB; // Sort ascending by distance
        });
    }
    // --- End sorting ---

    sortedStories.forEach(story => { // Iterate over sortedStories
        const storyItem = document.createElement('div');
        storyItem.className = 'story-item';
        storyItem.setAttribute('data-story-id', story.id);

        const titleElement = document.createElement('h4');
        titleElement.textContent = story.title;
        const locationElement = document.createElement('p');
        // Optionally display distance
        let distanceText = "";
        if (lastClickedLatLng) {
            const dist = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, story.lat, story.lng);
            distanceText = ` (~${dist.toFixed(1)} km away)`;
        }
        locationElement.textContent = story.locationName + distanceText;


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
    let baseStoriesForFiltering;

    if (philippinesFocus) {
        baseStoriesForFiltering = allStories.filter(story =>
            story.lat >= PH_BOUNDS_COORDS.minLat && story.lat <= PH_BOUNDS_COORDS.maxLat &&
            story.lng >= PH_BOUNDS_COORDS.minLng && story.lng <= PH_BOUNDS_COORDS.maxLng
        );
    } else {
        baseStoriesForFiltering = allStories;
    }

    let storiesToDisplayInList = baseStoriesForFiltering;
    if (lowerCaseSearchTerm) {
        storiesToDisplayInList = baseStoriesForFiltering.filter(story =>
            story.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            story.locationName.toLowerCase().includes(lowerCaseSearchTerm) ||
            (story.snippet && story.snippet.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }

    displayStories(storiesToDisplayInList);
}

function updateMapFocus(newReferencePoint = null, newTitle = null) { // Allow passing a new ref point and title
    const toggleButton = document.getElementById('toggle-world-button');
    const storyListTitle = document.querySelector('#story-list-panel h3');

    // If a specific reference point is given (e.g., after posting a story), use it.
    // Otherwise, use the current map center.
    if (newReferencePoint) {
        lastClickedLatLng = newReferencePoint;
    } else {
        if (map) lastClickedLatLng = map.getCenter(); // Default to map center
    }
    
    // Set the title
    if (newTitle) {
        if (storyListTitle) storyListTitle.textContent = newTitle;
    } else {
        if (philippinesFocus) {
            if (storyListTitle) storyListTitle.textContent = 'Stories in the Philippines';
        } else {
            if (storyListTitle) storyListTitle.textContent = 'All Stories (World View)';
        }
    }


    if (philippinesFocus) {
        if (map && philippinesMapBounds) map.setMaxBounds(philippinesMapBounds);
        if (toggleButton) toggleButton.textContent = 'View World Map';

        const phStories = allStories.filter(story =>
            story.lat >= PH_BOUNDS_COORDS.minLat && story.lat <= PH_BOUNDS_COORDS.maxLat &&
            story.lng >= PH_BOUNDS_COORDS.minLng && story.lng <= PH_BOUNDS_COORDS.maxLng
        );
        displayStories(phStories); // displayStories will use the current lastClickedLatLng for sorting
    } else { // World view is active
        if (map) map.setMaxBounds(null);
        if (toggleButton) toggleButton.textContent = 'Focus on Philippines';
        
        displayStories(allStories); // displayStories will use the current lastClickedLatLng for sorting
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
            alert("Story location outside PH. To post, 'View World Map' or select location in PH.");
            return;
        }
    }

    const newStory = {
        id: 'story-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
        title: title, story: storyText, locationName: locationName,
        lat: latNum, lng: lngNum,
        snippet: storyText.substring(0, 100) + (storyText.length > 100 ? '...' : '')
    };

    allStories.push(newStory);
    
    // Define the reference point and title for after submission
    const newStoryLatLng = L.latLng(newStory.lat, newStory.lng);
    const postSubmitTitle = 'Stories Near Newly Posted';

    // Call updateMapFocus, passing the new reference point and title
    updateMapFocus(newStoryLatLng, postSubmitTitle);

    document.getElementById('storyForm').reset();
    if (currentMarker) {
        currentMarker.remove();
        currentMarker = null; 
    }
    alert('Story posted locally!');
}

document.addEventListener('DOMContentLoaded', function() {
    initMap(); 

    const searchBar = document.getElementById('story-search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
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
    updateMapFocus(); // Initial call to set up the map focus and display stories
    // The call to updateMapFocus() within initMap() will handle initial sort and display
});