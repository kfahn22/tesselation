// Generic tesselation algorithm
// Note that the sketch does not respond well to dynamic changes in the parameters, especially shear angle

let tiles = [];
let sc = 50;
// scX and scY need to be equal for tesselation
// let scX = 100;
// let scY = 100;
let col;
let a = 0.25,
    b = 0.4,
    c = 0.4,
    d = 0.4;

function mousePressed() {
    save('tess.jpg');
}

function setup() {
    let canvas = createCanvas(450, 450);
    canvas.position(25,25);
    rectMode(CENTER);
    let sh = 0;
    // let a = 0.4,
    //     b = 0.4,
    //     c = 0.4,
    //     d = 0.4;
    // need an odd number!!
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            col = color(random(255), 0, random(255));
            tiles.push(new Tile(i * sc, j * sc, sc, sc, a, b, c, d, col, sh));
        }
    }
}

function draw() {
    background(0);
   
    translate(sc/2, sc/2);
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].basic();
    }
}