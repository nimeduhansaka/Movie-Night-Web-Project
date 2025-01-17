// For date update
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent = `© ${currentYear} Movie Night. All rights reserved.`;
});



// For pop-up animation
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    if (!footer) {
        console.error('Footer element not found');
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Footer is in view');
                footer.classList.add('visible');
                observer.unobserve(footer);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(footer);
});
