
//For get movie details
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '83d5334d'; // Replace with your OMDB API key
    const movieTitles = [
        'The Boys',
        'Reacher ',
        'Breaking Bad',
        'Fallout',
        'The Office',
        'Baby Reindeer',
        'The Brothers Sun',
        'Young Sheldon',
        'Secret Level',
        'Industry'
    ];

    const cards = document.querySelectorAll('.card-series'); // Select all pre-made cards

    async function fetchMovies() {
        try {
            for (let i = 0; i < movieTitles.length; i++) {
                if (i >= cards.length) {
                    console.warn('Not enough cards in the HTML for all movies.');
                    break;
                }

                const movieTitle = movieTitles[i];
                const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`);
                const data = await response.json();

                if (data.Response === 'True') {
                    populateCard(cards[i], data);
                } else {
                    console.error(`Failed to fetch details for: ${movieTitle}`);
                }
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    }

    function populateCard(card, movie) {
        const image = card.querySelector('.card-image-series img');
        const title = card.querySelector('.card-details-series h3');
        const year = card.querySelector('.card-details-series .year-series');
        const runtime = card.querySelector('.card-details-series .runtime-series');
        const genre = card.querySelector('.card-details-series .genre-series');

        image.src = movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg';
        image.alt = movie.Title || 'Movie Poster';
        title.textContent = movie.Title || '';
        year.textContent = movie.Year || '';
        runtime.textContent = movie.Runtime || '';
        genre.textContent = movie.Genre || '';
    }

    fetchMovies();
});



//For card slider
document.addEventListener('DOMContentLoaded', () => {
    const cardScroller = document.querySelector('.card-scroller-series');
    const cardContainer = document.querySelector('.card-container-series');
    const cards = document.querySelectorAll('.card-series');

    const leftButton = document.querySelector('.scroll-button2.left');
    const rightButton = document.querySelector('.scroll-button2.right');

    let isDown = false;
    let startX;
    let scrollLeft;

    let currentCardIndex = 0;
    const cardWidth = 270;
    const visibleCards = Math.floor(cardScroller.offsetWidth / cardWidth);

    // Prevent default touch behavior
    cardScroller.addEventListener('touchstart', (e) => {
        e.preventDefault();
    }, { passive: false });

    cardScroller.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });


    // Disable keyboard scrolling
    cardScroller.addEventListener('keydown', (e) => {
        const keysToPrevent = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'];
        if (keysToPrevent.includes(e.key)) {
            e.preventDefault(); // Stop the browser's default scroll behavior
            e.stopPropagation(); // Stop the event from reaching other elements or listeners
        }
    });

    // Grab to scroll functionality
    // cardScroller.addEventListener('mousedown', (e) => {
    //     isDown = true;
    //     cardScroller.style.cursor = 'grabbing';
    //     startX = e.pageX - cardScroller.offsetLeft;
    //     scrollLeft = cardScroller.scrollLeft;
    // });

    cardScroller.addEventListener('mouseleave', () => {
        isDown = false;
        cardScroller.style.cursor = 'pointer';
    });

    cardScroller.addEventListener('mouseup', () => {
        isDown = false;
        cardScroller.style.cursor = 'pointer';
    });

    cardScroller.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - cardScroller.offsetLeft;
        const walk = (x - startX) * 2;
        cardScroller.scrollTo({
            left: scrollLeft - walk,
            behavior: 'auto'
        });
    });


    // Add button click handlers
    function scroll(direction) {
        currentCardIndex += direction;
        currentCardIndex = Math.max(0, Math.min(currentCardIndex, cards.length - visibleCards));

        cardContainer.style.transition = 'transform 0.3s ease-out';
        cardContainer.style.transform = `translateX(-${currentCardIndex * cardWidth}px)`;

        updateButtonVisibility();
    }

    function updateButtonVisibility() {
        leftButton.style.display = currentCardIndex === 0 ? 'none' : 'flex';
        rightButton.style.display =
            currentCardIndex >= cards.length - visibleCards ? 'none' : 'flex';
    }

    leftButton.addEventListener('click', () => scroll(-1));
    rightButton.addEventListener('click', () => scroll(1));

    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        scroll(-1);
    });

    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        scroll(1);
    });

    // Initial visibility check
    updateButtonVisibility();


    // Auto-scrolling animation
    // function animateCards() {
    //     cards.forEach((card, index) => {
    //         setTimeout(() => {
    //             card.classList.add('visible');
    //             cardScroller.scrollTo({
    //                 left: index * 220,
    //                 behavior: 'smooth'
    //             });
    //         }, index * 500);
    //     });
    // }

    function animateCards() {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100);
        });
        updateButtonVisibility();
    }

    //     // Use IntersectionObserver to trigger animation only when cardScroller is in view
    //     const observer = new IntersectionObserver(
    //         (entries, observer) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     // Section is visible, trigger animation
    //                     animateCards();
    //                     observer.unobserve(cardScroller); // Stop observing once animation is triggered
    //                 }
    //             });
    //         },
    //         { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    //     );
    //
    //     // Start observing the cardScroller section
    //     observer.observe(cardScroller);
    // });


    // Prevent global keyboard scrolling
    document.addEventListener('keydown', (e) => {
        const keysToPrevent = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'];
        if (keysToPrevent.includes(e.key) && document.activeElement === cardScroller) {
            e.preventDefault(); // Ensure the browser doesn't scroll the card container
        }
    });

    cardScroller.addEventListener('keydown', (e) => {
        const keysToPrevent = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End'];
        if (keysToPrevent.includes(e.key)) {
            e.preventDefault(); // Stops default scroll behavior
            e.stopPropagation(); // Stops the event from propagating
        }
    });

    // Initial animation
    animateCards();
    animateCards();
    updateButtonVisibility();

    //Accessibility: Enable keyboard navigation
    // cards.forEach(card => {
    //     card.setAttribute('tabindex', '0');
    //     card.addEventListener('keydown', (e) => {
    //         if (e.key === 'ArrowRight') {
    //             e.preventDefault();
    //             cardScroller.scrollTo({
    //                 left: cardScroller.scrollLeft + 220,
    //                 behavior: 'smooth'
    //             });
    //         } else if (e.key === 'ArrowLeft') {
    //             e.preventDefault();
    //             cardScroller.scrollTo({
    //                 left: cardScroller.scrollLeft - 220,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
});
