
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css"; // Import Locomotive's styles
//
// // Initialize Locomotive Scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,        // Enable smooth scrolling
//     multiplier: 1.2,     // Adjust scroll speed
//     class: "is-inview",  // Add this class when elements enter the viewport
// });
//
// // Add scroll event listener for debugging or additional actions
// scroll.on("scroll", (instance) => {
//     console.log("Scroll Position:", instance.scroll.y);
// });


// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 0) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });



// For Locomotive scroll
document.addEventListener('DOMContentLoaded', function() {
    let lastScroll = 0;

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
        reloadOnContextChange: true
    });

    // Handle navbar scroll behavior
    scroll.on('scroll', (args) => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = args.scroll.y;

        // Add scrolled class for background effect
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Handle scroll direction
        if (currentScroll < lastScroll) {
            // Scrolling up
            navbar.classList.remove('hidden');
        } else {
            // Scrolling down
            navbar.classList.add('hidden');
        }

        lastScroll = currentScroll;
    });

    // Update scroll on page load
    window.addEventListener('load', () => {
        scroll.update();
    });

    // Update on dynamic content changes
    const observer = new MutationObserver(() => {
        scroll.update();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
