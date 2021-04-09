// runs once and setups the scene
function setup(){
	createCanvas (800, 400);
}

// runs forever
function draw(){
// cliff
	var rectWidth = 50;
	var rectHeight = 50;
	background("#00AFCE");
	noStroke();
	fill("#001960");
	rect(0, 300, 350, 100);

// boat
	fill("#E6E6E6");
	beginShape();
	vertex(400, 250);
	vertex(750, 250);
	vertex(680, 350);
	vertex(470, 350);
	endShape(CLOSE);

// sail
	fill("#840050");
	beginShape();
  	vertex(575, 50);
	vertex(575, 250);
	vertex(650, 250);
	endShape(CLOSE);

	fill("#C495FF");
	beginShape();
  	vertex(575, 50);
	vertex(575, 220);
	vertex(500, 220);
	endShape(CLOSE);

// waves
	noStroke();
 	fill("#002DAD");
 	ellipse(375,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(375,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(375,350,30,30);

 	noStroke();
 	fill("#002DAD");
 	ellipse(425,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(425,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(425,350,30,30);

 	noStroke();
 	fill("#002DAD");
 	ellipse(475,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(475,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(475,350,30,30);

 	noStroke();
 	fill("#002DAD");
 	ellipse(525,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(525,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(525,350,30,30);

  	noStroke();
 	fill("#002DAD");
 	ellipse(575,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(575,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(575,350,30,30);

 	noStroke();
 	fill("#002DAD");
 	ellipse(625,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(625,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(625,350,30,30);

   	noStroke();
 	fill("#002DAD");
 	ellipse(675,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(675,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(675,350,30,30);

 	noStroke();
 	fill("#002DAD");
 	ellipse(725,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(725,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(725,350,30,30);

  	noStroke();
 	fill("#002DAD");
 	ellipse(775,350,50,50);
 	noStroke();
 	fill("#4A79FF");
 	ellipse(775,350,40,40);
  	noStroke();
 	fill("#A4BCFF");
 	ellipse(775,350,30,30);

	noStroke();
	fill("#002DAD");
	rect(350, 350, 450, 50);

	// buildings

	noStroke();
	fill("#7F50FF");
	rect(30, 80, 130, 220);

	noStroke();
	fill("#2556BF");
	rect(170, 60, 130, 240);

	// windows building 1

	noStroke();
	fill("#E1EBFF");
	rect(56, 110, 18, 190);

	noStroke();
	fill("#E1EBFF");
	rect(86, 110, 18, 190);

	noStroke();
	fill("#E1EBFF");
	rect(116, 110, 18, 190);

	// windows building 2

	noStroke();
	fill("#E1EBFF");
	rect(196, 100, 18, 200);

	noStroke();
	fill("#E1EBFF");
	rect(226, 100, 18, 200);

	noStroke();
	fill("#E1EBFF");
	rect(256, 100, 18, 200);

	// window cover 1

	noStroke();
	fill("#7F50FF");
	rect(30, 160, 130, 20);

	noStroke();
	fill("#7F50FF");
	rect(30, 230, 130, 20);

	// window cover 2

	noStroke();
	fill("#2556BF");
	rect(170, 135, 130, 20);

	noStroke();
	fill("#2556BF");
	rect(170, 190, 130, 20);

	noStroke();
	fill("#2556BF");
	rect(170, 245, 130, 20);




}