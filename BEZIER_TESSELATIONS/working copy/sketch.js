let x, step;
let angle1, angle2;
let tiles = [];
let tran, tH, sW, sH;
let a, b, c, d, e, f;
let num;

function setup() {
  createCanvas(500, 300);

  // size of grid
  x = width / 100;
  // y = height / 100;
  //let area = x * y;
  // a = 3; b = 9 or a = 5; b = 15;
  a = 5;
  b = 20;
  sH = 3; // not sure this is doing anything ??
  num = 4;
  // acting like a measure of the diagonal (I think)
  d = 2;

  // Step size--if b > a get small curve in corner of tile
  step = b / a; // THIS WORKS!!

  // translate factor to start of new quad
  tran = d * a;

  // Angles for shear and rotate
  // shearA must be PI/4 currently
  shearA = PI / 4; //step; // shear angle still depends on angle
  rotA = PI; // rotate angle

  for (let i = 0; i < 4; i++) {

    //tile_original.js
    tiles.push(new Tile(step, tran, sH, shearA, rotA, a, b, num));
    //tile.js

    //tiles.push(new Tile(step, shearA, rotA, b, c, a, sH, tW));


  }
}

function draw() {
  background(255);
  //tiles[0].show();
  for (let i = 1; i < tiles.length; i++) {
    
    translate(b * d, b * d);
    //tiles[i].oneUnit();
    tiles[i].show();

    noStroke();
    fill(0, 255, 0);
    // circle(75, 60, 4);
  }
}