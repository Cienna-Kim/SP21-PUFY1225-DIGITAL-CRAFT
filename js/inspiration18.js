let x, y;

function setup() {
  createCanvas(800, 400);
  x = width / 2;
  y = height;
}

function draw() {
  background("#abafff");
  
  stroke(50);
  noStroke();
  fill(random(0, 200), random(100, 200), random(200, 255), 255);
  ellipse(x, y, 40, 40);

  y = y - 5;
  
  if (y < 0) {
    y = height;
  }
}