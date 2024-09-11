
function handleLeftTextBoxStyles425(e) {
    const leftTextBoxes = document.querySelectorAll('.left-cont .text-box');
    const leftArrows = document.querySelectorAll('.left-cont-arrow');

    leftTextBoxes.forEach(textBox => {
        const heading = textBox.querySelector('h2');
        const paragraph = textBox.querySelector('p');
        const smallText = textBox.querySelector('small');

        if (e.matches) {
            heading.style.fontSize = '1rem';
            paragraph.style.fontSize = '0.8rem'; 
            smallText.style.fontSize = '0.7rem'; 
            textBox.style.height = 'auto'; 
            textBox.style.width = '300%'; 
            textBox.style.left = 'initial';
        } else {
            heading.style.fontSize = '1.2rem'; 
            paragraph.style.fontSize = '0.9rem';
            smallText.style.fontSize = '0.8rem';
            textBox.style.height = 'auto';
            textBox.style.width = '80%';
            textBox.style.left = 'initial';
        }
    });

    leftArrows.forEach(arrow => {
        if (e.matches) {
            arrow.style.display = 'none'; 
        } else {
            arrow.style.display = 'block'; 
            arrow.style.right = '-20px';
            arrow.style.top = '55px';
        }
    });
}
function handleRightTextBoxStyles425(e) {
    const rightTextBoxes = document.querySelectorAll('.right-cont .text-box');
    const rightArrows = document.querySelectorAll('.right-cont-arrow');

    rightTextBoxes.forEach(textBox => {
        const heading = textBox.querySelector('h2');
        const paragraph = textBox.querySelector('p');
        const smallText = textBox.querySelector('small');

        if (e.matches) {
            heading.style.fontSize = '1rem'; 
            paragraph.style.fontSize = '0.8rem'; 
            smallText.style.fontSize = '0.7rem'; 
            textBox.style.height = 'auto'; 
            textBox.style.width = '808%';
            textBox.style.left = 'initial'; 
        } else {
            heading.style.fontSize = '1.2rem'; 
            paragraph.style.fontSize = '0.9rem';
            smallText.style.fontSize = '0.8rem';
            textBox.style.height = 'auto';
            textBox.style.width = '80%';
            textBox.style.left = 'initial';
        }
    });

    rightArrows.forEach(arrow => {
        if (e.matches) {
            arrow.style.display = 'none'; 
        } else {
            arrow.style.display = 'block'; 
            arrow.style.left = '-20px'; 
            arrow.style.top = '55px'; 
        }
    });
}
function handleResponsiveStyles425() {
    const mediaQuery425 = window.matchMedia('(max-width: 426px)');

    function applyStyles425(e) {
        handleLeftTextBoxStyles425(e);
        handleRightTextBoxStyles425(e);
    }

    mediaQuery425.addEventListener('change', applyStyles425);
    applyStyles425(mediaQuery425);
}
document.addEventListener('DOMContentLoaded', handleResponsiveStyles425);
