let x, y, step, grid;
let angle1, angle2;
let tiles = [];
let tW, tH, sW, sH;
let a, b, c, d, e, f;

const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(500, 300);
  // working parameters
  // screws up a bit when changed
  
  //TODO:  work on adding animation changing d or e
  a = 4;
  b = 8;
  y = b/a; // arrived at by trial and error
  c = a + b;
  d = 5;
  e = 10;


  // Angles for shear and rotate
  shearA = PI / 4; // shear angle
  rotA = PI; // rotate angle
  for (let i = 0; i < 50; i++) {
    {
      tiles.push(new Tile(y, shearA, rotA, a, b, c, d, e, 50));
    }

  }
}

function draw() {
  let c2 = color('#66D334');
  let c1 = color('#70327E');
  let  col2 = setGradientL(0, 0, 400, 450, c2, c1, X_AXIS);
  let  col3 = setGradientR(400, 0, 750, 450, c1, c2, X_AXIS);
 
  stroke(255);
  //tiles[0].tile();
  translate(-800, -500);
    for (let i = 0; i < tiles.length; i++) 
    {
      //tiles[0].tile();
      tiles[i].oneUnit();
    }
  //}
}

function setGradientL(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0.0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function setGradientR(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0.0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0,1.75);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

