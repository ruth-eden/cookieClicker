let img;
let count = 0;

function preload() {
  img = loadImage("assets/cookie.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(200, 200, 200)");
  image(img, 100, 100, 200, 200);
  text(count, 200, 350);
}

function mouseClicked() {
  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 100 && mouseY <= 300) {
    count += 1;
  }
}