const burger = document.getElementById('burger');
const mobilMenu = document.getElementById('mobil-menu');

burger.addEventListener("click", function () {
    if (mobilMenu.style.display === "block") {
        mobilMenu.style.display = "none"; // skjul menuen
    } else {
        mobilMenu.style.display = "block"; // vis menuen
    }
});

