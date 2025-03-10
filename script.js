document.addEventListener("DOMContentLoaded", () => {
    console.log("Flicker script is running!");

    // Ensure opacity is set to 0 initially
    gsap.set(".flicker-overlay", { opacity: 0 });

    function flickerEffect() {
        gsap.to(".flicker-overlay", {
            opacity: Math.random() * 0.6, // Random opacity between 0 and 0.6
            duration: 0.05, // Short duration for a rapid flicker effect
            onComplete: flickerEffect // Loop the flicker effect
        });
    }

    flickerEffect(); // Start the flicker loop

    // Floating animation for buttons
    gsap.to(".leftbtn, .rightbtn, .solebtn", {
        y: -10, // Float up slightly
        duration: 1.5,
        repeat: -1, // Infinite repeat
        yoyo: true, // Move back down
        ease: "power1.inOut"
    });
});

function adjustScrollWidth() {
    let textContainer = document.querySelector('.text');

    // Measure text width and adjust container width accordingly
    let contentWidth = textContainer.scrollWidth;
    textContainer.style.width = contentWidth + 50 + "px"; // Add padding to prevent tight fit

    console.log("Adjusted scroll width to:", textContainer.style.width);
}

// Run on page load and window resize
document.addEventListener("DOMContentLoaded", adjustScrollWidth);
window.addEventListener("resize", adjustScrollWidth);

