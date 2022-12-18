let x, y, step, grid;
let angle1, angle2;
let tiles = [];
let tW, tH, sW, sH;
let a, b;

function setup() {
  createCanvas(500, 300);

  // size of grid
  x = width / 100;
  y = height / 100;
  let area = x*y;
  
  a = 5;
  b = 15;

  // slide factor to start on side of quad
  sW = 9.5;
  sH = 3.5;

  // translate factor to start of new quad
  tW = 7;
  tH = 7;

  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle

  for (let i = 0; i < 10; i++) {
    push();
    
    tiles.push(new Tile(y, tW, sH, shearA, rotA, a, b));
    pop();
  }
}

function draw() {
  //background(0, 5, 0);
  background(255);
  tiles[0].show();
  for (let i = 1; i < tiles.length; i++) {
    translate(tW*y, tH*y);
    tiles[i].show();
  }

  // stroke(71, 59, 240);
  // strokeWeight(3);
  //noFill();
  // for (j = 0; j < 3; j++) { // adds a slider 
  //   for (i = 0; i < 1; i++) {
  //     tesselateB(tW * j + i, tH * j + i, sW * j + i, sH * j + i);
  //     translate(sW * x, sH * x);
  //     // tesselateB(tW*j+i,tH*j+i, sW*j+i, sH*j+i);
  //     tesselateB(tW * i, tH * i, sW * i, sH * i);
  //   }
  // }
  // // for (j = 0; j < 3; j+=(tW*x)) {
  // //tesselateA(tW*j,tH*j, sW);
  // for (i = 0; i < 3; i += (sW * x)) {
  //   // translate(sW*x, sH*x);
  //   tesselateB(tW * i, tH * i, sW * i, sH * i);
  //   // }
  // }

}

// function halfTile(x) {
//   push();
//   beginShape();
//   vertex(0, 0);
//   bezierVertex(3 * x, -3 * x, 5 * x, 3 * x, 8 * x, 0);
//   line(8 * x, 0, 6 * x, sH * x);
//   line(6 * x, sH * x, 8 * x, 7 * x);
//   endShape();
//   pop();
// }

// function tile(x, shearA, rotA) {
//   push();
//   shearX(shearA);
//   halfTile(x);
//   translate(8 * x, 7 * x);
//   rotate(rotA);
//   halfTile(x);
//   pop();
// }

function tesselateA(a, b) {
  stroke(71, 59, 240);
  for (i = 0; i < 1; i++) {
    push();
    translate(a * x * i, b * x * i);
    tile(x, PI / 4, PI);
    pop();
  }
}

function tesselateB(a, b, c, d) {
  push();
  stroke(71, 59, 240);
  for (i = 0; i < 2; i++) {
    push();
    tesselateA(a, b);
    tesselateA(c, d);
    pop();
  }
  pop();
}