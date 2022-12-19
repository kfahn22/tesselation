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
  a = 3;
  b = 10;
  // c = a + b
  d = 5;
  e = 10;
 

  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle
  //for (let i = 0; i < height/(b*y); i++) {
  for (let i = 0; i < 4; i++) {
    push(); {
      tiles.push(new Tile(y, shearA, rotA, a, b, d, e));
    }
    pop();

  }
}

function draw() {
  //background(0, 5, 0);
  background(255);
  noStroke();
  fill(0, 255, 0);
  circle(75, 60, 20);
  tiles[0].show();
  for (let j = 0; j < tiles.length; j++) {
    //translate((2*(a)) * (d), d * d);
    tiles[j].show();
    // for (let i = 1; i < tiles.length; i++) {
    //   translate(b * d, b * d);
    //   tiles[i].show();
      // pop();

    }
  }