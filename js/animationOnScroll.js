window.addEventListener('scroll', function () {
  // Handle vertical parallax for .threeD-icon
  const verticalIcons = document.querySelectorAll('.threeD-icon');
  const scrollPosition = window.pageYOffset;

  verticalIcons.forEach(icon => {
      const offset = icon.getAttribute('data-offset') || 0;
      const translateYValue = (scrollPosition - offset) * -0.3; // Adjust vertical movement
      icon.style.transform = `translateY(${translateYValue}px)`;
  });

  // Handle horizontal parallax for .threeD-icon-horizontal
  const horizontalIcons = document.querySelectorAll('.threeD-icon-horizontal');

  horizontalIcons.forEach(icon => {
      const offset = icon.getAttribute('data-offset') || 0;
      const translateXValue = (scrollPosition - offset) * -0.3; // Adjust horizontal movement
      icon.style.transform = `translateX(${translateXValue}px)`;
  });
});