const languageButton =
    document.getElementById("languageButton");


const translations = {

    en: {
        title: "My Portfolio",
        languageButton: "العربية",
        welcome: "Welcome to my portfolio",
        description: "This is my personal portfolio website.",
        skillsTitle: "My Skills",
        skillsText: "HTML, CSS, JavaScript and Git.",
        contactTitle: "Contact Me",
        contactText: "Feel free to contact me.",
        footerText: "All rights reserved."
    },

    ar: {
        title: "ملفي الشخصي",
        languageButton: "English",
        welcome: "مرحبًا بكم في ملفي الشخصي",
        description: "هذا هو موقعي الشخصي.",
        skillsTitle: "مهاراتي",
        skillsText: "HTML و CSS و JavaScript و Git.",
        contactTitle: "تواصل معي",
        contactText: "يمكنك التواصل معي.",
        footerText: "جميع الحقوق محفوظة."
    }

};


let currentLanguage = "en";


languageButton.addEventListener(
    "click",
    changeLanguage
);


function changeLanguage() {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

    } else {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";
    }


    updatePage();
}


function updatePage() {

    const language =
        translations[currentLanguage];


    document.getElementById("title").textContent =
        language.title;


    document.getElementById("languageButton").textContent =
        language.languageButton;


    document.getElementById("welcome").textContent =
        language.welcome;


    document.getElementById("description").textContent =
        language.description;


    document.getElementById("skillsTitle").textContent =
        language.skillsTitle;


    document.getElementById("skillsText").textContent =
        language.skillsText;


    document.getElementById("contactTitle").textContent =
        language.contactTitle;


    document.getElementById("contactText").textContent =
        language.contactText;


    document.getElementById("footerText").textContent =
        language.footerText;
}
