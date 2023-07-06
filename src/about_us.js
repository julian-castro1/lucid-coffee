import clearScreen from "./index.js";

export default function loadAboutUs() {
    clearScreen();
    // set color of top-bar item
    document.getElementById("about-us").style.color = "#FF00B5";

    loadAboutUsPage();
}
function loadAboutUsPage() {
  console.log("displaying about us page");

  // will have an image, then title, then description
  let aboutUs_page = document.createElement("div");
  let aboutUs_right_column = document.createElement("div");
  let aboutUs_image = document.createElement("img");
  let aboutUs_title = document.createElement("h2");
    let aboutUs_description_1 = document.createElement("p");
    let aboutUs_description_2 = document.createElement("p");
    let aboutUs_description_3 = document.createElement("p");

    // set attributes
    aboutUs_image.setAttribute(
      "src",
      "https://cdn.shopify.com/s/files/1/0579/9323/2437/files/about_us_pic.jpg?v=1661821091&width=360"
    );
    aboutUs_image.setAttribute("alt", "about us");
    aboutUs_title.textContent = "About Lucid Coffee Co.";
    aboutUs_description_1.textContent =
      "Welcome to Lucid Coffee Co., a place where the upbeat, artistic energy of Austin finds a home in the heart of Houston. We are Julian and Rhianna, a vibrant couple in our mid-20s, who are passionate about sharing the unique blend of laid-back vibes and vibrant coffee culture that defines Austin. Our mission is to bring a taste of Austin's dynamic coffee scene to the busy professionals and energetic students of Houston, creating a hub where creativity meets productivity, and where bustling days can pause for a moment of tranquillity.";
    aboutUs_description_2.textContent =
      "But we're not alone in this journey. Meet Aura, our loyal German Shepherd, and Maggie, our adorably charismatic Golden Doodle who also happens to be our cheerful mascot. They embody the spirit of Lucid Coffee Co. – welcoming, joyful, and full of life. When you're here, you may get a friendly nudge or a playful glance from them, ensuring your coffee experience is filled with warmth and friendliness.";
    aboutUs_description_3.textContent =
      "As lovers of coffee, our passions extend beyond the café, encapsulating the thrilling world of Formula 1 racing and the inspiring diversity of art. These influences subtly weave their way into our coffee shop, shaping an environment that's as diverse and lively as our interests. So, come on in and experience a unique blend of Austin's charm and Houston's heart at Lucid Coffee Co. Let's share stories, passions, and of course, great coffee.";
    aboutUs_description_1.classList.add("about-us-description");
    aboutUs_description_2.classList.add("about-us-description");
    aboutUs_description_3.classList.add("about-us-description");
    aboutUs_page.classList.add("about-us-page");
    aboutUs_image.classList.add("about-us-image");
    aboutUs_title.classList.add("about-us-title");
    aboutUs_right_column.classList.add("about-us-right");

    // append all
    aboutUs_right_column.appendChild(aboutUs_title);
    aboutUs_right_column.appendChild(aboutUs_description_1);
    aboutUs_right_column.appendChild(aboutUs_description_2);
    aboutUs_right_column.appendChild(aboutUs_description_3);

    aboutUs_page.appendChild(aboutUs_image);
    aboutUs_page.appendChild(aboutUs_right_column);

    document.getElementById("content").appendChild(aboutUs_page);    
}
