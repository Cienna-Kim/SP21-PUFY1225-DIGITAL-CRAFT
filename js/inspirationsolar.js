const diam = 100;
const xPos = 100;
const yPos = 100;
let g = 100;
function setup() {
  createCanvas(1200, 700);
  frameRate(30);
  noStroke();
}

function draw() {
  background("#003566");
  
//Solar System
  
//space gradient
  
  noStroke();
  fill("#002445");
  rect(0, 0, diam*12, diam*2)
  noStroke();
  fill("#002445");
  rect(0, yPos*5, diam*12, diam*2)
  noStroke();
  fill("#001426");
  rect(0, 0, diam*12, diam*1)
  noStroke();
  fill("#001426");
  rect(0, yPos*6, diam*12, diam*1)
  
//orbits
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*7.4, diam*7.4)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*8.4, diam*8.4)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*9.8, diam*9.8)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*11, diam*11)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*14, diam*14)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*16.2, diam*16.2)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*18, diam*18)
  
  noFill();
  stroke("#c4c4ff");
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*19.6, diam*19.6)
  
//sun
  noStroke();
  fill(random(100, 200), 0, random(0, 100), 180);
  ellipse(0, yPos*3.5, diam*4.6, diam*4.6)
  noStroke();
  fill("#ff4262");
  ellipse(0, yPos*3.5, diam*4.2, diam*4.2)
  noStroke();
  fill("#e30075");
  ellipse(0, xPos*3.5, diam*4, diam*4)
  
//mercury
  fill("#b5b5b5");
  ellipse(xPos*3.7, yPos*3.5, diam*0.2, diam*0.2)
  
//venus
  noStroke();
  fill("#ffb282");
  ellipse(xPos*4.2, yPos*3.5, diam*0.3, diam*0.3)
  
//earth
  fill("#00d5ff");
  ellipse(xPos*4.9, yPos*3.5, diam*0.4, diam*0.4)
  fill("#00b03b");
  ellipse(xPos*5, yPos*3.5, diam*0.1, diam*0.2)
  fill("#00b03b");
  ellipse(xPos*4.8, yPos*3.54, diam*0.15, diam*0.1)
  fill("#00b03b");
  ellipse(xPos*4.9, yPos*3.42, diam*0.2, diam*0.2)
  fill("#00b03b");
  ellipse(xPos*4.84, yPos*3.58, diam*0.1, diam*0.2)
  
//moon
  fill("#fff4c4");
  ellipse(xPos*4.9, yPos*3.1, diam*0.07, diam*0.07)
  
//mars
  fill("#ff512e");
  ellipse(xPos*5.5, yPos*3.5, diam*0.2, diam*0.2)
  
//jupiter
  fill("#9c6943");
  ellipse(xPos*7, yPos*3.5, diam*1, diam*1)
  fill("#bd7a48");
  ellipse(xPos*7.25, yPos*3.5, diam*0.25, diam*0.15)
    fill("#f0a46c");
  ellipse(xPos*7.25, yPos*3.5, diam*0.2, diam*0.1)
  
//saturn
  fill("#c79797");
  ellipse(xPos*8.1, yPos*3.5, diam*0.6, diam*0.6)
  noFill();
  stroke("#c178cf");
  strokeWeight(9);
  line(xPos*8.1, yPos*3, xPos*8.1, yPos*4)
  noFill();
  stroke("#8a6e8f");
  strokeWeight(4);
  line(xPos*8.1, yPos*3, xPos*8.1, yPos*4)

//uranus
  noStroke();
  fill("#b5c1ff");
  ellipse(xPos*9, yPos*3.5, diam*0.5, diam*0.5)
  
//neptune
  noStroke();
  fill("#2baaff");
  ellipse(xPos*9.8, yPos*3.5, diam*0.4, diam*0.4)

//ocean
  
  noStroke();
  fill("#0099ff");
  rect(xPos*10.8, 0, diam*1.2, diam*7)
  
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*0, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*1, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*2, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*3, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*4, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*5, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*6, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*10.8, yPos*7, diam*1, diam*1)
  
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*0, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*1, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*2, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*3, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*4, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*5, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*6, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*10.8, yPos*7, diam*0.7, diam*0.7)
  
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*0, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*1, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*2, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*3, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*4, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*5, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*6, diam*1, diam*1)
  noStroke();
  fill("#0099ff");
  ellipse(xPos*11.3, yPos*7, diam*1, diam*1)
  
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*0, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*1, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*2, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*3, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*4, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*5, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*6, diam*0.7, diam*0.7)
  noStroke();
  fill("#00477d");
  ellipse(xPos*11.3, yPos*7, diam*0.7, diam*0.7)
  
  noStroke();
  fill("#0099ff");
  rect(xPos*11.3, 0, diam*1.2, diam*7)
}