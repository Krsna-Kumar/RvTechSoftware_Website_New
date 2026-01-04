document.getElementById('toggle-button').addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior

    // Get the navigation links div
    const navLinks = document.getElementById('toggle-box');
    const closebtn = document.getElementById('close-btn');

    // Toggle the 'active' class to slide in the menu
    navLinks.classList.add('active');
    closebtn.style.display = 'block';
});

// Handling the close button functionality
document.getElementById('close-button').addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior

    // Get the navigation links div
    const closebtn = document.getElementById('close-btn');
    const navLinks = document.getElementById('toggle-box');

    // Remove the 'active' class to slide out the menu
    navLinks.classList.remove('active');
    closebtn.style.display = 'none';

});
