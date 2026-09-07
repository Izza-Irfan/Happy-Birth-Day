/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    "May your journey ahead be as beautiful, extraordinary, and unforgettable as you are 🎂🤍";

let typingIndex = 0;

function typeText() {

    const typingElement =
        document.getElementById("typing");

    if (!typingElement) {
        return;
    }

    if (typingIndex < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 60);
    }
}

typeText();


/* =========================================
   BIRTHDAY COUNTDOWN
========================================= */

// Change this date if needed.
const birthdayDate =
    new Date("September 07, 2026 20:00:00").getTime();

function updateCountdown() {

    const countdown =
        document.getElementById("countdown");

    if (!countdown) {
        return;
    }

    const now =
        new Date().getTime();

    const difference =
        birthdayDate - now;

    if (difference <= 0) {

        countdown.innerHTML =
            "🎉 HAPPY BIRTHDAY! 🎉🎂🤍";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );

    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

updateCountdown();


/* =========================================
   GIFT OPENING
========================================= */

let giftOpened = false;

function openGift() {

    const gift =
        document.getElementById("gift");

    const giftMessage =
        document.getElementById("giftMessage");

    if (!gift || !giftMessage) {
        return;
    }

    /*
        Prevent the gift animation from
        being restarted repeatedly.
    */

    if (giftOpened) {

        /*
            Still give a little reaction if
            the user taps it again.
        */

        giftMessage.classList.remove("revealed");

        void giftMessage.offsetWidth;

        giftMessage.classList.add("revealed");

        createCelebrationParticles();

        return;
    }

    giftOpened = true;

    /*
        Stop the floating animation and
        start the opening animation.
    */

    gift.style.animation = "none";

    void gift.offsetWidth;

    gift.classList.add("open");

    /*
        Create the large glowing burst.
    */

    createGiftBurst();

    /*
        Reveal the surprise message.
    */

    setTimeout(() => {

        giftMessage.innerHTML =
            "🎉 Just a little surprise, because you deserve nothing less than all the happiness in the world. 🤍";

        giftMessage.classList.add("revealed");

    }, 650);

    /*
        Launch several layers of celebration.
    */

    launchConfetti();

    createCelebrationParticles();

    /*
        A second burst shortly after the
        first one makes the opening feel richer.
    */

    setTimeout(() => {

        createCelebrationParticles();

    }, 450);
}


/* =========================================
   GIFT GLOW BURST
========================================= */

function createGiftBurst() {

    const giftSection =
        document.querySelector(".gift-section");

    if (!giftSection) {
        return;
    }

    const burst =
        document.createElement("div");

    burst.className =
        "gift-burst";

    giftSection.appendChild(burst);

    setTimeout(() => {
        burst.remove();
    }, 1200);
}


/* =========================================
   CELEBRATION PARTICLES
========================================= */

function createCelebrationParticles() {

    const symbols = [
        "✨",
        "💖",
        "💕",
        "🤍",
        "🌸",
        "⭐",
        "💫",
        "🎉",
        "🥳"
    ];

    const particleCount = 28;

    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "celebration-particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        /*
            Start particles around the
            center of the screen/gift area.
        */

        particle.style.left =
            (50 + (Math.random() * 30 - 15)) +
            "vw";

        particle.style.top =
            (55 + (Math.random() * 15 - 7.5)) +
            "vh";

        particle.style.setProperty(
            "--x",
            (Math.random() * 180 - 90) + "px"
        );

        particle.style.fontSize =
            (18 + Math.random() * 22) + "px";

        particle.style.animationDuration =
            (1.7 + Math.random() * 1.3) +
            "s";

        document.body.appendChild(particle);

        setTimeout(() => {

            particle.remove();

        }, 3200);
    }
}


/* =========================================
   CELEBRATION BUTTON
========================================= */

function startCelebration() {

    openGift();

    launchConfetti();

    fireworks();

    /*
        Scroll gently toward the gift section
        instead of jumping to the top.
    */

    const giftSection =
        document.querySelector(".gift-section");

    if (giftSection) {

        setTimeout(() => {

            giftSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);
    }
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
        "#ffffff",
        "#ffb6c9"
    ];

    for (
        let i = 0;
        i < 140;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            (6 + Math.random() * 7) + "px";

        confetti.style.height =
            (6 + Math.random() * 7) + "px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex =
            "9999";

        confetti.style.pointerEvents =
            "none";

        confetti.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";

        document.body.appendChild(
            confetti
        );

        const duration =
            Math.random() * 3 + 2;

        const horizontalMovement =
            (Math.random() * 200 - 100);

        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            ${horizontalMovement}px,
                            110vh
                        )
                        rotate(720deg)`,
                    opacity: 0.8
                }
            ],
            {
                duration:
                    duration * 1000,

                easing:
                    "cubic-bezier(.25,.46,.45,.94)"
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

        caption:
            "The Girl Who Makes Everything Brighter ✨"
    },

    {
        src: "images/Photo2.jpg",

        caption:
            "Virgo Queen 👑"
    },

    {
        src: "images/Photo3.jpg",

        caption:
            "One of a Kind, The Beautiful Soul Behind That Tough Exterior 💎"
    },

    {
        src: "images/Photo4.jpg",

        caption:
            "My King My Love 💖"
    }

];

let currentSlide = 0;

function showSlide() {

    const image =
        document.getElementById("slideImage");

    const caption =
        document.getElementById("slideCaption");

    if (!image || !caption) {
        return;
    }

    image.style.opacity = "0";

    setTimeout(() => {

        image.src =
            photos[currentSlide].src;

        caption.textContent =
            photos[currentSlide].caption;

        image.style.opacity = "1";

    }, 300);
}

function nextSlide() {

    currentSlide++;

    if (
        currentSlide >=
        photos.length
    ) {

        currentSlide = 0;
    }

    showSlide();
}

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            photos.length - 1;
    }

    showSlide();
}


/*
    Automatically change photos
    every 4 seconds.
*/

setInterval(
    nextSlide,
    4000
);


/* =========================================
   BACKGROUND MUSIC
========================================= */

const music =
    document.getElementById(
        "birthdayMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

function toggleMusic() {

    if (!music || !musicButton) {
        return;
    }

    if (music.paused) {

        music.play()
            .then(() => {

                musicButton.innerHTML =
                    "⏸️ Pause Music";

            })
            .catch(() => {

                musicButton.innerHTML =
                    "▶️ Play Music";

            });

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
    document.getElementById(
        "fireworks"
    );

const ctx =
    canvas.getContext("2d");

canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;
    }
);

let particles = [];


/* =========================================
   CREATE FIREWORK
========================================= */

function createFirework(x, y) {

    const colors = [
        "#ff4f81",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#ffffff",
        "#ffb6c9"
    ];

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const angle =
            Math.random() *
            Math.PI *
            2;

        const speed =
            Math.random() * 6 + 2;

        particles.push({

            x: x,
            y: y,

            dx:
                Math.cos(angle) *
                speed,

            dy:
                Math.sin(angle) *
                speed,

            life: 100,

            color:
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ]
        });
    }
}


/* =========================================
   FIREWORK ANIMATION
========================================= */

function animateFireworks() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(
        (particle, index) => {

            particle.x +=
                particle.dx;

            particle.y +=
                particle.dy;

            particle.dy +=
                0.05;

            particle.life--;

            ctx.fillStyle =
                particle.color;

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

            if (
                particle.life <= 0
            ) {

                particles.splice(
                    index,
                    1
                );
            }
        }
    );

    ctx.globalAlpha = 1;

    requestAnimationFrame(
        animateFireworks
    );
}


/* =========================================
   FIREWORK SEQUENCE
========================================= */

function fireworks() {

    createFirework(
        Math.random() *
            canvas.width,

        Math.random() *
            canvas.height *
            0.5
    );

    setTimeout(() => {

        createFirework(
            Math.random() *
                canvas.width,

            Math.random() *
                canvas.height *
                0.5
        );

    }, 400);

    /*
        Third firework for a more dramatic
        celebration.
    */

    setTimeout(() => {

        createFirework(
            Math.random() *
                canvas.width,

            Math.random() *
                canvas.height *
                0.5
        );

    }, 800);
}


/* =========================================
   START FIREWORK ENGINE
========================================= */

animateFireworks();


/* =========================================
   OCCASIONAL FIREWORKS
========================================= */

setInterval(() => {

    if (
        Math.random() > 0.4
    ) {

        fireworks();
    }

}, 3000);
