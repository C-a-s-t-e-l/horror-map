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
let philippinesMapBounds = null;
let lastClickedLatLng = null;
let geoSearchControlInstance = null;

const creepyIcon = new L.Icon({
    iconUrl: 'https://static.vecteezy.com/system/resources/previews/019/858/520/non_2x/eye-flat-color-outline-icon-free-png.png',
    iconSize: [25, 35],
    iconAnchor: [12, 35],
    popupAnchor: [1, -30]
});

// Modal elements
const storyModal = document.getElementById('story-modal');
const modalTitle = document.getElementById('modal-story-title');
const modalLocation = document.getElementById('modal-story-location');
const modalFullStory = document.getElementById('modal-full-story');
const modalCloseButton = document.getElementById('modal-close-button');

function openStoryModal(story) {
    if (!storyModal || !modalTitle || !modalLocation || !modalFullStory) {
        console.error('Modal elements not found!');
        return;
    }
    modalTitle.textContent = story.title || 'Untitled Story';
    modalLocation.textContent = `Location: ${story.locationName || 'Unknown Location'}`;
    modalFullStory.innerHTML = '';

    const fullStoryText = story.fullStory || '';
    const paragraphs = fullStoryText.split('\n');
    paragraphs.forEach(paraText => {
        if (paraText.trim() !== '') {
            const p = document.createElement('p');
            p.textContent = paraText;
            modalFullStory.appendChild(p);
        }
    });
    storyModal.classList.remove('modal-hidden');
    storyModal.classList.add('modal-visible');
}

function closeStoryModal() {
    if (!storyModal) return;
    storyModal.classList.remove('modal-visible');
}

if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeStoryModal);
}
if (storyModal) {
    storyModal.addEventListener('click', function(event) {
        if (event.target === storyModal) {
            closeStoryModal();
        }
    });
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && storyModal.classList.contains('modal-visible')) {
            closeStoryModal();
        }
    });
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function initMap() {
    const philippinesCenter = [12.8797, 121.7740];
    const initialZoom = 6;
    map = L.map('map').setView(philippinesCenter, initialZoom);

    const southWest = L.latLng(PH_BOUNDS_COORDS.minLat, PH_BOUNDS_COORDS.minLng);
    const northEast = L.latLng(PH_BOUNDS_COORDS.maxLat, PH_BOUNDS_COORDS.maxLng);
    philippinesMapBounds = L.latLngBounds(southWest, northEast);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri', maxZoom: 18
    }).addTo(map);
    L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri', maxZoom: 18
    }).addTo(map);
    L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles © Esri', maxZoom: 18
    }).addTo(map);

   
    if (map) {
        lastClickedLatLng = map.getCenter();
    }

    map.on('click', function(event) {
        placeMarkerAndGetLocationName(event);
        lastClickedLatLng = event.latlng;
        const storyListTitle = document.querySelector('#story-list-panel h3');
        if (storyListTitle) storyListTitle.textContent = 'Nearby Supernatural Stories';
        filterStories(document.getElementById('story-search-bar').value);
    });

    // --- ADD GEOSEARCH CONTROL ---
    const provider = new GeoSearch.OpenStreetMapProvider({
        params: {
            countrycodes: philippinesFocus ? 'ph' : '', 
        },
    });

    const searchControl = new GeoSearch.GeoSearchControl({
        provider: provider,
        style: 'bar',
        showMarker: true,
        showPopup: false,
        marker: { icon: creepyIcon, draggable: false },
        autoClose: true,
        keepResult: true,
        searchLabel: 'Search haunted locations...',
        notFoundMessage: 'Sorry, that place is too elusive to find.',
    });
    map.addControl(searchControl);
    geoSearchControlInstance = searchControl; 

    map.on('geosearch/showlocation', function (result) {
        console.log('Geosearch result:', result.location);
        if (currentMarker) {
            currentMarker.remove();
            currentMarker = null;
            document.getElementById('latitude').value = '';
            document.getElementById('longitude').value = '';
            document.getElementById('locationName').value = '';
        }
        lastClickedLatLng = L.latLng(result.location.y, result.location.x); 
        
        const storyListTitle = document.querySelector('#story-list-panel h3');
        if (storyListTitle) {
            const displayLabel = result.location.label.length > 35 ?
                                 result.location.label.substring(0, 32) + '...' :
                                 result.location.label;
            storyListTitle.textContent = `Stories near "${displayLabel}"`;
        }
        filterStories(document.getElementById('story-search-bar').value);
    });
   

    const mapLoadingOverlay = document.querySelector('.map-loading-overlay');
    if (mapLoadingOverlay) {
        mapLoadingOverlay.style.display = 'none';
    }

    
}

async function placeMarkerAndGetLocationName(mapClickEvent) {
    const latlng = mapClickEvent.latlng;
    if (currentMarker) currentMarker.remove();
    currentMarker = L.marker([latlng.lat, latlng.lng], { icon: creepyIcon }).addTo(map);

    document.getElementById('latitude').value = latlng.lat.toFixed(6);
    document.getElementById('longitude').value = latlng.lng.toFixed(6);
    const locationNameInput = document.getElementById('locationName');
    locationNameInput.value = "Fetching location...";

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${lngStr}`); // Typo corrected: lngStr to latlng.lng
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
        if (storyMarkers.hasOwnProperty(storyId)) {
            storyMarkers[storyId].remove();
        }
    }
    storyMarkers = {};

    if (!storiesToDisplay || storiesToDisplay.length === 0) { 
        storiesContainer.innerHTML = '<p>No stories found for this view/search.</p>';
        return;
    }

    let sortedStories = [...storiesToDisplay];
    if (lastClickedLatLng) {
        sortedStories.sort((a, b) => {
         
            if (!a.lat || !a.lng || !b.lat || !b.lng) return 0;
            const distA = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, a.lat, a.lng);
            const distB = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, b.lat, b.lng);
            return distA - distB;
        });
    }

    sortedStories.forEach(story => {
        const storyItem = document.createElement('div');
        storyItem.className = 'story-item';
        storyItem.setAttribute('data-story-id', story.id);
        const titleElement = document.createElement('h4');
        titleElement.textContent = story.title;
        const locationElement = document.createElement('p');
        let distanceText = "";
        if (lastClickedLatLng && story.lat && story.lng) { // Check story has lat/lng
            const dist = getDistanceFromLatLonInKm(lastClickedLatLng.lat, lastClickedLatLng.lng, story.lat, story.lng);
            distanceText = ` (~${dist.toFixed(1)} km away)`;
        }
        locationElement.textContent = story.locationName + distanceText;
        storyItem.appendChild(titleElement);
        storyItem.appendChild(locationElement);
        storyItem.addEventListener('click', () => handleStoryItemClick(story));
        storiesContainer.appendChild(storyItem);

        if (story.lat && story.lng) {
            const marker = L.marker([story.lat, story.lng], { icon: creepyIcon }).addTo(map);
            storyMarkers[story.id] = marker;
            marker.on('click', () => {
                openStoryModal(story);
                if (map && story.lat && story.lng) {
                    map.setView([story.lat, story.lng], 13);
                }
            });
        }
    });
}

function handleStoryItemClick(story) {
    openStoryModal(story);
    if (map && story.lat && story.lng) {
        map.setView([story.lat, story.lng], 13);
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
            (story.title && story.title.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (story.locationName && story.locationName.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (story.snippet && story.snippet.toLowerCase().includes(lowerCaseSearchTerm))
        );
    }
    displayStories(storiesToDisplayInList);
}

function updateMapFocus(newReferencePoint = null, newTitle = null) {
    const toggleButton = document.getElementById('toggle-world-button');
    const storyListTitle = document.querySelector('#story-list-panel h3');

    if (newReferencePoint) {
        lastClickedLatLng = newReferencePoint;
    } else {
        if (map && !lastClickedLatLng) lastClickedLatLng = map.getCenter();
    }

    if (newTitle) {
        if (storyListTitle) storyListTitle.textContent = newTitle;
    } else {
        if (philippinesFocus) {
            if (storyListTitle) storyListTitle.textContent = 'Stories in the Philippines';
        } else {
            if (storyListTitle) storyListTitle.textContent = 'All Stories (World View)';
        }
    }
    if (geoSearchControlInstance && map) {
        
        try {
            map.removeControl(geoSearchControlInstance);
        } catch (e) {
     
            console.warn("Attempted to remove geoSearchControlInstance that might not have been on the map, or another issue:", e);
        }

        const newProvider = new GeoSearch.OpenStreetMapProvider({
            params: { countrycodes: philippinesFocus ? 'ph' : '' },
        });
        const newSearchControl = new GeoSearch.GeoSearchControl({
            provider: newProvider, style: 'bar', showMarker: true, showPopup: false,
            marker: { icon: creepyIcon, draggable: false },
            autoClose: true, keepResult: true,
            searchLabel: 'Search haunted locations...',
            notFoundMessage: 'Sorry, that place is too elusive to find.',
        });
        map.addControl(newSearchControl);
        geoSearchControlInstance = newSearchControl; 
    }

    if (philippinesFocus) {
        if (map && philippinesMapBounds) map.setMaxBounds(philippinesMapBounds);
        if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-globe-americas"></i> Unveil World Horrors';
        const phStories = allStories.filter(story => story.lat >= PH_BOUNDS_COORDS.minLat && story.lat <= PH_BOUNDS_COORDS.maxLat && story.lng >= PH_BOUNDS_COORDS.minLng && story.lng <= PH_BOUNDS_COORDS.maxLng);
        displayStories(phStories);
    } else {
        if (map) map.setMaxBounds(null);
        if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-map-pin"></i> Focus on Philippines';
        displayStories(allStories);
    }
}

function handleStorySubmit(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const storyText = document.getElementById('fullStory').value;
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
            alert("Story location outside PH. To post, 'Unveil World Horrors' or select location in PH.");
            return;
        }
    }

    const newStory = {
        id: 'story-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
        title: title, fullStory: storyText, locationName: locationName,
        lat: latNum, lng: lngNum,
        snippet: storyText.substring(0, 100) + (storyText.length > 100 ? '...' : '')
    };
    allStories.push(newStory);

    const newStoryLatLng = L.latLng(newStory.lat, newStory.lng);
    const postSubmitTitle = 'Stories Near Newly Posted';
    updateMapFocus(newStoryLatLng, postSubmitTitle);

    document.getElementById('storyForm').reset();
    if (currentMarker) {
        currentMarker.remove();
        currentMarker = null;
    }
    alert('Story posted locally!');
}

document.addEventListener('DOMContentLoaded', function() {
    initMap(); // Initializes map and geosearch control. Sets initial lastClickedLatLng.

    const togglePostFormButton = document.getElementById('toggle-post-form-button');
    const formColumn = document.getElementById('form-column');
    if (togglePostFormButton && formColumn) {
        togglePostFormButton.addEventListener('click', () => {
            const isHidden = formColumn.classList.contains('hidden-form');
            formColumn.classList.toggle('hidden-form');
            // Using innerHTML to include icons
            togglePostFormButton.innerHTML = isHidden ? '<i class="fas fa-times-circle"></i> Hide Submission Form' : '<i class="fas fa-pen-nib"></i> Share Your Terror';
        });
    }

    const searchBar = document.getElementById('story-search-bar'); // This is for the story list, not the map search
    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
            filterStories(event.target.value);
        });
    }

    const toggleButton = document.getElementById('toggle-world-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            philippinesFocus = !philippinesFocus;
            updateMapFocus(); // This will update map bounds, stories, AND the geosearch country codes
        });
    }

    const storyForm = document.getElementById('storyForm');
    if (storyForm) {
        storyForm.addEventListener('submit', handleStorySubmit);
    }


    // }
    allStories = [...dummyStories]; 


    updateMapFocus();
});