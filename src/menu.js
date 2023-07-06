import clearScreen from "./index.js";

export default function loadMenu() {
    clearScreen();

    // set color of top-bar item
    document.getElementById("menu").style.color = "#FF00B5";
    loadMenuPage();
}
function loadMenuPage() {
  console.log("displaying menu");

  let menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
  menuPage.innerHTML = "This is the Menu Page";

  document.getElementById("content").appendChild(menuPage);
}
