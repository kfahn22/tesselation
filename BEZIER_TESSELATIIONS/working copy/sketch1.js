// p5.patgrad library https://github.com/antiboredom/p5.patgrad
// https://editor.p5js.org/kfahn/sketches/xgXgKTU9u

let tiles = [];
let num = 4;
let j = 0;
let sc = 50;
let col1, col2, col3, col4, col5;

function setup() {
    createCanvas(850, 450);
    rectMode(CENTER);

    // need an odd number!!
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i % 2 == 0) {
                tiles.push(new Tile(i * sc, j * sc, sc, sc));
            } else if (i % 2 != 0) {
                tiles.push(new Tile(i * sc, j * sc, sc, sc));
            }
        }
    }
}

function draw() {
    background(67, 58, 63);
    //translate(200,200);
    let c3 = color(0);

    //let gradient =  createRadialGradient(innerRadius, outerRadius, x, y)
    let colA = createRadialGradient(0, 2 / 3 * sc);
    let colB = createRadialGradient(0, 2 / 3 * sc);
    col1 = color(203, 239, 67); //green
    col2 = color(143, 149, 211); //lavender
    col3 = color(67, 58, 63); //dk gray
    col4 = color(165, 117, 72); // brown
    colA.colors(0, col1, 0.7, col2);
    colB.colors(0.4, col2, 1, col1);
    col5 = lerpColor(col1, col2, 0.33);


    for (let i = 0; i < 82; i++) {

        if (i % 2 == 0) {
            tiles[i].basic();
            tiles[i].tile(0, 0, sc, colA, col1);
        } else {
            tiles[i].basic();
            tiles[i].tile(PI/2, 0, sc, colB);
        }
    }
}