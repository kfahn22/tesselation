// p5.patgrad library https://github.com/antiboredom/p5.patgrad
// https://editor.p5js.org/kfahn/sketches/xgXgKTU9u

let tiles = [];
// let num = 4;
// let j = 0;
let sc = 50;
let col1, col2, col3, col4, col5;
let col;

function setup() {
    createCanvas(850, 450);
    rectMode(CENTER);
    let a = .25,
        b = .25,
        c = .25,
        d = .25;
    let sh = PI/4; // shear angle
    // need an odd number!!
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            col = color(random(255), 0, random(255));
            tiles.push(new Tile(i * sc, j * sc, sc, sc, a, b, c, d, col, sh));
        }
    }
}

function draw() {
    for (let i = 0; i < tiles.length; i++) {
            tiles[i].basic();
    }
}