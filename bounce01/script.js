const profileImage = document.getElementById("profileImage");

const casualButton = document.getElementById("casualButton");

const professionalButton =
    document.getElementById("professionalButton");


casualButton.addEventListener("click", showCasualPhoto);

professionalButton.addEventListener(
    "click",
    showProfessionalPhoto
);


function showCasualPhoto() {
    profileImage.style.opacity = "0";

    setTimeout(function () {
        profileImage.src = "assets/profile1.jpg";
        profileImage.alt = "Profile photo - casual";
        profileImage.style.opacity = "1";
    }, 150);
}


function showProfessionalPhoto() {
    profileImage.style.opacity = "0";

    setTimeout(function () {
        profileImage.src = "assets/profile2.jpg";
        profileImage.alt = "Profile photo - professional";
        profileImage.style.opacity = "1";
    }, 150);
}
