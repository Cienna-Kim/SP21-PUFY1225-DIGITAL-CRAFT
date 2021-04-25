const diam = 100;
const xPos = 100;
const yPos = 100;
let g = 100;
function setup() {
  createCanvas(600, 600);
  noLoop();
  noFill();
  strokeWeight(4);
  stroke("black");
}

function draw() {
  background("#ffebd6");
  
//line
  
  line(xPos *1, 0, xPos, yPos *2)
  line(0, yPos *1, xPos *2, yPos)
  line(xPos *5, 0, xPos*5, yPos *2)
  line(xPos *4, yPos, xPos*6, yPos)
  
  line(xPos *2, yPos *3, xPos *4, yPos *3)
  line(xPos *3, yPos *2, xPos*3, yPos *4)

  line(xPos *1, yPos *4, xPos *1, yPos *6)
  line(0, yPos *5, xPos *2, yPos *5)
  line(xPos *5, yPos *4, xPos *5, yPos *6)
  line(xPos *4, yPos *5, xPos*6, yPos *5)
  
  line(0, 0, xPos *6, yPos *6)
  line(xPos *6, 0, 0, yPos *6)
  
  
//ellipse
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
}