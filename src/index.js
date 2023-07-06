import "./styles.css";
import "material-design-icons/iconfont/material-icons.css";
import './fonts.css'
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAboutUs from "./about_us.js";


createApp();
home_clicked();

// this just sets the background, logo, and nav bar icons
function createApp() {
    // create elements
    let logo_container_ele = document.createElement("div");
    let logo_ele = document.createElement("img");
    let nav_bar_ele = document.createElement("div");
    let home_ele = document.createElement("span");
    let menu_ele = document.createElement("span");
    let aboutus_ele = document.createElement("span");
    let content_ele = document.createElement("div");

    // customize those elements
    logo_ele.src =
      "https://www.lucidcoffee.co/uploads/b/64d2e6576f12c24d4ef7850976a35d7d84959c62e6e94d52c0f1eea24bd551c2/logo_1688147373.png?width=400&optimize=medium";
    logo_ele.alt = "logo";
    logo_ele.className = "logo";
    logo_container_ele.className = "logo-cont";
    nav_bar_ele.className = "nav-bar";

    home_ele.className = "nav-bar-item";
    home_ele.innerHTML = "Home";
    home_ele.id = "home";
    menu_ele.className = "nav-bar-item";
    menu_ele.innerHTML = "Menu";
    menu_ele.id = "menu";
    aboutus_ele.className = "nav-bar-item";
    aboutus_ele.innerHTML = "About Us";
    aboutus_ele.id = "about-us";
    content_ele.id = "content";

    // append those elements
    logo_container_ele.appendChild(logo_ele);
    document.body.appendChild(logo_container_ele);
    document.body.appendChild(nav_bar_ele);
    nav_bar_ele.appendChild(home_ele);
    nav_bar_ele.appendChild(menu_ele);
    nav_bar_ele.appendChild(aboutus_ele);
    document.body.appendChild(content_ele);

    // add event listeners
    home_ele.addEventListener("click", home_clicked);
    menu_ele.addEventListener("click", menu_clicked);
    aboutus_ele.addEventListener("click", aboutus_clicked);


    
}

function home_clicked() {
  import("./home.js")
    .then((module) => {
      module.default();
    })
    .catch((error) => {
      console.log("An error occurred while loading the home module.", error);
    });
}
function menu_clicked() {
  import("./menu.js")
    .then((module) => {
      module.default();
    })
    .catch((error) => {
      console.log("An error occurred while loading the menu module.", error);
    });
}
function aboutus_clicked() {
  import("./about_us.js")
    .then((module) => {
      module.default();
    })
    .catch((error) => {
      console.log("An error occurred while loading the about us module.", error);
    });
}

export default function clearScreen() {
    document.getElementById("content").innerHTML = "";

    // set all menu labels to default
    document.getElementById("home").style.color = "#6F6F6F";
    document.getElementById("menu").style.color = "#6F6F6F";
    document.getElementById("about-us").style.color = "#6F6F6F";
}