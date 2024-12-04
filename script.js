// Constants
const API_KEY = '98FNjSktCHtH1JNywR35HVwjI6Dfo3TkcPZnmOaA';
const BASE_URL = 'https://api.nasa.gov/planetary/apod';

// DOM Elements
// Grabbing the necessary elements from the HTML to interact with the user interface
const dateInput = document.getElementById('start');
const submitButton = document.querySelector('.btn-primary');
const featuredImage = document.querySelector('.featured-picture img');
const hdButton = document.querySelector('.featured-picture .btn-primary');
const featuredTitle = document.querySelector('.right h2');
const featuredDescription = document.querySelector('.right p');
const favoritesContainer = document.querySelector('.card-group');
const saveButton = document.querySelector('.save-favorite');

// Local Storage Key
const FAVORITES_KEY = 'apodFavorites';

// Retrieving any previously saved favorites or initializing an empty array if none exist
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];

// Function to fetch APOD data for a specific date using the Fetch API
async function fetchAPOD(date) {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}&date=${date}`);
        const data = await response.json(); // Parse the JSON response
        return data;
    } catch (error) {
        console.error('Error fetching APOD data:', error); // Log any errors that occur during the fetch
    }
}

// Update the featured picture section
function updateFeaturedPicture(data) {
    if (data.media_type === 'image') {
        featuredImage.src = data.url; // Set the image source to the APOD URL
        featuredImage.alt = data.title; // Set alt text for accessibility
        hdButton.onclick = () => window.open(data.hdurl, '_blank');
        featuredTitle.textContent = data.title;
        featuredDescription.textContent = data.explanation;
    } else {
        alert('No image available for this date. Please choose available another date.'); // Alert the user if no image is available
    }
}

// Render favorites
// Displays all saved favorites in the favorites container
function renderFavorites() {
    favoritesContainer.innerHTML = ''; // Clear existing content
    favorites.forEach((favorite, index) => {
        const card = document.createElement('div'); // Create a new card for each favorite up to 3
        card.classList.add('card', 'rounded-1'); // Add Bootstrap card styles
        card.innerHTML = `
            <img src="${favorite.url}" class="card-img-top" alt="${favorite.title}">
            <div class="card-body">
                <h6 class="card-title">${favorite.title}</h6>
                <button class="btn btn-danger" data-index="${index}">Remove</button>
            </div>
        `;
        favoritesContainer.appendChild(card);
    });

    // Attach event listeners to the remove buttons
    const removeButtons = document.querySelectorAll('.card .btn-danger');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index'); // Get the index of the favorite to remove
            removeFavorite(index); // Remove the favorite
        });
    });
}

// Save favorite
// Adds the current APOD to the favorites array and updates local storage
function saveFavorite(data) {
    if (!favorites.some(fav => fav.url === data.url)) {
        favorites.push({ title: data.title, url: data.url });
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)); // Update local storage
        renderFavorites();
    } else {
        alert('This image is already in your favorites.'); // Alert if the image is already saved
    }
}

// Remove favorite
// Removes a favorite by index and updates local storage
function removeFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites)); // Update local storage
    renderFavorites();
}

// Event Listeners
// Handle the submission of a date to fetch the APOD
submitButton.addEventListener('click', async () => {
    const date = dateInput.value; // Get the selected date
    if (!date) {
        alert('Please select a date.'); // Alert if no date is selected
        return;
    }

    const data = await fetchAPOD(date);  // Fetch the APOD for the selected date
    if (data) {
        updateFeaturedPicture(data);
        saveButton.onclick = () => saveFavorite(data);
    }
});

// Initial render
renderFavorites(); // Display saved favorites when the page loads


