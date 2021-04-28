function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(30);
  background("#120017")
}

function draw() {
  fill(50, 0, 50)
  for (let i = 5; i < width + 60; i += 100) {
    for (let y = 5; y < height; y += 10){
      rect(i, y, 25, 25);
      fill(random(0, 155), random(20, 200), random(150, 255), 100);
    }
  }
  
{
  fill(50, 50, 100)
  for (let i = 5; i < width + 60; i += 100) {
    for (let y = 5; y < height; y += 100){
      rect(i*2, y, 60, 200);
      fill(random(70, 170), random(20, 40), random(150, 255), 50);
    }
  }
{
  fill(100, 0, 200)
  for (let i = 5; i < width + 5; i += 50) {
    for (let y = 5; y < height; y += 50){
      rect(i*5, y, 15, 25);
      fill(0, random(100, 155), random(150, 255), 50);
    }
  }
}}}