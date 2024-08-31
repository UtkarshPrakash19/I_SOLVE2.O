// Function to handle styles when the viewport width is 768px or less
function handleResponsiveStyles() {
    // Media query to check if the viewport width is 768px or less
    const mediaQuery = window.matchMedia('(max-width: 769px)');

    // Function to apply styles based on media query result
    function applyStyles(e) {
        // Select all text boxes and arrows in the timeline section
        const textBoxes = document.querySelectorAll('.text-box');
        const leftArrows = document.querySelectorAll('.left-cont-arrow');
        const rightArrows = document.querySelectorAll('.right-cont-arrow');

        textBoxes.forEach(textBox => {
            let heading = textBox.querySelector('h2'); // Select the heading inside text box
            const paragraph = textBox.querySelector('p'); // Select the paragraph inside text box
            const smallText = textBox.querySelector('small'); // Select the small text inside text box

            if (e.matches) {
                // When screen width is 768px or less
                if (heading.tagName.toLowerCase() === 'h1') {
                    // Change <h1> back to <h2>
                    const newHeading = document.createElement('h2');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                    heading = newHeading; // Update reference
                }
                heading.style.fontSize = '1.2rem'; // Smaller heading font size
                heading.style.color = ''; // Reset color
                paragraph.style.fontSize = '0.9rem'; // Smaller paragraph font size
                smallText.style.fontSize = '0.8rem'; // Smaller small text font size
                textBox.style.height = 'auto'; // Dynamically adjust height for smaller screens
                textBox.style.width = '80%'; // Adjust width for smaller screens
            } else {
                // When screen width is greater than 768px
                if (heading.tagName.toLowerCase() === 'h2') {
                    // Change <h2> to <h1>
                    const newHeading = document.createElement('h1');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                    heading = newHeading; // Update reference
                }
                heading.style.fontSize = '1.8rem'; // Default heading font size
                heading.style.color = 'white'; // Change color to white
                paragraph.style.fontSize = '1.2rem'; // Default paragraph font size
                smallText.style.fontSize = '1rem'; // Default small text font size
                textBox.style.height = '200px'; // Default height
                textBox.style.width = '90%'; // Default width
                textBox.style.left = 'initial'; // Reset left positioning
            }
        });

        // Adjust arrows position based on screen size
        leftArrows.forEach(arrow => {
            if (e.matches) {
                arrow.style.left = '240px'; // Adjust arrow closer to text box
                arrow.style.top = '55px'; // Adjust top positioning for smaller screens
            } else {
                arrow.style.right = '-15px'; // Default right positioning
                arrow.style.top = '55px'; // Default top positioning
            }
        });

        rightArrows.forEach(arrow => {
            if (e.matches) {
                arrow.style.left = '-20px'; // Adjust arrow closer to text box
                arrow.style.top = '55px'; // Adjust top positioning for smaller screens
            } else {
                arrow.style.left = '-15px'; // Default left positioning
                arrow.style.top = '55px'; // Default top positioning
            }
        });
    }

    // Add event listener to handle screen size changes
    mediaQuery.addEventListener('change', applyStyles);

    // Initial check
    applyStyles(mediaQuery);
}

// Execute function on page load
document.addEventListener('DOMContentLoaded', handleResponsiveStyles);
