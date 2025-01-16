// For floating reviews
// const reviews = [
//     { user: "Alice", stars: 5, comment: "Absolutely love it! Best product ever.", avatar: "https://i.pravatar.cc/100?img=1" },
//     { user: "Bob", stars: 4, comment: "Great experience, minor improvements needed.", avatar: "https://i.pravatar.cc/100?img=2" },
//     { user: "Charlie", stars: 5, comment: "Exceeded my expectations. Highly recommended!", avatar: "https://i.pravatar.cc/100?img=3" },
//     { user: "Diana", stars: 3, comment: "Good, but there's room for improvement.", avatar: "https://i.pravatar.cc/100?img=4" },
//     { user: "Ethan", stars: 5, comment: "Outstanding service and quality.", avatar: "https://i.pravatar.cc/100?img=5" },
//     { user: "Fiona", stars: 4, comment: "Very satisfied with my purchase.", avatar: "https://i.pravatar.cc/100?img=6" },
//     { user: "George", stars: 4, comment: "Solid product, great value for money.", avatar: "https://i.pravatar.cc/100?img=7" },
//     { user: "George", stars: 4, comment: "Solid product, great value for money.", avatar: "https://i.pravatar.cc/100?img=7" },
//     { user: "George", stars: 4, comment: "Solid product, great value for money.", avatar: "https://i.pravatar.cc/100?img=7" },
//     { user: "George", stars: 4, comment: "Solid product, great value for money.", avatar: "https://i.pravatar.cc/100?img=7" },
// ];
//
// function createReviewElement(review) {
//     const reviewElement = document.createElement('div');
//     reviewElement.classList.add('review');
//     reviewElement.innerHTML = `
//                 <div class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
//                 <div class="user">
//                     <img src="${review.avatar}" alt="${review.user}" class="user-avatar">
//                     ${review.user}
//                 </div>
//                 <div class="comment">${review.comment}</div>
//             `;
//     return reviewElement;
// }
//
// function setRandomPosition(element) {
//     const container = document.getElementById('reviewsContainer');
//     const maxX = container.clientWidth - element.clientWidth;
//     const maxY = container.clientHeight - element.clientHeight;
//
//     element.style.left = Math.random() * maxX + 'px';
//     element.style.top = Math.random() * maxY + 'px';
// }
//
// function animateReview(element) {
//     const animationDuration = 15000 + Math.random() * 10000; // 15-25 seconds
//     const keyframes = [
//         { transform: 'translate(0, 0)' },
//         { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
//         { transform: 'translate(0, 0)' }
//     ];
//
//     element.animate(keyframes, {
//         duration: animationDuration,
//         iterations: Infinity,
//         easing: 'ease-in-out'
//     });
// }
//
// function makeDraggable(element) {
//     let isDragging = false;
//     let startX, startY;
//
//     element.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         startX = e.clientX - element.offsetLeft;
//         startY = e.clientY - element.offsetTop;
//         element.style.zIndex = 1000;
//     });
//
//     document.addEventListener('mousemove', (e) => {
//         if (isDragging) {
//             const container = document.getElementById('reviewsContainer');
//             const maxX = container.clientWidth - element.clientWidth;
//             const maxY = container.clientHeight - element.clientHeight;
//
//             let newX = e.clientX - startX;
//             let newY = e.clientY - startY;
//
//             newX = Math.max(0, Math.min(newX, maxX));
//             newY = Math.max(0, Math.min(newY, maxY));
//
//             element.style.left = newX + 'px';
//             element.style.top = newY + 'px';
//         }
//     });
//
//     document.addEventListener('mouseup', () => {
//         isDragging = false;
//         element.style.zIndex = '';
//     });
// }
//
// function initReviews() {
//     const container = document.getElementById('reviewsContainer');
//
//     reviews.forEach(review => {
//         const reviewElement = createReviewElement(review);
//         container.appendChild(reviewElement);
//         setRandomPosition(reviewElement);
//         animateReview(reviewElement);
//         makeDraggable(reviewElement);
//     });
// }
//
// window.addEventListener('load', initReviews);


// const reviews = [
//     { user: "Alice", stars: 5, comment: "Absolutely love it! Best product ever.", avatar: "https://i.pravatar.cc/100?img=1" },
//     { user: "Bob", stars: 4, comment: "Great experience, minor improvements needed.", avatar: "https://i.pravatar.cc/100?img=2" },
//     { user: "Charlie", stars: 5, comment: "Exceeded my expectations. Highly recommended!", avatar: "https://i.pravatar.cc/100?img=3" },
//     { user: "Diana", stars: 3, comment: "Good, but there's room for improvement.", avatar: "https://i.pravatar.cc/100?img=4" },
//     { user: "Ethan", stars: 5, comment: "Outstanding service and quality.", avatar: "https://i.pravatar.cc/100?img=5" },
//     { user: "Fiona", stars: 4, comment: "Very satisfied with my purchase.", avatar: "https://i.pravatar.cc/100?img=6" },
//     { user: "George", stars: 4, comment: "Solid product, great value for money.", avatar: "https://i.pravatar.cc/100?img=7" }
// ];
//
// function createReviewElement(review) {
//     const reviewElement = document.createElement('div');
//     reviewElement.classList.add('review');
//     reviewElement.innerHTML = `
//                 <div class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
//                 <div class="user">
//
//                     ${review.user}
//                 </div>
//                 <div class="comment">${review.comment}</div>
//             `;
//     return reviewElement;
// }
//
// function setRandomPosition(element) {
//     const container = document.getElementById('reviewsContainer');
//     const maxX = container.clientWidth - element.clientWidth;
//     const maxY = container.clientHeight - element.clientHeight;
//
//     element.style.left = Math.random() * maxX + 'px';
//     element.style.top = Math.random() * maxY + 'px';
// }
//
// function animateReview(element) {
//     const animationDuration = 15000 + Math.random() * 10000; // 15-25 seconds
//     const keyframes = [
//         { transform: 'translate(0, 0)' },
//         { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
//         { transform: 'translate(0, 0)' }
//     ];
//
//     element.animate(keyframes, {
//         duration: animationDuration,
//         iterations: Infinity,
//         easing: 'ease-in-out'
//     });
// }
//
// function makeDraggable(element) {
//     let isDragging = false;
//     let startX, startY;
//
//     element.addEventListener('mousedown', (e) => {
//         isDragging = true;
//         startX = e.clientX - element.offsetLeft;
//         startY = e.clientY - element.offsetTop;
//         element.style.zIndex = 1000;
//     });
//
//     document.addEventListener('mousemove', (e) => {
//         if (isDragging) {
//             const container = document.getElementById('reviewsContainer');
//             const maxX = container.clientWidth - element.clientWidth;
//             const maxY = container.clientHeight - element.clientHeight;
//
//             let newX = e.clientX - startX;
//             let newY = e.clientY - startY;
//
//             newX = Math.max(0, Math.min(newX, maxX));
//             newY = Math.max(0, Math.min(newY, maxY));
//
//             element.style.left = newX + 'px';
//             element.style.top = newY + 'px';
//         }
//     });
//
//     document.addEventListener('mouseup', () => {
//         isDragging = false;
//         element.style.zIndex = '';
//     });
// }
//
// function initReviews() {
//     const container = document.getElementById('reviewsContainer');
//
//     reviews.forEach(review => {
//         const reviewElement = createReviewElement(review);
//         container.appendChild(reviewElement);
//         setRandomPosition(reviewElement);
//         animateReview(reviewElement);
//         makeDraggable(reviewElement);
//     });
// }
//
// function addNewReview(event) {
//     event.preventDefault();
//     const userName = document.getElementById('userName').value;
//     const userStars = parseInt(document.getElementById('userStars').value);
//     const userComment = document.getElementById('userComment').value;
//
//     const newReview = {
//         user: userName,
//         stars: userStars,
//         comment: userComment,
//         avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`
//     };
//
//     const reviewElement = createReviewElement(newReview);
//     const container = document.getElementById('reviewsContainer');
//     container.appendChild(reviewElement);
//     setRandomPosition(reviewElement);
//     animateReview(reviewElement);
//     makeDraggable(reviewElement);
//
//     // Reset form
//     event.target.reset();
// }
//
// window.addEventListener('load', () => {
//     initReviews();
//     document.getElementById('addReviewForm').addEventListener('submit', addNewReview);
// });


// Updated version
const reviews = [
    { user: "Chamara", stars: 5, comment: "Best site for movie downloads! Fast, safe, and reliable every time.", avatar: "https://i.pravatar.cc/100?img=1" },
    { user: "Bob", stars: 3, comment: "Great experience, minor improvements needed.", avatar: "https://i.pravatar.cc/100?img=2" },
    { user: "Charlie", stars: 5, comment: "Amazing collection! Found every movie I searched for instantly!", avatar: "https://i.pravatar.cc/100?img=3" },
    { user: "Diana", stars: 3, comment: "Good, but there's room for improvement.", avatar: "https://i.pravatar.cc/100?img=4" },
    { user: "Kavishka", stars: 5, comment: "User-friendly interface and top-quality downloads. Highly recommend!", avatar: "https://i.pravatar.cc/100?img=5" },
    { user: "Mark", stars: 4, comment: "Quick downloads and accurate reviews. My go-to movie Night!", avatar: "https://i.pravatar.cc/100?img=6" },
    { user: "Akila", stars: 4, comment: "Great reviews and seamless downloads. Exceeded my expectations!", avatar: "https://i.pravatar.cc/100?img=6" },
    { user: "Sachin", stars: 4, comment: "Perfect platform for movie lovers! Easy, fast, and hassle-free.", avatar: "https://i.pravatar.cc/100?img=7" }
];

function createReviewElement(review) {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <div class="stars">${'★'.repeat(review.stars)}${'☆'.repeat(5 - review.stars)}</div>
        <div class="user">${review.user}</div>
        <div class="comment">${review.comment}</div>
    `;
    return reviewElement;
}

function setRandomPosition(element) {
    const container = document.getElementById('reviewsContainer');
    const maxX = container.clientWidth - element.clientWidth;
    const maxY = container.clientHeight - element.clientHeight;

    element.style.left = Math.random() * maxX + 'px';
    element.style.top = Math.random() * maxY + 'px';
}

function animateReview(element) {
    const animationDuration = 15000 + Math.random() * 10000; // 15-25 seconds
    const keyframes = [
        { transform: 'translate(0, 0)' },
        { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
        { transform: 'translate(0, 0)' }
    ];

    element.animate(keyframes, {
        duration: animationDuration,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

function makeDraggable(element) {
    let isDragging = false;
    let startX, startY;

    // Mouse events
    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - element.offsetLeft;
        startY = e.clientY - element.offsetTop;
        element.style.zIndex = 1000;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            moveElement(e.clientX, e.clientY);
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        element.style.zIndex = '';
    });

    // Touch events
    element.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX - element.offsetLeft;
        startY = touch.clientY - element.offsetTop;
        element.style.zIndex = 1000;
    });

    document.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const touch = e.touches[0];
            moveElement(touch.clientX, touch.clientY);
        }
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
        element.style.zIndex = '';
    });

    function moveElement(clientX, clientY) {
        const container = document.getElementById('reviewsContainer');
        const maxX = container.clientWidth - element.clientWidth;
        const maxY = container.clientHeight - element.clientHeight;

        let newX = clientX - startX;
        let newY = clientY - startY;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        element.style.left = newX + 'px';
        element.style.top = newY + 'px';
    }
}

function initReviews() {
    const container = document.getElementById('reviewsContainer');

    reviews.forEach(review => {
        const reviewElement = createReviewElement(review);
        container.appendChild(reviewElement);
        setRandomPosition(reviewElement);
        animateReview(reviewElement);
        makeDraggable(reviewElement);
    });
}

function addNewReview(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userStars = parseInt(document.getElementById('userStars').value);
    const userComment = document.getElementById('userComment').value;

    const newReview = {
        user: userName,
        stars: userStars,
        comment: userComment,
        avatar: `https://i.pravatar.cc/100?img=${Math.floor(Math.random() * 70) + 1}`
    };

    const reviewElement = createReviewElement(newReview);
    const container = document.getElementById('reviewsContainer');
    container.appendChild(reviewElement);
    setRandomPosition(reviewElement);
    animateReview(reviewElement);
    makeDraggable(reviewElement);

    // Hide the form after adding a review
    document.getElementById('main-review-form').style.display = 'none';

    // Reset form
    event.target.reset();
}

window.addEventListener('load', () => {
    initReviews();
    document.getElementById('addReviewForm').addEventListener('submit', addNewReview);
});
