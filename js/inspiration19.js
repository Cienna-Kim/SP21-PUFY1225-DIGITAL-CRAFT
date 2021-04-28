function setup() {
  createCanvas(600, 600, SVG);
  noStroke();
  frameRate(30);
  background("#01073b")
  noLoop();
}

function draw() {
  fill(50, 0, 50)
  for (let i = 5; i < width + 60; i += 100) {
    for (let y = 0; y < height; y += 10){
      rect(i, y, 5, 100);
      fill(random(50, 105), random(20, 200), random(150, 255), 20);
    }
  }
  fill(100, 50, 100)
  for (let i = 95; i < width + 60; i += 100) {
    for (let y = 0; y < height; y += 10){
      rect(i, y, 5, 100);
      fill(random(50, 150), random(100, 255), random(240, 255), 20);
    }
  }
  fill(100, 100, 100)
  for (let i = 45; i < width + 5; i += 150) {
    for (let y = 0; y < height; y += 50){
      rect(i, y, 50, 5);
      fill(random(50, 150), random(100, 255), random(240, 255), 20);
    }
  }
save();
}