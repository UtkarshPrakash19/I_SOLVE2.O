document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo img");
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector("nav ul");
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 326) {
        logo.style.width = "80px";
        logo.style.height = "auto"; 
        logo.style.position = "absolute";
        logo.style.left = "10px"; 
        logo.style.top = "10px"; 
        menuButton.style.display = "block"; 
        navLinks.style.display = "none";
      } else {
        logo.style.width = "auto"; 
        logo.style.height = "auto"; 
        logo.style.position = "relative";
        logo.style.left = "0px";
        logo.style.top = "0px";
        menuButton.style.display = "none"; 
        navLinks.style.display = "flex"; 
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    menuButton.addEventListener("click", function () {
      if (navLinks.style.display === "none") {
        navLinks.style.display = "flex";
      } else {
        navLinks.style.display = "none";
      }
    });
});
