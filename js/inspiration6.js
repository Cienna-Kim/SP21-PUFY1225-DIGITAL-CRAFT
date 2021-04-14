const diam = 100;
const xPos = 50;
const yPos = 50;
function setup() {
  createCanvas(400, 500);
  noLoop();
  noFill();
  strokeWeight(4);
  stroke("#c4b5f0");
}

function draw() {
  background("#001c5c");
  
  ellipse(xPos *1, 0, diam, diam);
  ellipse(xPos *3, 0, diam, diam);
  ellipse(xPos *5, 0, diam, diam);
  ellipse(xPos *7, 0, diam, diam);

  ellipse(0, yPos, diam, diam);
  ellipse(xPos *2, yPos, diam, diam);
  ellipse(xPos *4, yPos, diam, diam);
  ellipse(xPos *6, yPos, diam, diam);
  ellipse(xPos *8, yPos, diam, diam);
  
  ellipse(xPos *1, yPos *2, diam, diam);
  ellipse(xPos *3, yPos *2, diam, diam);
  ellipse(xPos *5, yPos *2, diam, diam);
  ellipse(xPos *7, yPos *2, diam, diam);
  
  ellipse(0, yPos *3, diam, diam);
  ellipse(xPos *2, yPos *3, diam, diam);
  ellipse(xPos *4, yPos *3, diam, diam);
  ellipse(xPos *6, yPos *3, diam, diam);
  ellipse(xPos *8, yPos *3, diam, diam);
  
  ellipse(xPos *1, yPos *4, diam, diam);
  ellipse(xPos *3, yPos *4, diam, diam);
  ellipse(xPos *5, yPos *4, diam, diam);
  ellipse(xPos *7, yPos *4, diam, diam);
  
  ellipse(0, yPos *5, diam, diam);
  ellipse(xPos *2, yPos *5, diam, diam);
  ellipse(xPos *4, yPos *5, diam, diam);
  ellipse(xPos *6, yPos *5, diam, diam);
  ellipse(xPos *8, yPos *5, diam, diam);
  
  ellipse(xPos *1, yPos *6, diam, diam);
  ellipse(xPos *3, yPos *6, diam, diam);
  ellipse(xPos *5, yPos *6, diam, diam);
  ellipse(xPos *7, yPos *6, diam, diam);
  
  ellipse(0, yPos *7, diam, diam);
  ellipse(xPos *2, yPos *7, diam, diam);
  ellipse(xPos *4, yPos *7, diam, diam);
  ellipse(xPos *6, yPos *7, diam, diam);
  ellipse(xPos *8, yPos *7, diam, diam);
  
  ellipse(xPos *1, yPos *8, diam, diam);
  ellipse(xPos *3, yPos *8, diam, diam);
  ellipse(xPos *5, yPos *8, diam, diam);
  ellipse(xPos *7, yPos *8, diam, diam);
  
  ellipse(0, yPos *9, diam, diam);
  ellipse(xPos *2, yPos *9, diam, diam);
  ellipse(xPos *4, yPos *9, diam, diam);
  ellipse(xPos *6, yPos *9, diam, diam);
  ellipse(xPos *8, yPos *9, diam, diam);
  
  ellipse(xPos *1, yPos *10, diam, diam);
  ellipse(xPos *3, yPos *10, diam, diam);
  ellipse(xPos *5, yPos *10, diam, diam);
  ellipse(xPos *7, yPos *10, diam, diam);
  
// horizontal lines
  line(0, yPos, 400, yPos)
  line(0, yPos *2, 400, yPos *2)
  line(0, yPos *3, 400, yPos *3)
  line(0, yPos *4, 400, yPos *4)
  line(0, yPos *5, 400, yPos *5) 
  line(0, yPos *6, 400, yPos *6)
  line(0, yPos *7, 400, yPos *7)
  line(0, yPos *8, 400, yPos *8)
  line(0, yPos *9, 400, yPos *9)  

// vertical
  line(xPos, 0, xPos, 500)
  line(xPos *2, 0, xPos *2, 500)
  line(xPos *3, 0, xPos *3, 500)
  line(xPos *4, 0, xPos *4, 500)
  line(xPos *5, 0, xPos *5, 500)
  line(xPos *6, 0, xPos *6, 500)
  line(xPos *7, 0, xPos *7, 500)
}