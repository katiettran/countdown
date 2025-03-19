const targetDate = new Date("2026-08-19");

// Function to update the countdown
function updateCountdown() {    
    const now = new Date();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hour = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((timeLeft % (1000 * 60)) / 1000);

    updateFlipNumber("days", day);
    updateFlipNumber("hours", hour);
    updateFlipNumber("minutes", minute);
    updateFlipNumber("seconds", second);

    setTimeout(updateCountdown, 1000);
}

function updateFlipNumber(id, newValue) {
    const element = document.getElementById(id);
    if (element.textContent !== newValue.toString()) {
        element.classList.add("flip-up"); 
        setTimeout(() => {
            element.textContent = newValue; 
            element.classList.remove("flip-up"); 
        }, 500); 
    }
}

updateCountdown();
