const images = ["0.png", "1.png", "2.png", "3.png"];

const BACKGROUND_IMAGE_NAME = "backgroundImg";

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList.add(BACKGROUND_IMAGE_NAME);

document.body.appendChild(bgImage);
