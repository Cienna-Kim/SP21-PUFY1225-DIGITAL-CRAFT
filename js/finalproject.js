let x, y;

let yoff = 0.0;

const diam = 100;
const xPos = 100;
const yPos = 100;

const sunSize = 400;
const sunX = 0;
const sunY = 350;

const merSize = 20;
let merSpeed = 0.03;
let merAngle = 0;
let merRadius = 300;

const venSize = 30;
let venSpeed = 0.01;
let venAngle = 0;
let venRadius = 340;

const earthSize = 40;
let speed = 0.008;
let angle = 0;
let radius = 400;

const moonSize = 3;
let moonSpeed = 0.1;
let moonAngle = 0;
let moonRadius = 30;

const marsSize = 20;
let marsSpeed = 0.004;
let marsAngle = 0;
let marsRadius = 450;

const jupSize = 100;
let jupSpeed = 0.01;
let jupAngle = 0;
let jupRadius = 600;

const ioSize = 5;
let ioSpeed = 0.07;
let ioAngle = 0;
let ioRadius = 60;

const eurSize = 6;
let eurSpeed = 0.05;
let eurAngle = 0;
let eurRadius = 70;

const ganSize = 8;
let ganSpeed = 0.04;
let ganAngle = 0;
let ganRadius = 80;

const callSize = 6;
let callSpeed = 0.03;
let callAngle = 0;
let callRadius = 75;

const satSize = 80;
let satSpeed = 0.004;
let satAngle = 0;
let satRadius = 750;

const titanSize = 9;
let titanSpeed = 0.02;
let titanAngle = 0;
let titanRadius = 70;

const rheaSize = 4;
let rheaSpeed = 0.01;
let rheaAngle = 0;
let rheaRadius = 60;

const mimSize = 3;
let mimSpeed = 0.005;
let mimAngle = 0;
let mimRadius = 65;

const uraSize = 70;
let uraSpeed = 0.003;
let uraAngle = 0;
let uraRadius = 890;

const ariSize = 5;
let ariSpeed = 0.01;
let ariAngle = 0;
let ariRadius = 65;

const obeSize = 3;
let obeSpeed = 0.003;
let obeAngle = 0;
let obeRadius = 55;

const nepSize = 60;
let nepSpeed = 0.002;
let nepAngle = 0;
let nepRadius = 1000;

function setup() {
  createCanvas(1200, 700);
  x1 = width / 2;
  y1 = height;
  x2 = width / 4;
  y2 = height / 3;
  x3 = width / 1.5;
  y3 = height / 2;
  // noLoop();
  noStroke();
}


function draw() {
    background(0);
  
// shooting star

  stroke(50);
  noStroke();
  fill(random(0, 200), random(100, 200), random(200, 255), 255);
  ellipse(x1, y1, 8, 8);

  y1 = y1 - 2;
  
  if (y1 < 0) {
    y1 = height;
  }

  stroke(50);
  noStroke();
  fill(random(100, 200), random(0, 200), random(0, 255), 200);
  ellipse(x2, y2, 12, 12);

  y2 = y2 - 8;
  
  if (y2 < 0) {
    y2 = height;
  }
  
  stroke(50);
  noStroke();
  fill(random(0, 200), random(50, 200), random(0, 255), 225);
  ellipse(x3, y3, 12, 12);

  y3 = y3 - 5;
  
  if (y3 < 0) {
    y3 = height;
  }
  
//orbits

  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*6, diam*6)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*6.8, diam*6.8)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*8, diam*8)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*9, diam*9)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*12, diam*12)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*15, diam*15)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*17.8, diam*17.8)
  
  noFill();
  stroke(random(100, 200), 0, random(150, 225), 100);
  strokeWeight(4);
  ellipse(0, yPos*3.5, diam*20, diam*20)
  
// solar
  
  noStroke();
  fill(random(100, 200), 0, random(0, 100), 180);
  ellipse(0, yPos*3.5, diam*4.6, diam*4.6)
  noStroke();
  fill("#ff4262");
  ellipse(0, yPos*3.5, diam*4.2, diam*4.2)
  noStroke();
  fill("#e30075");
  ellipse(sunX, sunY, sunSize);
  
  fill("#b5b5b5");
  let merX = sunX + merRadius * cos(merAngle);
  let merY = sunY + merRadius * sin(merAngle);
  ellipse(merX, merY, merSize);
  merAngle += merSpeed;
  
  fill("#ffb282");
  let venX = sunX + venRadius * cos(venAngle);
  let venY = sunY + venRadius * sin(venAngle);
  ellipse(venX, venY, venSize);
  venAngle += venSpeed;
  
  fill("#00d5ff");
  let earthX = sunX + radius * cos(angle);
  let earthY = sunY + radius * sin(angle);
  ellipse(earthX, earthY, earthSize);
  angle += speed;
  
  fill("#fff5d9");
  let moonX = earthX + moonRadius * cos(moonAngle);
  let moonY = earthY + moonRadius * sin(moonAngle);
  ellipse(moonX, moonY, moonSize);
  moonAngle += moonSpeed;
  
  fill("#ff512e");
  let marsX = sunX + marsRadius * cos(marsAngle);
  let marsY = sunY + marsRadius * sin(marsAngle);
  ellipse(marsX, marsY, marsSize);
  marsAngle += marsSpeed;
  
  fill("#9c6943");
  let jupX = sunX + jupRadius * cos(jupAngle);
  let jupY = sunY + jupRadius * sin(jupAngle);
  ellipse(jupX, jupY, jupSize);
  jupAngle += jupSpeed;
  
  fill("#d9d500");
  let ioX = jupX + ioRadius * cos(ioAngle);
  let ioY = jupY + ioRadius * sin(ioAngle);
  ellipse(ioX, ioY, ioSize);
  ioAngle += ioSpeed;
  
  fill("#d6d6d4");
  let eurX = jupX + eurRadius * cos(eurAngle);
  let eurY = jupY + eurRadius * sin(eurAngle);
  ellipse(eurX, eurY, eurSize);
  eurAngle += eurSpeed;
  
  fill("#ba783d");
  let ganX = jupX + ganRadius * cos(ganAngle);
  let ganY = jupY + ganRadius * sin(ganAngle);
  ellipse(ganX, ganY, ganSize);
  ganAngle += ganSpeed;
  
  fill("#4c85ad");
  let callX = jupX + callRadius * cos(callAngle);
  let callY = jupY + callRadius * sin(callAngle);
  ellipse(callX, callY, callSize);
  callAngle += callSpeed;
  
  fill("#c79797");
  let satX = sunX + satRadius * cos(satAngle);
  let satY = sunY + satRadius * sin(satAngle);
  ellipse(satX, satY, satSize);
  satAngle += satSpeed;
  
  fill("#8c8c8c");
  let titanX = satX + titanRadius * cos(titanAngle);
  let titanY = satY + titanRadius * sin(titanAngle);
  ellipse(titanX, titanY, titanSize);
  titanAngle += titanSpeed;
  
  fill("#e6e7e8");
  let rheaX = satX + rheaRadius * cos(rheaAngle);
  let rheaY = satY + rheaRadius * sin(rheaAngle);
  ellipse(rheaX, rheaY, rheaSize);
  rheaAngle += rheaSpeed;
  
  fill("#c2c3c4");
  let mimX = satX + mimRadius * cos(mimAngle);
  let mimY = satY + mimRadius * sin(mimAngle);
  ellipse(mimX, mimY, mimSize);
  mimAngle += mimSpeed;
  
  fill("#b5c1ff");
  let uraX = sunX + uraRadius * cos(uraAngle);
  let uraY = sunY + uraRadius * sin(uraAngle);
  ellipse(uraX, uraY, uraSize);
  uraAngle += uraSpeed;
  
  fill("#e6eef7");
  let ariX = uraX + ariRadius * cos(ariAngle);
  let ariY = uraY + ariRadius * sin(ariAngle);
  ellipse(ariX, ariY, ariSize);
  ariAngle += ariSpeed;
  
  fill("#d9fff9");
  let obeX = uraX + obeRadius * cos(obeAngle);
  let obeY = uraY + obeRadius * sin(obeAngle);
  ellipse(obeX, obeY, obeSize);
  obeAngle += obeSpeed;
  
  fill("#2baaff");
  let nepX = sunX + nepRadius * cos(nepAngle);
  let nepY = sunY + nepRadius * sin(nepAngle);
  ellipse(nepX, nepY, nepSize);
  nepAngle += nepSpeed;
  
 // korean text
  
  text('당신의 사랑은 시공을 초월하는 광활한 바다와도 같아요.', 100, 650, 1000, 500)
  textSize(15);
  textAlign(CENTER);
  fill("#b0c2ff");
  
// ocean

  fill(40, 70, 150, 150);

  beginShape();

  let xoff = 0;

  for (let x = 0; x <= width; x += 10) {

    let y = map(noise(xoff, yoff), 1, 0, 650, 550);

    vertex(x, y);

    xoff += 0.02;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
   
}