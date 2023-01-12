let w = 100;
let h = 100;
let step = 100;
let a, b, c, d, e, f;
let tiles = [];
let frames = 60;
let angle = 0;

function setup() {
    createCanvas(400, 400);
    a = 0.5;
    b = 0.5;
    c = 0.25;
    d = 0.25;
    e = 0.25;
    f = 0.25;
    for (let i = 0; i < 2; i++)
        for (let j = 0; j < 2; j++) {
            {
                tiles.push(new Tile(w * i, h * j, a, b, c, d, e, f));
            }
        }
}

function draw() {
    background(59);
    //let ang1 = radians(angle);
    rectMode(CENTER);
    //angleMode(DEGREES);
    translate(width / 2, height / 2);
    //  parameters
   // let x1 = w/2 + 0.1 * cos(ang1);
    noFill();
    stroke(255);
    strokeWeight(3);
    for (let i = 0; i < 4; i++) {
        tiles[i].squareTile();
       tiles[i].update(angle);
    }
   angle += 3;
}