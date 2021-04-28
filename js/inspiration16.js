function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(5);
  background("#ccb1fc")
}

function draw() {
  fill(100, 100, 200)
  for (let i = 5; i < width + 25; i += 20) {
    for (let y = 5; y < height; y += 20){
      ellipse(i, y, 25, 25);
      fill(0, random(20, 50), random(0, 255), 100);
    }
  }
}