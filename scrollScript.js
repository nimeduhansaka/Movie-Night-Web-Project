
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-main-container]"),
    smooth: true,
    multiplier: 1.2, // Adjust speed
});

// Add animations or interactions based on scroll
scroll.on("scroll", (instance) => {
    console.log("Scroll Position:", instance.scroll.y);
});
