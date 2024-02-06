const lenguageButton = document.getElementById("LanguageButton")
const MlenguageButton = document.getElementById("MobileLanguageButton")
const lenguagePopup = document.getElementById("LanguagePopup")

lenguageButton.addEventListener("click", function(){
    lenguagePopup.style.visibility = "visible";
})

MobileLanguageButton.addEventListener("click", function(){
    lenguagePopup.style.visibility = "visible";
})