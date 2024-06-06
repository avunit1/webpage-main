document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var qmark = document.querySelector(".qmark");

    function animateLogo() {
        logo.style.transform = "translateY(-38vh) rotate(0deg)";
    }

    setTimeout(animateLogo, 100);

    var toggleColor = false;

    function toggleQMarkColor() {
        toggleColor = !toggleColor; 
        if (toggleColor) {
            qmark.style.color = "#f72626";
        } else {
            qmark.style.color = "#FA7070";
        }
    }

    setInterval(toggleQMarkColor, 350);
});
