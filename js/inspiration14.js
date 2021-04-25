const diam = 100;
const xPos = 100;
const yPos = 100;
let g = 100;
function setup() {
  createCanvas(600, 600);
  noLoop();
  strokeWeight(8);
}

function draw() {
  background("#00d5ff");
  
  noStroke();
  fill("black");
  triangle(xPos *3, yPos *3, 0, yPos *6, xPos *3, yPos *6);
  
  noStroke();
  fill("black");
  triangle(xPos *3, yPos *3, xPos *6, yPos *6, xPos *6, yPos *3);
  
  noStroke();
  fill("black");
  triangle(xPos *3, yPos *3, 0, 0, 0, yPos *3);
  
  noStroke();
  fill("black");
  triangle(xPos *3, yPos *3, xPos *3 , 0, xPos *6, 0);
  

  noFill();
  stroke("#0030bf");
  ellipse(xPos *3, yPos *3, diam, diam);
  
  noFill();
  stroke("#7e42ff");
  ellipse(xPos *3, yPos *3, diam*2, diam*2);

  noFill();
  stroke("#0030bf");
  ellipse(xPos *3, yPos *3, diam*3, diam*3);
  
  noFill();
  stroke("#7e42ff");
  ellipse(xPos *3, yPos *3, diam*4, diam*4);
  
  noFill();
  stroke("#0030bf");
  ellipse(xPos *3, yPos *3, diam*5, diam*5);
  
  noFill();
  stroke("#7e42ff");
  ellipse(xPos *3, yPos *3, diam*6, diam*6);
  
  noFill();
  stroke("#0030bf");
  ellipse(xPos *3, yPos *3, diam*7, diam*7);
  
  noFill();
  stroke("#7e42ff");
  ellipse(xPos *3, yPos *3, diam*8, diam*8);
  

}