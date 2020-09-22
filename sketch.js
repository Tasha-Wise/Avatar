let angleHat;
let mic;
let bamYes = false;
let x = 0
let bubbles =[];

function setup() {

  console.log(angleHat);
 

  createCanvas(400, 400);

  angleMode(DEGREES);
  
  for (let i =0; i < 100; i++){
    
  bubbles[i] = new Bubble(random(width), random(height));
  
  }
  
  mic = new p5.AudioIn();
  mic.start();
  
  
  bgColor = random (255); 

  
 
}


function draw() {
  background(bgColor);
  console.log("mic level" + mic.getLevel());

  micLevel = mic.getLevel();

  angleHat = map(mic.getLevel(), 0, .1, 0, 360);
  console.log(angleHat);
  
  
  for (let i =0; i < 100; i++){
    
   bubbles[i].display();
  
  bubbles[i].move();
  
  }
 
  
 





  drawHair(); 
  drawNeck();
  drawLegs();
  drawHands();
  drawBody();
  drawDress();
  drawFeet();
  drawArm();
  drawBang();
  drawHat(angleHat); //parameter = angle rotation  

  //   if (bamYes == true) {
  //     circle(width / 2, height / 2, 100);


     //rect(width * .4, height * .05, width * .4, height * .3);
  //   } {
 x += 3
  fill (255, 255, 255)
  ellipse (100, x, 50, 50);
//if it leaves the screen return it to the start
  if(x > 400 + 50) {
    x = -50/2
}

function drawHair() {
  
  
  //draw hair
  fill(255, 0, 0)
  beginShape();
  vertex(width * .35, height * .45);
  vertex(width * .6, height * .3);
  vertex(width * .73, height * .8);
  endShape(CLOSE);
 
}



function drawHat(angle) {

  push();
  translate(100);
  rotate(angle);
  //hatbase
  fill(180, 0, 255)
  ellipse(218, 108, 110, 60);

  //hatpoint
  beginShape();
  vertex(width * .5, height * .25);
  vertex(width * .55, height * .1);
  vertex(width * .6, height * .25);
  endShape(CLOSE);
  pop();
}

function drawBody() {
  //bodyhead
  fill(255, 240, 232)

  circle(175, 195, 28);

  circle(225, 195, 28);


  circle(200, 210, 38);


  circle(200, 150, 70);


}

function drawNeck() {
  //neck
  fill(255, 240, 232)
  beginShape();
  vertex(width * .48, height * .48);
  vertex(width * .48, height * .45);
  vertex(width * .52, height * .45);
  vertex(width * .52, height * .48);
  endShape(CLOSE);
}

function drawLegs() {
  //legs
  fill(255, 240, 232)
  beginShape();
  vertex(width * .45, height * .8);
  vertex(width * .45, height * .95);
  vertex(width * .48, height * .95);
  vertex(width * .48, height * .8);
  endShape(CLOSE);

  fill(255, 240, 232)
  beginShape();
  vertex(width * .52, height * .8);
  vertex(width * .52, height * .95);
  vertex(width * .55, height * .95);
  vertex(width * .55, height * .8);
  endShape(CLOSE);
}

function drawHands() {
  //hands
  fill(255, 240, 232)
  beginShape();
  vertex(width * .3, height * .72);
  vertex(width * .31, height * .66);
  vertex(width * .35, height * .7);
  endShape(CLOSE);

  fill(255, 240, 232)
  beginShape();
  vertex(width * .66, height * .7);
  vertex(width * .71, height * .66);
  vertex(width * .72, height * .72);
  endShape(CLOSE);
}

function drawDress() {
  //dress
  fill(180, 0, 255)
  beginShape();
  vertex(width * .40, height * .8);
  vertex(width * .48, height * .63);
  vertex(width * .45, height * .53);
  vertex(width * .55, height * .53);
  vertex(width * .52, height * .63);
  vertex(width * .6, height * .8);
  endShape(CLOSE);
}

function drawFeet() {
  //leftfoot
  fill(180, 0, 255)
  beginShape();
  vertex(width * .45, height * .95);
  vertex(width * .47, height * .98);
  vertex(width * .48, height * .95);
  endShape(CLOSE);

  //rightfoot
  fill(180, 0, 255)
  beginShape();
  vertex(width * .52, height * .95);
  vertex(width * .54, height * .98);
  vertex(width * .55, height * .95);
  endShape(CLOSE);
}

function drawArm() {
  //leftarm
  fill(180, 0, 255)
  beginShape();
  vertex(width * .31, height * .66);
  vertex(width * .4, height * .5);
  vertex(width * .45, height * .52);
  vertex(width * .35, height * .7);
  endShape(CLOSE);

  //rightarm
  fill(180, 0, 255)
  beginShape();
  vertex(width * .7, height * .67);
  vertex(width * .6, height * .51);
  vertex(width * .55, height * .52);
  vertex(width * .66, height * .7);
  endShape(CLOSE);
}

function drawBang() {
  //rightbang
  fill(255, 0, 0)
  beginShape();
  vertex(width * .6, height * .25);
  vertex(width * .52, height * .28);
  vertex(width * .63, height * .5);
  endShape(CLOSE);

  //leftbang
  fill(255, 0, 0)
  beginShape();
  vertex(width * .28, height * .55);
  vertex(width * .5, height * .2);
  vertex(width * .58, height * .28);
  endShape(CLOSE);
}
}

function mousePressed() {
  bgColor = random (255); 
}