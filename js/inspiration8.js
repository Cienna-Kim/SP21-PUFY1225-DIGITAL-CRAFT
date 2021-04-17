const ln = 100;
const xPos = 100;
const yPos = 100;
let g = 100;
function setup() {
  createCanvas(700, 700);
  noLoop();
  noStroke();
}

function draw() {
  background("#B9D3FF");
  
// circles 1
  
  fill (0, 0, 0)
  ellipse(xPos *0.5, yPos *0.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *2.5, yPos *0.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *4.5, yPos *0.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *6.5, yPos *0.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *0.5, yPos *2.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *2.5, yPos *2.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *4.5, yPos *2.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *6.5, yPos *2.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *0.5, yPos *4.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *2.5, yPos *4.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *4.5, yPos *4.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *6.5, yPos *4.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *0.5, yPos *6.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *2.5, yPos *6.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *4.5, yPos *6.5, ln, ln);
  
  fill (0, 0, 0)
  ellipse(xPos *6.5, yPos *6.5, ln, ln);
  
// big squares
  
  fill("#B9D3FF")
  rect(xPos *0.5, yPos *0.5, ln *2, ln *2)
  
  fill("#B9D3FF")
  rect(xPos *0.5, yPos *4.5, ln *2, ln *2)
  
  fill("#B9D3FF")
  rect(xPos *4.5, yPos *0.5, ln *2, ln *2)
  
  fill("#B9D3FF")
  rect(xPos *4.5, yPos *4.5, ln *2, ln *2)
  
// black
  
  fill(0, 0, 0)
  rect(xPos, yPos, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *3, yPos, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *5, yPos, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos, yPos *3, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *3, yPos *3, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *5, yPos *3, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos, yPos *5, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *3, yPos *5, ln, ln)
  
  fill(0, 0, 0)
  rect(xPos *5, yPos *5, ln, ln)
  
// sky blue
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos * 1.15, yPos * 1.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *3.15, yPos * 1.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *5.15, yPos * 1.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos * 1.15, yPos *3.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *3.15, yPos *3.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *5.15, yPos *3.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *1.15, yPos *5.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *3.15, yPos *5.15, ln *0.7, ln *0.7)
  
  fill(g *0.94, g *1.85, g *2.55)
  rect(xPos *5.15, yPos *5.15, ln *0.7, ln *0.7)
  
// blue-purple
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos * 1.275, yPos * 1.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *3.275, yPos * 1.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *5.275, yPos * 1.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos * 1.275, yPos *3.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *3.275, yPos *3.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *5.275, yPos *3.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *1.275, yPos *5.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *3.275, yPos *5.275, ln *0.45, ln *0.45)
  
  fill(g *0.41, 0, g *1.63)
  rect(xPos *5.275, yPos *5.275, ln *0.45, ln *0.45)

  
}