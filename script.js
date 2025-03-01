// Wait until the full document is loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the menu button and navigation links
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('nav ul');

    // Toggle the navigation menu when the menu button is clicked
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Call functions to adjust styles and start the countdown timer
    adjustTextStyles(); 
    adjustButtonStyles(); 
    adjustTimerSectionStyles();
    startCountdown(); 
});

// Function to adjust text styles (heading & subheading) based on screen size
function adjustTextStyles() {
    const heading = document.querySelector('.content h1');
    const subheading = document.querySelector('.subheading');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen
        heading.style.fontSize = '22vw'; 
        heading.style.marginBottom = '1.6px'; 

        subheading.style.fontSize = '3rem'; 
        subheading.style.marginTop = '1rem'; 
    } else { // Desktop screen
        heading.style.fontSize = '10rem'; 
        heading.style.marginBottom = '8px'; 

        subheading.style.fontSize = '4rem'; 
        subheading.style.marginTop = '1rem'; 
    }
}

// Function to adjust button styles based on screen size
function adjustButtonStyles() {
    const button = document.querySelector('button');
    const buttonIcon = document.querySelector('.button-icon');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen
        button.style.padding = '10px 20px'; 
        button.style.fontSize = '1rem'; 
        buttonIcon.style.width = '40px'; 
        buttonIcon.style.height = '40px'; 
    } else { // Desktop screen
        button.style.padding = '20px 40px'; 
        button.style.fontSize = '1.5rem'; 
        buttonIcon.style.width = '30px'; 
        buttonIcon.style.height = '30px'; 
    }
}

// Function to adjust the timer section layout based on screen size
function adjustTimerSectionStyles() {
    const container = document.querySelector('.container');
    const heading = document.querySelector('.content1 h1');
    const deadlineItems = document.querySelectorAll('.deadline div');
    const timerImage = document.querySelector('.timer');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen
        container.style.padding = '20px';
        heading.style.fontSize = '3rem'; 
        deadlineItems.forEach(item => {
            item.style.fontSize = '1.2rem'; 
        });
        timerImage.style.maxWidth = '150px'; 
        container.style.textAlign = 'center'; 
    } else { // Desktop screen
        container.style.padding = '50px 20px'; 
        heading.style.fontSize = '4.5rem'; 
        deadlineItems.forEach(item => {
            item.style.fontSize = '2rem'; 
        });
        timerImage.style.maxWidth = '200px'; 
        container.style.textAlign = 'left';
    }
}

// Function to start the countdown timer
function startCountdown() {
    const deadline = new Date('2024-08-31T23:59:59').getTime(); // Set the target date

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {  // If countdown is over, set all values to 00
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            return; 
        }

        // Calculate remaining days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById('days').innerHTML = formatNumber(days);
        document.getElementById('hours').innerHTML = formatNumber(hours);
        document.getElementById('minutes').innerHTML = formatNumber(minutes);
        document.getElementById('seconds').innerHTML = formatNumber(seconds);
    }

    // Function to add leading zero if the number is less than 10
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    updateCountdown(); // Run the function once immediately
    setInterval(updateCountdown, 1000); // Update every 1 second
}

// Ensure the countdown timer starts when the page loads
window.onload = startCountdown;

// Adjust styles when the page is loaded
window.addEventListener('load', function() {
    adjustTextStyles();
    adjustButtonStyles();
    adjustTimerSectionStyles();
});

// Adjust styles dynamically when the window is resized
window.addEventListener('resize', function() {
    adjustTextStyles();
    adjustButtonStyles();
    adjustTimerSectionStyles();
});
