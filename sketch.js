/// <reference path="./p5.global-mode.d.ts" />

penisMode = false
heartTimerIsOn = false;
heartTimer = 0.0;
heartScale = 1;
var background;
var multipleHearts;
heartRotation = 0;

function setup() {
  width = screen.height;
  height = screen.width;
  createCanvas(height, width);
  frameRate = 120;
  multipleHearts = createGraphics(width, height);
  background = createGraphics(width, height);
  background.background(0);
  noCursor();
  rectMode(CENTER);
}


function draw() {
  if(heartTimerIsOn == true) {
    heartTimer += 0.01
    heartScale += heartTimer
  }
  image(background, 0, 0)
  image(multipleHearts, 0, 0)
  cursorHeartDraw(mouseX,mouseY,heartScale);
}

function mousePressed() {
  heartTimerIsOn = true;
}

function mouseReleased() {
  heartTimerIsOn = false
  HeartDraw(mouseX,mouseY,heartScale)
  heartScale = 1
  heartTimer = 0
}

function cursorHeartDraw(x,y,scale) {
  strokeCap(ROUND)
  stroke(255)
  strokeWeight(scale*2)
  noFill()
  translate(x, y)
  rotate(radians(-heartRotation))

  if(penisMode == false) {
    beginShape()
    for (a = 0; a < TWO_PI; a+=0.01) {
      r = scale
      x = (16*scale) * pow(sin(a),3)
      y = r * -1*(13*cos(a) - (5*cos(2*a)) - (2*cos(3*a)) - cos(4*a))
      vertex(x,y)
    }
    endShape()
  }

  if (penisMode == true) {
    translate(0, -15 * scale)
    arc(0, 0, 10*scale, 10*scale, PI, 2 * PI);
    translate(0, +15 * scale)
    beginShape()
    vertex(5 * scale, 5 * scale)
    vertex(5 * scale, -15*scale)
    vertex(0, - 15 * scale)
    vertex(0, - 20 * scale)
    vertex(0, - 15 * scale)
    vertex(-5 * scale, - 15 * scale)
    vertex(-5 * scale, + 5 * scale)
    endShape()
    circle(5 * scale, 10 * scale, 10 * scale)
    circle(-5 * scale, 10 * scale, 10 * scale)
  }

}

function HeartDraw(x,y,scale) {
  multipleHearts.stroke(random(0,255),random(0,255),random(0,255))
  multipleHearts.strokeWeight(scale)
  multipleHearts.fill(random(0,255),random(0,255),random(0,255))
  multipleHearts.translate(x,y)
  multipleHearts.rotate(radians(-heartRotation))

  if (penisMode == false) {
    multipleHearts.beginShape()
    for (a = 0; a < TWO_PI; a+=0.01) {
      r = scale
      vertX = (16*scale) * pow(sin(a),3)
      vertY = r * -1*(13*cos(a) - (5*cos(2*a)) - (2*cos(3*a)) - cos(4*a))
      multipleHearts.vertex(vertX,vertY)
    }
    multipleHearts.endShape()
  }

  if (penisMode == true) {
    multipleHearts.translate(0, -15 * scale)
    multipleHearts.arc(0, 0, 10*scale, 10*scale, PI, 2 * PI);
    multipleHearts.translate(0, +15 * scale)
    multipleHearts.beginShape()
    multipleHearts.vertex(5 * scale, 10 * scale)
    multipleHearts.vertex(5 * scale, -15*scale)
    multipleHearts.vertex(0, - 15 * scale)
    multipleHearts.vertex(0, - 20 * scale)
    multipleHearts.vertex(0, - 15 * scale)
    multipleHearts.vertex(-5 * scale, - 15 * scale)
    multipleHearts.vertex(-5 * scale, + 10 * scale)
    multipleHearts.endShape()
    multipleHearts.circle(5 * scale, 10 * scale, 10 * scale)
    multipleHearts.circle(-5 * scale, 10 * scale, 10 * scale)
  }

  multipleHearts.rotate(radians(heartRotation))
  multipleHearts.translate(-x,-y)
}

function mouseWheel(event) {
  if (event.delta > 0) {
    heartRotation += 10
  }
  else {
    heartRotation -= 10
  }
}

function keyPressed() {
  if (key === 'p') {
    if (penisMode == false) {
      penisMode = true
    }
    else if (penisMode == true) {
      penisMode = false
    }
  }
}