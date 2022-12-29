// p5.patgrad library https://github.com/antiboredom/p5.patgrad


let butterflies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 50;
let col1, col2;
let buffer;

// function preload() {
//     img = loadImage('assets/wings.jpg');
// }

function setup() {
    createCanvas(450, 450);
    rectMode(CENTER);
    // buffer = createGraphics(5, 5, WEBGL);
    // buffer.pixelDensity(1);
    // buffer.background(255);
    // buffer.line(0,0,5,5);
    // pattern = createPattern(buffer);
    // gradient = createLinearGradient(0, 450);
    // gradient.colors(0, "lightblue", 0.5, "pink", 1, "magenta");
   let c1 = color('#2DC5F4');
    let c2 = color(0, 0, 0);
    // need an odd number!!
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i % 2 == 0) {
                butterflies.push(new Tile(i * sc, j * sc, sc, sc));
            } else if (i % 2 != 0) {
                butterflies.push(new Tile(i * sc, j * sc, sc, sc));
            }
        }
    }
    // for (let i = 0; i < 9; i++) {
    //     for (let j = 0; j < 9; j++) {
    //         if (i % 2 == 0) {
    //             butterflies.push(new Tile(i * sc, j * sc, sc, sc, c1, c2, 0));
    //         } else if (i % 2 != 0) {
    //             butterflies.push(new Tile(i * sc, j * sc, sc, sc, c2, c1, PI / 2));
    //         }
    //     }
    // }
}

function draw() {
    background(255,0,0);
    //translate(200,200);
    let c3 = color(0);
    //let c3 = color(94,91,82); //gray
    let c4 = color(252,122,87);
    let c5 = color(252,215,87);
    
    col1 = color(252,122,87);
    col2 = color(255);
    let b = 0.15;
    // for (let w = 100; w <100; w ++)
    // {
    for (let i = 0; i < 100; i++) {
        let col = map(100, 0, 100, 0, 255);
        if (i % 2 == 0) {
            butterflies[i].wings(0, sc, col1, col2);
           
        } else {
            butterflies[i].wings(PI / 2, sc, col1, col2);
            
        }
    }
    //}
    // b += TWO_PI/frames;//0.01;

}