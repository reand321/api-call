
function playSound() {
    const audio = new Audio('meow.mp3'); // Updated path
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}


async function fetchCatFact() {
    const factBox = document.getElementById('fact-box');
    factBox.textContent = "Loading...";
    try {
        const response = await fetch("https://meowfacts.herokuapp.com/");
        if (!response.ok) throw new Error("Failed to fetch fact");
        const data = await response.json();
        factBox.textContent = data.data || "No fact available.";
    } catch (error) {
        factBox.textContent = "Error fetching fact. Please try again.";
    }
}


const icon = document.getElementById('icon');
icon.addEventListener('click', () => {
    playSound();
    fetchCatFact();
});
