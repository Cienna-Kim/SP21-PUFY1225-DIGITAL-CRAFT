// runs once and setups the scene
function setup(){
	createCanvas (500, 500);
}

// runs forever
function draw(){
// table
	var rectWidth = 50;
	var rectHeight = 50;
	background("black");
	noStroke();
	fill("#002A42");
	rect(0, 400, 500, 100);
// perfume
	noStroke();
	fill("#505DFD");
	rect(180, 120, 140, 60);
	noStroke();
	fill("#030E94");
	rect(300, 120, 20, 60);
	noStroke();
	fill("#B4B4B4");
	rect(210, 180, 80, 40);
	noStroke();
	fill("#555555");
	rect(270, 180, 20, 40);
	noStroke();
	fill("#505DFD");
	rect(125, 220, 250, 220);
	noStroke();
	fill("#030E94");
	rect(355, 220, 20, 220);
// name sticker
	noStroke();
	fill("black");
	rect(170, 280, 140, 80);
// name deco
	strokeJoin(BEVEL);
	strokeWeight(4);
	stroke("#DC206A");
	fill("white");
	rect(230, 310, 20, 20);
	stroke("#DC206A");
	fill("white");
	rect(200, 310, 20, 20);
	stroke("#DC206A");
	fill("white");
	rect(260, 310, 20, 20);
// moon and moonbeam
	noStroke();
 	fill("#B9FFDC");
 	ellipse(15,15,240,240);
	noStroke();
 	fill("#ECFFF6");
 	ellipse(15,15,190,190);

}