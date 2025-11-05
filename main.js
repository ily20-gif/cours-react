
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideCounter = document.getElementById("slide-counter");
let currentSlide = 0;
const totalSlides = slides.length;

// Function to show the current slide and update controls
function showSlide(index) {
slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
    slide.classList.add("active");
    // Gérer l'adaptation de la taille du texte pour les diapositives à contenu dense si nécessaire
    }
});

// Update counter
slideCounter.textContent = `Diapositive ${
    index + 1
} sur ${totalSlides}`;

// Update button states
prevBtn.disabled = index === 0;
nextBtn.disabled = index === totalSlides - 1;
}

// Previous button listener
prevBtn.addEventListener("click", () => {
if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
}
});

// Next button listener
nextBtn.addEventListener("click", () => {
if (currentSlide < totalSlides - 1) {
    currentSlide++;
    showSlide(currentSlide);
}
});

// Keyboard navigation (Arrow keys)
document.addEventListener("keydown", (e) => {
if (e.key === "ArrowLeft") {
    prevBtn.click();
} else if (e.key === "ArrowRight") {
    nextBtn.click();
}
});

// Initial setup
showSlide(currentSlide);
