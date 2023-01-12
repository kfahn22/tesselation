let fishies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 100;

function setup() {
    createCanvas(400, 400, WEBGL);
    rectMode(CENTER);
    let c1 = color(0);
    let c2 = color(0, 0, 0);
    // need an odd number!!

    fishies.push(new fishTile(width / 2, height / 2, sc, sc, c1, c2, 0));


}
// }

function draw() {
    background(0);
    let col = color(255,0,0);
    fishies[0].fish(sc, col);
}