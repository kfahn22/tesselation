let x, y, step, grid;
let angle1, angle2;
let tiles = [];
let tW, tH, sW, sH;
let a, b, c, d, e, f;

function setup() {
  createCanvas(500, 300);

  // size of grid
  //x = width / 100;
  //y = height / 100;
  //let area = x * y;
  
  // working parameters
  // screws up a bit when changed
  // a = 4;
  // b = 8;
  // c = a + b;
  // d = 5;
  // e = 10;

  a = 4;
  b = 8;
  y = b/a; // arrived at by trial and error
  c = a + b;
  d = 2;
  e = 10;


  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle
  //for (let i = 0; i < height/(b*y); i++) {
  for (let i = 0; i < 20; i++) {
    {
      tiles.push(new Tile(y, shearA, rotA, a, b, c, d, e, 9));
    }

  }
}

function draw() {
  //background(0, 5, 0);
  background(255);
  noStroke();
  fill(0, 255, 0);
  circle(35, 14, 4);
 
    for (let i = 0; i < tiles.length; i++) 
    {
      tiles[i].oneUnit();
    }
  //}
}