let butterflies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 50;
// function preload() {
//     img = loadImage('assets/wings.jpg');
// }

function setup() {
    createCanvas(450, 450);
    rectMode(CENTER);
    let c1 = color('#2DC5F4');
    let c2 = color(0, 0, 0);
    // need an odd number!!
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i % 2 == 0) {
                butterflies.push(new Tile(i * sc, j * sc, sc, sc, c1, c2, 0));
            } else if (i % 2 != 0) {
                butterflies.push(new Tile(i * sc, j * sc, sc, sc, c1, c2, PI / 2));
            }
        }
    }
}
// butterflies.push(new Tile(100,0,100,100,c1,c2,PI/2));





function draw() {
    background('#F063A4');
    //translate(200,200);
    let b = 0.15;
    // for (let w = 100; w <100; w ++)
    // {
    for (let i = 0; i < 100; i++) {
        let col = map(100, 0, 100, 0, 255);
        if (i % 2 == 0) {
            butterflies[i].wings(0, sc, col);
            // j+=1;
        } else {
            butterflies[i].wings(PI / 2, sc, col);
        }
    }
    //}
    // b += TWO_PI/frames;//0.01;

}