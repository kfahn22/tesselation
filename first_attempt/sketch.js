let x, step;
let angle1, angle2;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(255);
  x = height/100;
  step = height/100;
  angle1 = PI/4;
  angle2 = PI;
  
  stroke(71,59, 240);
  strokeWeight(3);
  noFill();
  for (j = 0; j < 10; j++){
    for (i = 0; i < 2; i++) {
      tesselateB(7*j+i,7*j+i);
      translate(9.5*step, 3.5*step);
      tesselateB(7*i,7*i);
  }
  }
  
}

function half(x, step) {
  push();
  beginShape();
    vertex(0,0);
    bezierVertex(3*step, -3*step, 5*step, 3*step, 8*step, 0);
    line(8*step, 0, 6*step, 3.5*step);
    line(6*step, 3.5*step, 8*step, 7*step);  
  endShape();
  pop();
}

function shape(x, step, angle1, angle2) {
  push();
  shearX(angle1);
  half(x, step);
  translate(8*step, 7*step);
  rotate(angle2);
  half(x,step);
  pop();
}

function tesselateA(a,b) {
  stroke(71, 59, 240);
  for (i = 0; i < 2; i++){
    push();
    translate(a*step*i,b*step*i);
    shape(x, step, PI/4, PI);
    // translate(b*step*i, a*step*i);
    // shape(x, step, PI/4, PI);
    pop();
  }
}

function tesselateB(a,b) {
  push();
  stroke(71, 59, 240);
  for (i = 0; i < 2; i++){
    push();
    tesselateA(7,7);
    pop();
    push();
    tesselateA(9.5,3.5);
    pop();
  }
  pop();
}
