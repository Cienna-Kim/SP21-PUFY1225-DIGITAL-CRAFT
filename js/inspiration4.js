const diam = 100;
const xPos = 140;
const yPos = 130;
let g = 40;
function setup() {
  createCanvas(500, 500);
  noLoop();
  noStroke();
}

function draw() {
  background("#48C8FF");
  
  fill (g, g, g)
  	beginShape();
  	vertex(120, 120);
	vertex(160, 160);
	vertex(155, 165);
  	vertex(115, 125);
	endShape(CLOSE);
  
  fill (0, g, 0)
  	beginShape();
  	vertex(120, 15);
    vertex(80, 120);
	vertex(120, 125);
	endShape(CLOSE);
  
  // row 1
  
  fill (g, 0, g)
  ellipse(xPos - 40, yPos + 120, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos, yPos + 80, diam, diam);
  
  fill (g, 0, g)
  ellipse(xPos + 40, yPos + 40, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos + 80, yPos, diam, diam);
  
  fill (g, 0, g)
  ellipse(xPos + 120, yPos - 40, diam, diam);
  
    // row 2
  
  fill (g, 0, g)
  ellipse(xPos + 20, yPos + 160, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos + 60, yPos + 120, diam, diam);
  
  fill (g, 0, g)
  ellipse(xPos + 100, yPos + 80, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos + 140, yPos + 40, diam, diam);
  
    // row 3
    
  fill (g, 0, g)
  ellipse(xPos + 80, yPos + 200, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos + 120, yPos + 160, diam, diam);
  
  fill (g, 0, g)
  ellipse(xPos + 160, yPos + 120, diam, diam);
    
    // row 4
    
  fill (g, 0, g)
  ellipse(xPos + 140, yPos + 240, diam, diam);
  
  fill (0, 0, g)
  ellipse(xPos + 180, yPos + 200, diam, diam);
  
    // row 5
    
  fill (g, 0, g)
  ellipse(xPos + 200, yPos + 280, diam, diam);
  
  
}