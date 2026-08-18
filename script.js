// --- Ads slider ---
const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
let currentSlide = 0;

slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active-dot");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[currentSlide].classList.add("active-dot");
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

setInterval(nextSlide, 3000);

// --- Reveal text sections as they scroll into view ---
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));

// --- Background music toggle ---
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
let isPlaying = false;

music.volume = 0.3; // quiet background level — lower to 0.15 or 0.2 if still too loud

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicBtn.textContent = "🔇 Play Music";
    } else {
        music.play();
        musicBtn.textContent = "🔊 Pause Music";
    }
    isPlaying = !isPlaying;
});