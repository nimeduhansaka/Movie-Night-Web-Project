class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel');
        this.slides = Array.from(document.querySelectorAll('.slide'));
        this.prevButton = document.querySelector('.prev');
        this.nextButton = document.querySelector('.next');
        this.autoPlayToggle = document.querySelector('.auto-play-toggle');

        this.currentIndex = 0;
        this.slideWidth = 0;
        this.containerWidth = 0;

        this.isDragging = false;
        this.startPos = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;

        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3 seconds
        this.isAutoPlaying = true;

        this.init();
    }

    init() {
        this.updateDimensions();
        this.updateActiveSlide();

        this.prevButton.addEventListener('click', () => this.prev());
        this.nextButton.addEventListener('click', () => this.next());
        this.autoPlayToggle.addEventListener('click', () => this.toggleAutoPlay());

        this.initDragEvents();

        window.addEventListener('resize', () => {
            this.updateDimensions();
            this.updateActiveSlide();
        });

        this.startAutoPlay();
    }

    // Drag mode removed
    initDragEvents() {

    }

    // dragStart(event) {
    //     this.isDragging = true;
    //     this.startPos = this.getPositionX(event);
    //     this.animationID = requestAnimationFrame(this.animation.bind(this));
    //     this.container.style.transition = 'none';
    //     this.pauseAutoPlay();
    // }
    //
    // drag(event) {
    //     if (this.isDragging) {
    //         const currentPosition = this.getPositionX(event);
    //         this.currentTranslate = this.prevTranslate + currentPosition - this.startPos;
    //     }
    // }
    //
    // dragEnd() {
    //     this.isDragging = false;
    //     cancelAnimationFrame(this.animationID);
    //
    //     const movedBy = this.currentTranslate - this.prevTranslate;
    //
    //     if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
    //         this.currentIndex += 1;
    //     }
    //
    //     if (movedBy > 100 && this.currentIndex > 0) {
    //         this.currentIndex -= 1;
    //     }
    //
    //     this.updateActiveSlide();
    //
    //     if (this.isAutoPlaying) {
    //         this.resetAutoPlay(); // Resume autoplay seamlessly
    //     }
    // }

    animation() {
        this.setSliderPosition();
        if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    setSliderPosition() {
        this.container.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    updateDimensions() {
        this.slideWidth = this.slides[0].offsetWidth;
        this.containerWidth = this.container.offsetWidth;
    }

    updateActiveSlide() {
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === this.currentIndex) {
                slide.classList.add('active');
            }
        });

        const offset = -this.currentIndex * this.slideWidth + (this.containerWidth - this.slideWidth) / 2;
        this.container.style.transition = 'transform 0.3s ease-out';
        this.container.style.transform = `translateX(${offset}px)`;
        this.currentTranslate = offset;
        this.prevTranslate = offset;
    }

    next() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop back to the first slide
        }
        this.updateActiveSlide();
        this.resetAutoPlay(); // Restart autoplay from the next index
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.slides.length - 1; // Loop to the last slide
        }
        this.updateActiveSlide();
        this.resetAutoPlay(); // Restart autoplay from the previous index
    }

    startAutoPlay() {
        this.pauseAutoPlay(); // Clear any existing intervals first
        this.autoPlayInterval = setInterval(() => {
            this.next(); // Go to the next slide on interval
        }, this.autoPlayDelay);
    }

    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval); // Stop the interval
    }

    resetAutoPlay() {
        if (this.isAutoPlaying) {
            this.startAutoPlay();
        }
    }

    toggleAutoPlay() {
        if (this.isAutoPlaying) {
            this.pauseAutoPlay();
            this.autoPlayToggle.textContent = 'Play'; // Update button text
        } else {
            this.startAutoPlay();
            this.autoPlayToggle.textContent = 'Pause'; // Update button text
        }
        this.isAutoPlaying = !this.isAutoPlaying; // Toggle the state
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});