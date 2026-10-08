const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", changeTheme);

function changeTheme() {
    document.body.classList.toggle("dark-theme");
}
