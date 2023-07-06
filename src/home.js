import clearScreen from "./index.js";

export default function loadHome(){
    clearScreen();
    // set color of top-bar item
    document.getElementById("home").style.color = "#FF00B5";

    loadHomePage();
}
function loadHomePage() {
  console.log("displaying home page");

  let homePage = document.createElement("div");
    homePage.classList.add("home-page");
    homePage.innerHTML = "This is the Home Page"

    document.getElementById("content").appendChild(homePage);
}