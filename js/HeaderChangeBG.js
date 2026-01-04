document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0; // Variable to store the last scroll position
    const header = document.querySelector('.header');
    const svgNav = document.querySelector('.navbar svg');
    const svgCta = document.querySelector('.cta svg');
    const anchorTags = document.querySelectorAll('.navbar .links a');

    function handleScroll() {
        const screenWidth = window.innerWidth;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;  // Get current scroll position

        if (screenWidth > 576) {
            if (scrollTop > 10) {
                // Hide the SVGs and change the styles
                svgNav.style.opacity = '1'; // Set opacity to 0 for hiding
                svgNav.style.transform = 'translateY(-100px)';
                svgNav.style.transition = 'opacity 0.3s ease, transform 0.3s ease'; // Combine transitions

                svgCta.style.opacity = '1';
                svgCta.style.transform = 'translateX(101%)';
                svgCta.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                // header.style.position = 'sticky';
                // header.style.top = '0';
                header.style.backgroundColor = "#fbfbfb";
                header.style.padding = '8px 4px'; // Adjust padding
                header.style.boxShadow = '0 4px 100px rgba(0, 0, 0, 0.1)';
                anchorTags.forEach(anchor => anchor.style.color = 'black');
            } else {
                // Show the SVGs and reset the styles
                svgNav.style.opacity = '1';
                svgNav.style.transform = 'translateY(0)';
                svgCta.style.opacity = '1';
                svgCta.style.transform = 'translateX(0)';

                // header.style.position = 'absolute';
                // header.style.top = '0';
                header.style.backgroundColor = "transparent";
                header.style.padding = '0px 0';  // Reset padding
                header.style.boxShadow = 'none';
                anchorTags.forEach(anchor => anchor.style.color = 'white');
            }
        } else {
            // Handle cases when screen width is <= 576px (if necessary)
            svgNav.style.opacity = '1'; // Ensure it's visible for smaller screens
            svgCta.style.opacity = '1';
            header.style.padding = 'auto';  // Reset padding
            anchorTags.forEach(anchor => anchor.style.color = 'white'); // Reset to default color
        }

        lastScrollTop = scrollTop;  // Update the last scroll position
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on page load
    handleScroll();
});