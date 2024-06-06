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
});
