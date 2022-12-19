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
  let area = x * y;
  // a = 5; a = 15;
  a = 4;
  b = 8;
  c = a + b;
  d = 5;
  e = 10;


  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle
  //for (let i = 0; i < height/(b*y); i++) {
  for (let i = 0; i < 4; i++) {
    {
      tiles.push(new Tile(y, shearA, rotA, a, b, c, d, e));
    }

  }
}

function draw() {
  //background(0, 5, 0);
  background(255);
  noStroke();
  fill(0, 255, 0);
  circle(35, 14, 4);
  //tiles[0].showOne();
  for (let j = 0; j < tiles.length; j++) {
   
    //tiles[j].showTwo(b*x, e*x);

    // 35, 15
    push();
    tiles[j].tileGlide((2*a+d)*y, d*y);
    pop();
  }
}