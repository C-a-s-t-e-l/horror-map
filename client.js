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

// const dummyStories = [
//     {
//         id: '1',
//         title: 'The White Lady of Balete Drive',
//         locationName: 'Balete Drive, Quezon City',
//         lat: 14.6282, lng: 121.0448,
//         snippet: 'A famous urban legend about a ghostly woman often seen by motorists at night...',
//         fullStory: "Balete Drive in Quezon City is notorious for sightings of a 'White Lady.' Legend has it that she was a young woman who died tragically in the area, either in a car accident or as a victim of a heinous crime during the Japanese occupation. Motorists, especially taxi drivers passing through late at night, have reported seeing a beautiful woman in white hailing them, only to have her vanish from the backseat or appear terrifyingly in their rearview mirror. The large, old balete trees lining the street are said to be her favored haunting grounds, adding to the eerie atmosphere of this well-known road."
//     },
//     {
//         id: '2',
//         title: 'Manila Film Center Tragedy',
//         locationName: 'Manila Film Center, Pasay',
//         lat: 14.5500, lng: 120.9849,
//         snippet: 'Rumors of workers buried alive during its rushed construction in 1981...',
//         fullStory: "The Manila Film Center, built in a rush for an international film festival in 1981 under the Marcos regime, is shrouded in tragedy and ghostly tales. During its construction, a scaffolding collapsed, and it's widely rumored that many workers were buried alive in wet cement to meet the tight deadline, their bodies never recovered and entombed within the structure. Since then, employees and visitors have reported disembodied cries, apparitions, and an overwhelming sense of dread, particularly in the main theater. The building is considered one of the most haunted locations in Metro Manila."
//     },
//     {
//         id: '3',
//         title: 'Haunted Diplomat Hotel',
//         locationName: 'Diplomat Hotel, Baguio City',
//         lat: 16.4023, lng: 120.5795,
//         snippet: 'Once a seminary, then a hotel during WWII, now known for paranormal activity...',
//         fullStory: "The Diplomat Hotel in Baguio City sits atop Dominican Hill and has a dark history. Originally a rest house and seminary for Dominican friars in the early 20th century, it was later seized by Japanese forces during World War II and used as a garrison where many atrocities, including beheadings of priests, nuns, and refugees, reportedly took place. After the war, it was converted into a hotel, but tales of headless apparitions, ghostly children, and chilling screams persisted. Now abandoned, it's a popular spot for ghost hunters and curious visitors drawn by its terrifying reputation."
//     },
//     {
//         id: '4',
//         title: 'Tiyanak of San Pablo',
//         locationName: 'San Pablo City, Laguna',
//         lat: 14.0678, lng: 121.3250,
//         snippet: 'A vampiric creature from Philippine folklore that takes the form of a baby...',
//         fullStory: "The Tiyanak is a malevolent creature in Philippine mythology that often takes the form of a crying baby to lure unsuspecting victims into remote areas. Once picked up or approached, it reveals its true, monstrous form – often described as a small, goblin-like creature with sharp claws and fangs – and attacks. Stories of Tiyanaks are prevalent in rural areas, particularly near forests or old trees. Travelers are warned to be wary of infant cries heard in desolate places, as it might be a Tiyanak waiting to ensnare them."
//     },
//     {
//         id: '5',
//         title: 'Biringan City',
//         locationName: 'Somewhere in Samar',
//         lat: 11.8000, lng: 125.0000,
//         snippet: 'A mythical invisible city said to be inhabited by engkantos...',
//         fullStory: "Biringan City is a legendary, invisible city said to exist somewhere in the island of Samar. It is believed to be a highly advanced, beautiful city inhabited by engkantos (elemental spirits or fairies) that can only be seen by certain individuals or under specific conditions. Those who have claimed to see it describe modern-looking structures and bright lights. However, Biringan is also associated with disappearances, as it's said that engkantos sometimes lure humans into their world, from which they can never return. Fishermen often avoid certain areas of the sea believed to be gateways to Biringan."
//     },
//     {
//         id: '6',
//         title: 'Old UST Hospital',
//         locationName: 'UST Hospital (Old Building), Manila',
//         lat: 14.6091, lng: 120.9898,
//         snippet: 'Many ghostly tales from the old hospital wings and corridors...',
//         fullStory: "The University of Santo Tomas (UST) is one of the oldest universities in Asia, and its historic campus, particularly the old hospital buildings, has accumulated numerous ghost stories over the centuries. During World War II, the campus was used as an internment camp by the Japanese. Many have reported seeing ghostly figures of nuns, priests, soldiers, and former patients roaming the halls, especially at night. Cold spots, unexplained noises, and feelings of being watched are common experiences reported by students, faculty, and hospital staff who have spent time in the older sections."
//     }
// ];


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

    modalFullStory.innerHTML = ''; // Clear previous content

    // If fullStory is missing, default to an empty string
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
    // The 'modal-hidden' class with transition delay will handle actual hiding
    // Alternatively, you could add it back after transition ends if needed, but CSS handles it.
}

// Add event listeners for closing the modal
if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeStoryModal);
}

if (storyModal) {
    // Close modal if user clicks on the dark overlay background
    storyModal.addEventListener('click', function(event) {
        if (event.target === storyModal) { // Check if the click was directly on the overlay
            closeStoryModal();
        }
    });
    // Close modal if user presses the Escape key
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && storyModal.classList.contains('modal-visible')) {
            closeStoryModal();
        }
    });
}
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
    console.log('Clicked story in list:', story.title);

    // Open the modal with the story details
    openStoryModal(story);

    // Pan map and open popup (optional, as modal now shows full story)
    if (map && story.lat && story.lng) {
        map.setView([story.lat, story.lng], 18);
        const marker = storyMarkers[story.id]; // Assuming storyMarkers is populated
        if (marker) {
            // marker.openPopup(); // You might not need this if modal is primary focus
        }
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
        if (toggleButton) toggleButton.textContent = 'Open up the Horrors of the World';

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
            alert("Story location outside PH. To post, 'View World Map' or select location in PH.");
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

    const togglePostFormButton = document.getElementById('toggle-post-form-button');
    const formColumn = document.getElementById('form-column'); // Get the form column div

    if (togglePostFormButton && formColumn) {
        togglePostFormButton.addEventListener('click', () => {
            const isHidden = formColumn.classList.contains('hidden-form');
            if (isHidden) {
                formColumn.classList.remove('hidden-form');
                // Optional: If using transitions that need display:flex
                // formColumn.style.display = 'flex'; // Ensure it's flex if hidden by display:none
                togglePostFormButton.textContent = 'Hide Submission Form';
                // Optional: Add class to main-content-area if you need to adjust flex for map-column
                // document.querySelector('.main-content-area').classList.add('form-visible');
            } else {
                formColumn.classList.add('hidden-form');
                // Optional: If using transitions that need display:none and then flex
                // formColumn.style.display = 'none';
                togglePostFormButton.textContent = 'Post New Story';
                // Optional: Remove class from main-content-area
                // document.querySelector('.main-content-area').classList.remove('form-visible');
            }
        });
    }

   


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