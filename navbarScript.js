
//For responsive sidebar
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
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) { // Change 50 to the scroll position at which you want the color to change
//         navbar.classList.add('scrolled'); // Add the 'scrolled' class
//     } else {
//         navbar.classList.remove('scrolled'); // Remove the 'scrolled' class
//     }
// });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
//
// document.addEventListener('DOMContentLoaded', function() {
//     let lastScroll = 0;
//
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//         multiplier: 1,
//         lerp: 0.1
//     });
//
//     // Handle navbar scroll behavior
//     scroll.on('scroll', (args) => {
//         const navbar = document.querySelector('.navbar');
//         const currentScroll = args.scroll.y;
//
//         // Add scrolled class for background effect
//         if (currentScroll > 50) {
//             navbar.classList.add('scrolled');
//         } else {
//             navbar.classList.remove('scrolled');
//         }
//
//         // Handle scroll direction
//         if (currentScroll < lastScroll) {
//             // Scrolling up
//             navbar.classList.add('scroll-up');
//         } else {
//             // Scrolling down
//             navbar.classList.remove('scroll-up');
//         }
//
//         lastScroll = currentScroll;
//     });
//
//     // Update scroll on page load
//     window.addEventListener('load', () => {
//         scroll.update();
//     });
// });
