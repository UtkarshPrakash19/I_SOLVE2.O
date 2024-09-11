
function handleResponsiveStyles() {
    const mediaQuery = window.matchMedia('(max-width: 769px)');

    function applyStyles(e) {
        const textBoxes = document.querySelectorAll('.text-box');
        const leftArrows = document.querySelectorAll('.left-cont-arrow');
        const rightArrows = document.querySelectorAll('.right-cont-arrow');

        textBoxes.forEach(textBox => {
            let heading = textBox.querySelector('h2'); 
            const paragraph = textBox.querySelector('p'); 
            const smallText = textBox.querySelector('small'); 

            if (e.matches) {
                if (heading.tagName.toLowerCase() === 'h1') {
                    const newHeading = document.createElement('h2');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                    heading = newHeading; 
                }
                heading.style.fontSize = '1.2rem'; 
                heading.style.color = ''; 
                paragraph.style.fontSize = '0.9rem'; 
                smallText.style.fontSize = '0.8rem'; 
                textBox.style.height = 'auto'; 
                textBox.style.width = '80%'; 
            } else {
                if (heading.tagName.toLowerCase() === 'h2') {
                    const newHeading = document.createElement('h1');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                    heading = newHeading; 
                }
                heading.style.fontSize = '1.8rem'; 
                heading.style.color = 'white'; 
                paragraph.style.fontSize = '1.2rem'; 
                smallText.style.fontSize = '1rem'; 
                textBox.style.height = '200px'; 
                textBox.style.width = '90%'; 
                textBox.style.left = 'initial'; 
            }
        });

        leftArrows.forEach(arrow => {
            if (e.matches) {
                arrow.style.left = '240px'; 
                arrow.style.top = '55px'; 
            } else {
                arrow.style.right = '-15px';
                arrow.style.top = '55px';
            }
        });

        rightArrows.forEach(arrow => {
            if (e.matches) {
                arrow.style.left = '-20px';
                arrow.style.top = '55px';
            } else {
                arrow.style.left = '-15px';
                arrow.style.top = '55px';
            }
        });
    }

    mediaQuery.addEventListener('change', applyStyles);

    applyStyles(mediaQuery);
}

document.addEventListener('DOMContentLoaded', handleResponsiveStyles);
