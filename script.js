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

    document.getElementById("about").addEventListener("click", function() {
        window.location.href = "https://avunit1.github.io/webpage-main/about.html";
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
