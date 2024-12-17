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
