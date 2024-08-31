document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('nav ul');
    const button = document.querySelector('button');
    const buttonIcon = document.querySelector('.button-icon');
    const container = document.querySelector('.container');
    const heading = document.querySelector('.content h1');
    const subheading = document.querySelector('.subheading');
    const timerImage = document.querySelector('.timer');

    // Toggle menu visibility on mobile
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Initial adjustments
    adjustTextStyles(); 
    adjustButtonStyles(); 
    adjustTimerSectionStyles();
    startCountdown(); // Initialize the countdown timer
});
function adjustTextStyles() {
    const heading = document.querySelector('.content h1');
    const subheading = document.querySelector('.subheading');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen size
        heading.style.fontSize = '22vw'; 
        heading.style.marginBottom = '1.6px'; 

        subheading.style.fontSize = '3rem'; 
        subheading.style.marginTop = '1rem'; 
    } else { // Desktop screen size
        heading.style.fontSize = '10rem'; 
        heading.style.marginBottom = '8px'; 

        subheading.style.fontSize = '4rem'; 
        subheading.style.marginTop = '1rem'; 
    }
}

function adjustButtonStyles() {
    const button = document.querySelector('button');
    const buttonIcon = document.querySelector('.button-icon');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen size
        button.style.padding = '10px 20px'; 
        button.style.fontSize = '1rem'; 
        buttonIcon.style.width = '40px'; 
        buttonIcon.style.height = '40px'; 
    } else { // Desktop screen size
        button.style.padding = '20px 40px'; 
        button.style.fontSize = '1.5rem'; 
        buttonIcon.style.width = '30px'; 
        buttonIcon.style.height = '30px'; 
    }
}

function adjustTimerSectionStyles() {
    const container = document.querySelector('.container');
    const heading = document.querySelector('.content1 h1');
    const deadlineItems = document.querySelectorAll('.deadline div');
    const timerImage = document.querySelector('.timer');
    const width = window.innerWidth;

    if (width < 768) { // Mobile screen size
        container.style.padding = '20px'; // Adjust padding
        heading.style.fontSize = '3rem'; // Smaller font size for heading
        deadlineItems.forEach(item => {
            item.style.fontSize = '1.2rem'; // Smaller font size for deadline items
        });
        timerImage.style.maxWidth = '150px'; // Smaller image size
        container.style.textAlign = 'center'; // Center align text
    } else { // Desktop screen size
        container.style.padding = '50px 20px'; // Default padding
        heading.style.fontSize = '4.5rem'; // Default font size for heading
        deadlineItems.forEach(item => {
            item.style.fontSize = '2rem'; // Default font size for deadline items
        });
        timerImage.style.maxWidth = '200px'; // Default image size
        container.style.textAlign = 'left'; // Left align text
    }
}

function startCountdown() {
    const deadline = new Date('2024-08-31T23:59:59').getTime(); // Set your deadline date and time here

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = deadline - now;

        if (distance < 0) {
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            return; // Stop the timer when countdown is finished
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = formatNumber(days);
        document.getElementById('hours').innerHTML = formatNumber(hours);
        document.getElementById('minutes').innerHTML = formatNumber(minutes);
        document.getElementById('seconds').innerHTML = formatNumber(seconds);
    }

    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    updateCountdown(); // Run once at the start
    setInterval(updateCountdown, 1000); // Update every second
}

// Ensure the countdown starts when the page has fully loaded
window.onload = startCountdown;


// Call adjustments on page load and on window resize
window.addEventListener('load', function() {
    adjustTextStyles();
    adjustButtonStyles();
    adjustTimerSectionStyles();
});

window.addEventListener('resize', function() {
    adjustTextStyles();
    adjustButtonStyles();
    adjustTimerSectionStyles();
});
