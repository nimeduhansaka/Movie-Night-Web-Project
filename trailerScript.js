// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = '3a62b710766c38367116e99d75392c84';
//     const movieScroller = document.getElementById('movieScroller');
//     let scrollIntervalId;
//
//     async function fetchMovies() {
//         try {
//             const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
//             if (!response.ok) throw new Error('Failed to fetch movies');
//             const data = await response.json();
//             const movies = data.results.slice(0, 10);
//
//             await processMovies(movies);
//             startAutoScroll();
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     }
//
//     async function processMovies(movies) {
//         for (const movie of movies) {
//             try {
//                 const trailer = await fetchTrailer(movie.id);
//                 if (trailer) {
//                     createMovieElement(movie, trailer);
//                 }
//             } catch (error) {
//                 console.error(`Error processing movie ${movie.title}:`, error);
//             }
//         }
//     }
//
//     async function fetchTrailer(movieId) {
//         try {
//             const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`);
//             if (!response.ok) throw new Error('Failed to fetch trailer');
//             const data = await response.json();
//             const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//             return trailer ? trailer.key : null;
//         } catch (error) {
//             console.error('Error fetching trailer:', error);
//             return null;
//         }
//     }
//
//     function createMovieElement(movie, trailer) {
//         const movieElement = document.createElement('div');
//         movieElement.classList.add('movie');
//         movieElement.innerHTML = `
//             <iframe src="https://www.youtube.com/embed/${trailer}?autoplay=0" allowfullscreen></iframe>
//             <h3>${movie.title}</h3>
//         `;
//         movieScroller.appendChild(movieElement);
//
//         movieElement.addEventListener('mouseenter', stopAutoScroll);
//         movieElement.addEventListener('mouseleave', startAutoScroll);
//     }
//
//     function startAutoScroll() {
//         const scrollStep = 1;
//         const scrollInterval = 30;
//
//         scrollIntervalId = setInterval(() => {
//             movieScroller.scrollLeft += scrollStep;
//
//             if (movieScroller.scrollLeft >= movieScroller.scrollWidth - movieScroller.clientWidth) {
//                 movieScroller.scrollLeft = 0;
//             }
//         }, scrollInterval);
//     }
//
//     function stopAutoScroll() {
//         clearInterval(scrollIntervalId);
//     }
//
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, { threshold: 0.1 });
//
//     observer.observe(movieScroller);
//
//     fetchMovies();
//
// });



document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '3a62b710766c38367116e99d75392c84';
    const movieScroller = document.getElementById('movieScroller');
    let scrollIntervalId;
    let isDown = false;
    let startX;
    let scrollLeft;
    let startTouchX;

    async function fetchMovies() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
            if (!response.ok) throw new Error('Failed to fetch movies');
            const data = await response.json();
            const movies = data.results.slice(0, 10);

            await processMovies(movies);
            startAutoScroll();
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    async function processMovies(movies) {
        for (const movie of movies) {
            try {
                const trailer = await fetchTrailer(movie.id);
                if (trailer) {
                    createMovieElement(movie, trailer);
                }
            } catch (error) {
                console.error(`Error processing movie ${movie.title}:`, error);
            }
        }
    }

    async function fetchTrailer(movieId) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`);
            if (!response.ok) throw new Error('Failed to fetch trailer');
            const data = await response.json();
            const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            return trailer ? trailer.key : null;
        } catch (error) {
            console.error('Error fetching trailer:', error);
            return null;
        }
    }

    function createMovieElement(movie, trailer) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${trailer}?autoplay=0" allowfullscreen></iframe>
            <h3>${movie.title}</h3>
        `;
        movieScroller.appendChild(movieElement);

        movieElement.addEventListener('mouseenter', stopAutoScroll);
        movieElement.addEventListener('mouseleave', startAutoScroll);
    }

    function startAutoScroll() {
        const scrollStep = 1;
        const scrollInterval = 30;

        scrollIntervalId = setInterval(() => {
            movieScroller.scrollLeft += scrollStep;

            if (movieScroller.scrollLeft >= movieScroller.scrollWidth - movieScroller.clientWidth) {
                movieScroller.scrollLeft = 0;
            }
        }, scrollInterval);
    }

    function stopAutoScroll() {
        clearInterval(scrollIntervalId);
    }

    // Drag-to-scroll functionality
    movieScroller.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - movieScroller.offsetLeft;
        scrollLeft = movieScroller.scrollLeft;
        movieScroller.classList.add('active');
    });

    movieScroller.addEventListener('mouseleave', () => {
        isDown = false;
        movieScroller.classList.remove('active');
    });

    movieScroller.addEventListener('mouseup', () => {
        isDown = false;
        movieScroller.classList.remove('active');
    });

    movieScroller.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - movieScroller.offsetLeft;
        const walk = (x - startX) * 3; // Multiply by 3 for faster scrolling
        movieScroller.scrollLeft = scrollLeft - walk;
    });

    // Swipe-to-scroll functionality for touch devices
    movieScroller.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].pageX - movieScroller.offsetLeft;
        scrollLeft = movieScroller.scrollLeft;
    });

    movieScroller.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const x = e.touches[0].pageX - movieScroller.offsetLeft;
        const walk = (x - startTouchX) * 3; // Multiply by 3 for faster scrolling
        movieScroller.scrollLeft = scrollLeft - walk;
    });


    // IntersectionObserver for animation
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const movies = document.querySelectorAll('.movie');
                movies.forEach((movie, index) => {
                    setTimeout(() => {
                        movie.classList.add('visible');
                    }, index * 100); // Delay each movie's animation by 100ms
                });
                observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
        });
    };

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the movieScroller is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Start observing the movieScroller
    observer.observe(movieScroller);

    fetchMovies();
});
