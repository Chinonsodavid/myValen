const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const gif = document.getElementById("mainGif");
const textchange = document.getElementById("text-change");
const endModal = document.getElementById("endModal");
const modalClose = document.getElementById("modalClose");
const sendBtn = document.getElementById("yess");
// Sad GIFs
const sadGifs = [
    "https://media.tenor.com/x1zd-DCiu3sAAAAi/dudu-cry-gif.gif",
];

// NO button texts
const noTexts = [
    "Nah, not interested",
    "Nope, maybe later",
    "Not today",
    "Sorry, busy",
    "Meh…",
    "I don’t think so",
    "Uhh… not feeling it",
    "I’m just here for the GIFs",
    "Hmm… nope",
    "Try asking again later",
    "I’d rather nap",
    "No, thank you",
    "LOL, nope",
    "Not in the mood",
    "Maybe in another universe",
    "Ask me in 5 years",
    "I have a date with pizza",
    "Ehh, pass",
    "My heart belongs to chocolate",
    "Absolutely not",
];

let clickCount = 0;

// Helper: check overlap
function isOverlapping(r1, r2) {
    return !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );
}

noBtn.addEventListener("click", () => {
    if (clickCount < noTexts.length) {
        // Change GIF
        gif.src = sadGifs[Math.floor(Math.random() * sadGifs.length)];

        // Change text
        textchange.textContent = noTexts[clickCount];
        clickCount++;

        // Move NO safely
        noBtn.style.position = "fixed";

        let placed = false;
        let attempts = 0;

        while (!placed && attempts < 25) {
            const x =
                Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y =
                Math.random() * (window.innerHeight - noBtn.offsetHeight);

            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;

            const noRect = noBtn.getBoundingClientRect();
            const yesRect = yesBtn.getBoundingClientRect();

            if (!isOverlapping(noRect, yesRect)) {
                placed = true;
            }

            attempts++;
        }
    } else {
        // Show modal after all NOs
        endModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
});

// Close modal
modalClose.addEventListener("click", () => {
    endModal.style.display = "none";
    document.body.style.overflow = "auto";
});
