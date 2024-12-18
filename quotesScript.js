
document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.rectangle-container');
    let currentIndex = 0; // Start with the first container
    const intervalTime = 25000; // Time interval between transitions (e.g., 5 seconds)

    // Function to update the active container
    function updateActiveContainer() {
        // Hide all containers
        containers.forEach(container => container.classList.remove('active'));

        // Show the current container
        containers[currentIndex].classList.add('active');

        // Update the index for the next container
        currentIndex = (currentIndex + 1) % containers.length; // Loop back to the start
    }

    // Initialize the first container as active
    updateActiveContainer();

    // Start the interval to cycle through containers
    setInterval(updateActiveContainer, intervalTime);
});