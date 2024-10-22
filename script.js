const button = document.getElementById('escapeButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const clickSound = new Audio('punch-gaming-sound-effect-hd_RzlG1GE.mp3'); 

button.addEventListener('mouseover', function () {
    const offsetX = Math.random() * (window.innerWidth - button.offsetWidth);
    const offsetY = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
    
    button.style.transition = 'top 0.5s, left 0.5s';
});

button.addEventListener('click', function () {
    clickSound.play(); // Joue le son
});

yesButton.addEventListener('click', function () {
    window.location.href = 'https://exemple.com/merci';
});

noButton.addEventListener('click', function () {
    window.location.href = 'https://exemple.com/feedback';
});
