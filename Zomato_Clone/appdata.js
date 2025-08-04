const restaurants = [
    {
      "image": "third",
      "name": "Fusion Fiesta",
      "rating": 2,
      "food_type": "Japanese",
      "Price_for_two": 525,
      "location": "Khan Market",
      "Distance_from_Customer_house": "10.6",
      "offers": 25,
      "alcohol": false,
      "Restaurant_open_time": 6,
      "Restaurant_close_time": 18
    },
    {
      "image": "tenth",
      "name": "Street Eats",
      "rating": 2,
      "food_type": "Italian",
      "Price_for_two": 1954,
      "location": "Saket",
      "Distance_from_Customer_house": "5.6",
      "offers": 28,
      "alcohol": false,
      "Restaurant_open_time": 11,
      "Restaurant_close_time": 23
    },
    {
      "image": "First",
      "name": "The Gourmet Haven",
      "rating": 4,
      "food_type": "American",
      "Price_for_two": 268,
      "location": "Dwarka",
      "Distance_from_Customer_house": "8.8",
      "offers": 22,
      "alcohol": false,
      "Restaurant_open_time": 3,
      "Restaurant_close_time": 15
    },
    {
      "image": "seventh",
      "name": "The Gourmet Haven",
      "rating": 4,
      "food_type": "American",
      "Price_for_two": 1843,
      "location": "Saket",
      "Distance_from_Customer_house": "2.1",
      "offers": 20,
      "alcohol": true,
      "Restaurant_open_time": 6,
      "Restaurant_close_time": 18
    },
    {
      "image": "nine",
      "name": "Sushi Spot",
      "rating": 1,
      "food_type": "Thai",
      "Price_for_two": 1446,
      "location": "Chandni Chowk",
      "Distance_from_Customer_house": "4.0",
      "offers": 12,
      "alcohol": false,
      "Restaurant_open_time": 15,
      "Restaurant_close_time": 3
    },
    {
      "image": "seventh",
      "name": "Savory Street",
      "rating": 4,
      "food_type": "Thai",
      "Price_for_two": 675,
      "location": "Khan Market",
      "Distance_from_Customer_house": "3.8",
      "offers": 12,
      "alcohol": false,
      "Restaurant_open_time": 4,
      "Restaurant_close_time": 16
    },
    {
      "image": "First",
      "name": "Street Eats",
      "rating": 5,
      "food_type": "American",
      "Price_for_two": 2284,
      "location": "Chandni Chowk",
      "Distance_from_Customer_house": "2.0",
      "offers": 20,
      "alcohol": false,
      "Restaurant_open_time": 13,
      "Restaurant_close_time": 1
    },
    {
      "image": "First",
      "name": "Sunset Grill",
      "rating": 3,
      "food_type": "Thai",
      "Price_for_two": 665,
      "location": "Saket",
      "Distance_from_Customer_house": "5.2",
      "offers": 28,
      "alcohol": false,
      "Restaurant_open_time": 7,
      "Restaurant_close_time": 19
    },
    {
      "image": "fifth",
      "name": "Farm to Table",
      "rating": 4,
      "food_type": "Italian",
      "Price_for_two": 667,
      "location": "Connaught Place",
      "Distance_from_Customer_house": "8.3",
      "offers": 27,
      "alcohol": false,
      "Restaurant_open_time": 16,
      "Restaurant_close_time": 4
    },
    {
      "image": "second",
      "name": "The Rustic Table",
      "rating": 5,
      "food_type": "Korean",
      "Price_for_two": 518,
      "location": "Rajouri Garden",
      "Distance_from_Customer_house": "4.4",
      "offers": 11,
      "alcohol": true,
      "Restaurant_open_time": 13,
      "Restaurant_close_time": 1
    },
    {
      "image": "fifth",
      "name": "Fusion Fiesta",
      "rating": 5,
      "food_type": "Indian",
      "Price_for_two": 2282,
      "location": "Hauz Khas Village",
      "Distance_from_Customer_house": "7.8",
      "offers": 19,
      "alcohol": false,
      "Restaurant_open_time": 15,
      "Restaurant_close_time": 3
    },
    {
      "image": "seventh",
      "name": "Farm to Table",
      "rating": 2,
      "food_type": "Chinese",
      "Price_for_two": 1119,
      "location": "Saket",
      "Distance_from_Customer_house": "5.5",
      "offers": 10,
      "alcohol": false,
      "Restaurant_open_time": 1,
      "Restaurant_close_time": 13
    },
    {
      "image": "nine",
      "name": "Mediterranean Magic",
      "rating": 4,
      "food_type": "Chinese",
      "Price_for_two": 1464,
      "location": "Connaught Place",
      "Distance_from_Customer_house": "7.8",
      "offers": 5,
      "alcohol": false,
      "Restaurant_open_time": 22,
      "Restaurant_close_time": 10
    },
    {
      "image": "nine",
      "name": "Spice Symphony",
      "rating": 2,
      "food_type": "Japanese",
      "Price_for_two": 1001,
      "location": "Connaught Place",
      "Distance_from_Customer_house": "1.2",
      "offers": 13,
      "alcohol": false,
      "Restaurant_open_time": 21,
      "Restaurant_close_time": 9
    },
    {
      "image": "fifth",
      "name": "Savory Street",
      "rating": 5,
      "food_type": "Japanese",
      "Price_for_two": 959,
      "location": "Saket",
      "Distance_from_Customer_house": "1.5",
      "offers": 4,
      "alcohol": false,
      "Restaurant_open_time": 5,
      "Restaurant_close_time": 17
    },
    {
      "image": "tenth",
      "name": "Spice Symphony",
      "rating": 1,
      "food_type": "Chinese",
      "Price_for_two": 618,
      "location": "Vasant Kunj",
      "Distance_from_Customer_house": "1.1",
      "offers": 5,
      "alcohol": false,
      "Restaurant_open_time": 19,
      "Restaurant_close_time": 7
    },
    {
      "image": "fifth",
      "name": "Sushi Spot",
      "rating": 3,
      "food_type": "American",
      "Price_for_two": 1609,
      "location": "Rajouri Garden",
      "Distance_from_Customer_house": "9.8",
      "offers": 24,
      "alcohol": false,
      "Restaurant_open_time": 16,
      "Restaurant_close_time": 4
    },
    {
      "image": "second",
      "name": "Spice Symphony",
      "rating": 5,
      "food_type": "Korean",
      "Price_for_two": 2387,
      "location": "Lajpat Nagar",
      "Distance_from_Customer_house": "8.8",
      "offers": 29,
      "alcohol": false,
      "Restaurant_open_time": 9,
      "Restaurant_close_time": 21
    },
    {
      "image": "nine",
      "name": "Fusion Fiesta",
      "rating": 4,
      "food_type": "Indian",
      "Price_for_two": 2003,
      "location": "Connaught Place",
      "Distance_from_Customer_house": "1.2",
      "offers": 0,
      "alcohol": true,
      "Restaurant_open_time": 3,
      "Restaurant_close_time": 15
    },
    {
      "image": "fifth",
      "name": "The Chocolate Box",
      "rating": 3,
      "food_type": "Mexican",
      "Price_for_two": 298,
      "location": "Karol Bagh",
      "Distance_from_Customer_house": "6.6",
      "offers": 20,
      "alcohol": true,
      "Restaurant_open_time": 22,
      "Restaurant_close_time": 10
    }
];

// State management
let currentFilter = 'all';
let currentSort = 'default';
let filteredRestaurants = [...restaurants];

// Utility functions
function getCurrentTime() {
    return new Date().getHours();
}

function isRestaurantOpen(restaurant) {
    const currentHour = getCurrentTime();
    const openTime = restaurant.Restaurant_open_time;
    const closeTime = restaurant.Restaurant_close_time;
    
    if (openTime < closeTime) {
        return currentHour >= openTime && currentHour < closeTime;
    } else {
        return currentHour >= openTime || currentHour < closeTime;
    }
}

function formatPrice(price) {
    return `₹${price.toLocaleString()} for two`;
}

function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const isOpen = isRestaurantOpen(restaurant);
    
    card.innerHTML = `
        <img src="Images/${restaurant.image}.jpeg" alt="${restaurant.name}" loading="lazy">
        <div class="card-content">
            <div class="card-header">
                <h3>${restaurant.name}</h3>
                <div class="rating rating-${restaurant.rating}">
                    <i class="fas fa-star"></i>
                    ${restaurant.rating}
                </div>
            </div>
            <div class="card-footer">
                <span class="food-type">${restaurant.food_type}</span>
                <span class="price">${formatPrice(restaurant.Price_for_two)}</span>
            </div>
            <div class="card-location">
                <span class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${restaurant.location}
                </span>
                <span class="distance">
                    <i class="fas fa-route"></i>
                    ${restaurant.Distance_from_Customer_house} km
                </span>
            </div>
            <div class="card-badges">
                ${restaurant.offers > 0 ? `<span class="badge offer">${restaurant.offers}% OFF</span>` : ''}
                ${restaurant.alcohol ? '<span class="badge alcohol">Serves Alcohol</span>' : ''}
                <span class="badge ${isOpen ? 'open' : 'closed'}">${isOpen ? 'Open Now' : 'Closed'}</span>
            </div>
        </div>
    `;
    
    return card;
}

function renderRestaurants(restaurantList) {
    const root = document.getElementById('root');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    // Clear previous results
    root.innerHTML = '';
    
    if (restaurantList.length === 0) {
        noResults.classList.remove('hidden');
        resultsCount.textContent = '0 restaurants found';
        return;
    }
    
    noResults.classList.add('hidden');
    
    // Update results count
    resultsCount.textContent = `${restaurantList.length} restaurant${restaurantList.length !== 1 ? 's' : ''} found`;
    
    // Create and append cards
    restaurantList.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        root.appendChild(card);
    });
}

function applyFilters() {
    let filtered = [...restaurants];
    
    // Apply current filter
    switch (currentFilter) {
        case 'offers':
            filtered = filtered.filter(r => r.offers > 0);
            break;
        case 'rating':
            filtered = filtered.filter(r => r.rating >= 4);
            break;
        case 'alcohol':
            filtered = filtered.filter(r => r.alcohol);
            break;
        case 'open':
            filtered = filtered.filter(r => isRestaurantOpen(r));
            break;
        case 'price':
            filtered = filtered.filter(r => r.Price_for_two <= 500);
            break;
        default:
            // 'all' - no additional filtering
            break;
    }
    
    // Apply sorting
    switch (currentSort) {
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'price-low':
            filtered.sort((a, b) => a.Price_for_two - b.Price_for_two);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.Price_for_two - a.Price_for_two);
            break;
        case 'distance':
            filtered.sort((a, b) => parseFloat(a.Distance_from_Customer_house) - parseFloat(b.Distance_from_Customer_house));
            break;
        default:
            // Keep original order
            break;
    }
    
    filteredRestaurants = filtered;
    renderRestaurants(filtered);
    updateResultsTitle();
}

function updateResultsTitle() {
    const resultsTitle = document.getElementById('resultsTitle');
    const titles = {
        'all': 'All Restaurants',
        'offers': 'Great Offers',
        'rating': 'Top Rated (4.0+)',
        'alcohol': 'Serves Alcohol',
        'open': 'Open Now',
        'price': 'Budget Friendly (Under ₹500)'
    };
    
    resultsTitle.textContent = titles[currentFilter] || 'All Restaurants';
}

function updateActiveFilter(activeFilterId) {
    // Remove active class from all filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    
    // Add active class to current filter
    document.getElementById(activeFilterId).classList.add('active');
}

function showLoading() {
    document.getElementById('loadingSpinner').classList.remove('hidden');
    document.getElementById('root').style.opacity = '0.5';
}

function hideLoading() {
    document.getElementById('loadingSpinner').classList.add('hidden');
    document.getElementById('root').style.opacity = '1';
}

function searchRestaurants(query) {
    if (!query.trim()) {
        return filteredRestaurants;
    }
    
    const searchTerm = query.toLowerCase();
    return filteredRestaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.food_type.toLowerCase().includes(searchTerm) ||
        restaurant.location.toLowerCase().includes(searchTerm)
    );
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initial render
    applyFilters();
    
    // Filter event listeners
    document.getElementById('allRestaurants').addEventListener('click', function() {
        currentFilter = 'all';
        updateActiveFilter('allRestaurants');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    document.getElementById('offersFilter').addEventListener('click', function() {
        currentFilter = 'offers';
        updateActiveFilter('offersFilter');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    document.getElementById('ratingFilter').addEventListener('click', function() {
        currentFilter = 'rating';
        updateActiveFilter('ratingFilter');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    document.getElementById('alcoholFilter').addEventListener('click', function() {
        currentFilter = 'alcohol';
        updateActiveFilter('alcoholFilter');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    document.getElementById('openFilter').addEventListener('click', function() {
        currentFilter = 'open';
        updateActiveFilter('openFilter');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    document.getElementById('priceFilter').addEventListener('click', function() {
        currentFilter = 'price';
        updateActiveFilter('priceFilter');
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    // Sort event listener
    document.getElementById('sortSelect').addEventListener('change', function(e) {
        currentSort = e.target.value;
        showLoading();
        setTimeout(() => {
            applyFilters();
            hideLoading();
        }, 300);
    });
    
    // Search event listener
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchResults = searchRestaurants(e.target.value);
        renderRestaurants(searchResults);
    });
    
    // Add some smooth scrolling for better UX
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelector('.results-section').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});