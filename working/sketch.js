let x, y, step, grid;
let angle1, angle2;
let tiles = [];
let tW, tH, sW, sH;
let a, b, c, d, e, f;

function setup() {
  createCanvas(500, 300);

  // size of grid
  x = width / 100;
  y = height / 100;
  let area = x*y;
  // a = 5; a = 15;
  a = 5;
  b = 15;
  let c = b/a;  // 3

  // slide factor to start on side of quad
  // sW = 9.5;
  // sH = 3.5;

  sW = 10;
  sH = 5;
  d = 4; // can adjust this not b
  e = 2;
  f = d*e;

  // translate factor to start of new quad
  tW = d*sH;
  tH = e*sH;
  // tW = 4*sH;
  // tH = 2*sH;
  // tW = 14;
  // tH = 2*sH;

  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle

  for (let i = 0; i < height/(b*y); i++) {
    push();
    if (i % 2 == 0) 
    {tiles.push(new Tile(y, tW, sH, shearA, rotA, a, b));}
    else {
      //translate(tW+sW, 40 + sH*x);
     // tiles.push(new Tile(y, tW + sW, tH + sH, shearA, rotA, a, b));
    }
    pop();
    
  }
}

function draw() {
  //background(0, 5, 0);
  background(255);
  tiles[0].show();
  for (let i = 1; i < 5; i++) {
   // for (let i = 1; i < tiles.length; i++) {
    // push();
    // translate(b*d, b*d); 
    // tiles[i].show();
    // pop();
    // push();
    translate(b*d,b*d);
    tiles[i].show();
    pop();
    noStroke();
    fill(0,255,0);
    circle(75,60,4);
  }

  

}


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