/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    "Wishing you happiness, love, success, and lots of cake! 🎂❤️";

let typingIndex = 0;

function typeText() {
    if (typingIndex < typingText.length) {

        document.getElementById("typing").textContent +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 60);
    }
}

typeText();


/* =========================================
   BIRTHDAY COUNTDOWN
========================================= */

// Change this date to Sarah's birthday.
// Example: September 20, 2026
const birthdayDate = new Date("September 08, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthdayDate - now;

    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎉 HAPPY BIRTHDAY! 🎂❤️";

        return;
    }

    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (difference % (1000 * 60))
            / 1000
        );

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================================
   GIFT OPENING
========================================= */

function openGift() {

    const gift = document.getElementById("gift");

    gift.classList.add("open");

    document.getElementById("giftMessage").innerHTML =
        "🎉 Surprise! You deserve all the happiness in the world! ❤️";

    launchConfetti();
}


/* =========================================
   CELEBRATION BUTTON
========================================= */

function startCelebration() {

    openGift();

    launchConfetti();

    fireworks();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   CONFETTI
========================================= */

function launchConfetti() {

    const colors = [
        "#ff4f81",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ffffff"
    ];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 2;

        confetti.animate(
            [
                {
                    transform:
                        `translateY(0) rotate(0deg)`
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}


/* =========================================
   PHOTO SLIDESHOW
========================================= */

const photos = [
    {
        src: "images/Photo1.jpg",
        caption: "The Girl Who Makes Everything Brighter ✨"
    },
    {
        src: "images/Photo2.jpg",
        caption: "Virgo Queen 👑"
    },
    {
        src: "images/Photo3.jpg",
        caption: "One of a Kind, The Beautiful Soul Behind That Tough Exterior 💎"
    },
    {
        src: "images/Photo4.jpg",
        caption: "My King My Love 💖"
    }
];

let currentSlide = 0;

function showSlide() {

    const image =
        document.getElementById("slideImage");

    const caption =
        document.getElementById("slideCaption");

    image.style.opacity = "0";

    setTimeout(() => {

        image.src = photos[currentSlide].src;

        caption.textContent =
            photos[currentSlide].caption;

        image.style.opacity = "1";

    }, 300);
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= photos.length) {
        currentSlide = 0;
    }

    showSlide();
}

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = photos.length - 1;
    }

    showSlide();
}


// Automatically change photos every 4 seconds

setInterval(nextSlide, 4000);


/* =========================================
   BACKGROUND MUSIC
========================================= */

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.innerHTML =
            "⏸️ Pause Music";

    } else {

        music.pause();

        musicButton.innerHTML =
            "▶️ Play Music";
    }
}


/* =========================================
   FIREWORKS
========================================= */

const canvas =
    document.getElementById("fireworks");

const ctx =
    canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

let particles = [];

function createFirework(x, y) {

    const colors = [
        "#ff4f81",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff"
    ];

    for (let i = 0; i < 60; i++) {

        const angle =
            Math.random() * Math.PI * 2;

        const speed =
            Math.random() * 6 + 2;

        particles.push({

            x: x,
            y: y,

            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,

            life: 100,

            color:
                colors[
                    Math.floor(
                        Math.random() * colors.length
                    )
                ]

        });
    }
}

function animateFireworks() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle, index) => {

        particle.x += particle.dx;
        particle.y += particle.dy;

        particle.dy += 0.05;

        particle.life--;

        ctx.fillStyle = particle.color;

        ctx.globalAlpha =
            particle.life / 100;

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            3,
            0,
            Math.PI * 2
        );

        ctx.fill();

        if (particle.life <= 0) {
            particles.splice(index, 1);
        }

    });

    ctx.globalAlpha = 1;

    requestAnimationFrame(animateFireworks);
}

function fireworks() {

    createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height * 0.5
    );

    setTimeout(() => {

        createFirework(
            Math.random() * canvas.width,
            Math.random() * canvas.height * 0.5
        );

    }, 400);
}

animateFireworks();

// Occasional fireworks

setInterval(() => {

    if (Math.random() > 0.4) {
        fireworks();
    }

}, 3000);
