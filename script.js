document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var qmark = document.querySelector(".qmark");

    // Function to animate the logo to the center and rotate simultaneously
    function animateLogo() {
        logo.style.transform = "translateY(-38vh) rotate(0deg)";
    }

    // Trigger the animation after a short delay to allow the page to render
    setTimeout(animateLogo, 100);

    // Toggle variable to keep track of current color state
    var toggleColor = false;

    // Function to toggle qmark font color between #f72626 and #FA7070
    function toggleQMarkColor() {
        toggleColor = !toggleColor; // Toggle the state
        if (toggleColor) {
            qmark.style.color = "#f72626";
        } else {
            qmark.style.color = "#FA7070";
        }
    }

    // Call toggleQMarkColor function every 0.35s
    setInterval(toggleQMarkColor, 350);

    // Add event listeners to all buttons
    document.getElementById("about").addEventListener("click", function() {
        window.location.href = "https://avunit1.github.io/webpage-main/about.html"; // Redirect to the About page
    });

    document.getElementById("github-main").addEventListener("click", function() {
        window.open("https://github.com/avunit1", "_blank");
    });

    document.getElementById("github-secondary").addEventListener("click", function() {
        window.open("https://github.com/pwndd", "_blank");
    });

    document.getElementById("exrunner").addEventListener("click", function() {
        window.open("https://github.com/avunit1/ExRunner", "_blank");
    });

    document.getElementById("enkode").addEventListener("click", function() {
        window.open("https://github.com/avunit1/enkode", "_blank");
    });

    document.getElementById("iwry").addEventListener("click", function() {
        window.open("https://github.com/pwndd/iwry", "_blank");
    });

    document.getElementById("hackintosh").addEventListener("click", function() {
        window.open("https://github.com/avunit1/LenovoThinkbook15-IML-Hackintosh", "_blank");
    });

    qmark.addEventListener("click", function() {
        window.open("https://www.gnu.org/licenses/gpl-3.0.en.html", "_blank");
    });
});
