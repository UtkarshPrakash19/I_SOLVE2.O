document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector("nav ul");
  
    function handleResize() {
      const width = window.innerWidth;
      
      if (width <= 326) {
        // Adjust logo size and show hamburger menu for viewport width 326px or less
        logo.style.width = "80px"; // Adjust the size as needed
        logo.style.height = "auto"; // Maintain aspect ratio
        logo.style.position = "absolute";
        logo.style.left = "10px"; // Adjust as needed
        logo.style.top = "10px"; // Adjust as needed
        menuButton.style.display = "block"; // Show hamburger menu
        navLinks.style.display = "none"; // Hide navigation links by default
      } else {
        // Reset adjustments for widths greater than 326px
        logo.style.width = "auto"; // Reset size
        logo.style.height = "auto"; // Maintain aspect ratio
        logo.style.position = "relative";
        logo.style.left = "0px";
        logo.style.top = "0px";
        menuButton.style.display = "none"; // Hide hamburger menu
        navLinks.style.display = "flex"; // Show navigation links
      }
    }
  
    // Initial call to set styles based on the current window width
    handleResize();
  
    // Add event listener to handle resizing of the window
    window.addEventListener("resize", handleResize);
  
    // Toggle navigation links when hamburger menu is clicked
    menuButton.addEventListener("click", function () {
      if (navLinks.style.display === "none") {
        navLinks.style.display = "flex";
      } else {
        navLinks.style.display = "none";
      }
    });
});
