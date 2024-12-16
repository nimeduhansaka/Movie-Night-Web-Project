const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const navbar = document.querySelector('.navbar');

// Function to toggle the sidebar
function toggleSidebar() {
    const isOpen = sidebar.style.left === '0px'; // Check if open

    if (isOpen) {
        sidebar.style.left = '-400px'; // Close sidebar
        toggleBtn.classList.remove('open'); // Remove animation
    } else {
        sidebar.style.left = '0px'; // Open sidebar
        toggleBtn.classList.add('open'); // Add animation
    }
}

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
    const isSidebarOpen = sidebar.style.left === '0px'; // Check if sidebar is open
    const isClickInsideSidebar = sidebar.contains(event.target); // Check if click is inside sidebar
    const isClickOnToggleButton = toggleBtn.contains(event.target); // Check if click is on toggle button

    if (isSidebarOpen && !isClickInsideSidebar && !isClickOnToggleButton) {
        // Close sidebar
        sidebar.style.left = '-400px';
        toggleBtn.classList.remove('open');
    }
});

// For color changes
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Change 50 to the scroll position at which you want the color to change
        navbar.classList.add('scrolled'); // Add the 'scrolled' class
    } else {
        navbar.classList.remove('scrolled'); // Remove the 'scrolled' class
    }
});



// For ratings
const apiKey = '83d5334d';

// Array of movie titles
const movieTitles = ['Gladiator II', 'Moana 2', 'Silo', 'The Substance', 'Interstellar', 'Landman', 'The Penguin'];

// Function to fetch and display data for six specific movies
function fetchAndShowRatings() {
    movieTitles.forEach((title, index) => {
        // Target each movie's respective div by ID
        const divId = `movie-${index + 1}`;
        const movieDiv = document.getElementById(divId);

        // Fetch movie data using OMDb API
        fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                // If the movie is found, display its data
                if (data.Response === 'True') {
                    const imdbRating = data.Ratings.find(rating => rating.Source === 'Internet Movie Database')?.Value || 'N/A';
                    const rtRating = data.Ratings.find(rating => rating.Source === 'Rotten Tomatoes')?.Value || 'N/A';

                    // Add movie details and ratings to the division
                    movieDiv.innerHTML = `
                        <h3>${data.Title}</h3> <br>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb">
                            IMDb: ${imdbRating}
                        </div> <br>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg" width="14" height="24" alt="Rotten Tomatoes">
                            Rotten Tomatoes: ${rtRating}
                        </div>
                    `;
                } else {
                    // If movie not found, show an error message
                    movieDiv.innerHTML = `<p>Movie "${title}" not found.</p>`;
                }
            })
            .catch(error => {
                console.error('Error fetching movie data:', error);
                movieDiv.innerHTML = `<p>Error loading data for "${title}".</p>`;
            });
    });
}

// Call the function to populate the movie divs
fetchAndShowRatings();