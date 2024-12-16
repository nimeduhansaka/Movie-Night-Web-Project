
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

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