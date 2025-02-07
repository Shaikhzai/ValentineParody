const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const images = [
    "images/1uncanny.png",
    "images/7uncanny.png",
    "images/9uncanny.png",
    "images/2uncanny.png",
    "images/3uncanny.png",
    "images/6uncanny.png",
    "images/4uncanny.png",
    "images/5uncanny.png",
    "images/8uncanny.png",
];

const audioFiles = [
    "audio/uncanny1.mp3",
    "audio/uncanny2.mp3",
    "audio/uncanny3.mp3",
    "audio/uncanny4.mp3",
    "audio/uncanny5.mp3",
    "audio/uncanny6.mp3",
    "audio/uncanny7.mp3",
    "audio/uncanny8.mp3",
    "audio/uncanny9.mp3",
];

let messageIndex = 0;
let imageIndex = 0;
let audioIndex = 0;

// Get the audio element from index.html
const audioElement = document.querySelector("audio");

// Function to start the background music properly
function playAudio() {
    audioElement.volume = 0.5; // Set initial volume
    audioElement.loop = true; // Ensure looping
    audioElement.play().catch(() => {
        console.log("Autoplay blocked. Click anywhere to start music.");
    });
}

// Try playing audio on page load (if allowed)
document.addEventListener("DOMContentLoaded", () => {
    playAudio();

    // If autoplay is blocked, allow manual start on user interaction
    document.body.addEventListener("click", () => {
        if (audioElement.paused) {
            playAudio();
        }
    });
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const imgElement = document.querySelector('.gif_container img');

    // Update the button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change the displayed image
    imgElement.src = images[imageIndex];
    imageIndex = (imageIndex + 1) % images.length;

    // Change the background audio
    audioElement.src = audioFiles[audioIndex];
    audioElement.play().catch(err => console.log("Audio play error:", err));
    audioIndex = (audioIndex + 1) % audioFiles.length;

    // Ensure audio loops
    audioElement.loop = true;

    // Increase the size of the "Yes" button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
