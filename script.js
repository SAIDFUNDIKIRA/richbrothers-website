// script.js

const heroText = document.getElementById('hero-text');
const textArray = ["Welcome to Rich Brothers Group Ltd.", "Your Trusted Partner in Logistics.", "Our experience your advantage"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        heroText.textContent += textArray[textIndex][charIndex];
        charIndex++;
        setTimeout(typeEffect, 100); // Speed of typing
    } else {
        setTimeout(() => {
            charIndex = 0;
            textIndex = (textIndex + 1) % textArray.length; // Loop through phrases
            heroText.textContent = "";
            typeEffect();
        }, 2000); // Delay before changing text
    }
}

typeEffect();
