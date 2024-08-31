// Function to handle styles for left text boxes
function handleLeftTextBoxStyles425(e) {
    const leftTextBoxes = document.querySelectorAll('.left-cont .text-box');
    const leftArrows = document.querySelectorAll('.left-cont-arrow');

    leftTextBoxes.forEach(textBox => {
        const heading = textBox.querySelector('h2');
        const paragraph = textBox.querySelector('p');
        const smallText = textBox.querySelector('small');

        if (e.matches) {
            heading.style.fontSize = '1rem'; // Smaller heading font size for 425px
            paragraph.style.fontSize = '0.8rem'; // Smaller paragraph font size for 425px
            smallText.style.fontSize = '0.7rem'; // Smaller small text font size for 425px
            textBox.style.height = 'auto'; // Adjust height dynamically for smaller screens
            textBox.style.width = '300%'; // Adjust width for smaller screens
            textBox.style.left = 'initial'; // Reset left positioning for smaller screens
        } else {
            heading.style.fontSize = '1.2rem'; // Reset to default font size
            paragraph.style.fontSize = '0.9rem';
            smallText.style.fontSize = '0.8rem';
            textBox.style.height = 'auto';
            textBox.style.width = '80%';
            textBox.style.left = 'initial';
        }
    });

    leftArrows.forEach(arrow => {
        if (e.matches) {
            arrow.style.display = 'none'; // Hide arrow for smaller screens
        } else {
            arrow.style.display = 'block'; // Show arrow for larger screens
            arrow.style.right = '-20px'; // Reset right positioning
            arrow.style.top = '55px'; // Reset top positioning
        }
    });
}

// Function to handle styles for right text boxes
function handleRightTextBoxStyles425(e) {
    const rightTextBoxes = document.querySelectorAll('.right-cont .text-box');
    const rightArrows = document.querySelectorAll('.right-cont-arrow');

    rightTextBoxes.forEach(textBox => {
        const heading = textBox.querySelector('h2');
        const paragraph = textBox.querySelector('p');
        const smallText = textBox.querySelector('small');

        if (e.matches) {
            heading.style.fontSize = '1rem'; // Smaller heading font size for 425px
            paragraph.style.fontSize = '0.8rem'; // Smaller paragraph font size for 425px
            smallText.style.fontSize = '0.7rem'; // Smaller small text font size for 425px
            textBox.style.height = 'auto'; // Adjust height dynamically for smaller screens
            textBox.style.width = '808%'; // Adjust width for smaller screens
            textBox.style.left = 'initial'; // Reset left positioning for smaller screens
        } else {
            heading.style.fontSize = '1.2rem'; // Reset to default font size
            paragraph.style.fontSize = '0.9rem';
            smallText.style.fontSize = '0.8rem';
            textBox.style.height = 'auto';
            textBox.style.width = '80%';
            textBox.style.left = 'initial';
        }
    });

    rightArrows.forEach(arrow => {
        if (e.matches) {
            arrow.style.display = 'none'; // Hide arrow for smaller screens
        } else {
            arrow.style.display = 'block'; // Show arrow for larger screens
            arrow.style.left = '-20px'; // Reset left positioning
            arrow.style.top = '55px'; // Reset top positioning
        }
    });
}

// Function to handle responsive styles
function handleResponsiveStyles425() {
    const mediaQuery425 = window.matchMedia('(max-width: 426px)');

    // Apply styles based on media query result
    function applyStyles425(e) {
        handleLeftTextBoxStyles425(e);
        handleRightTextBoxStyles425(e);
    }

    mediaQuery425.addEventListener('change', applyStyles425);
    applyStyles425(mediaQuery425);
}

// Execute the function on page load
document.addEventListener('DOMContentLoaded', handleResponsiveStyles425);
