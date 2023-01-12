// p5.patgrad library https://github.com/antiboredom/p5.patgrad
// https://editor.p5js.org/kfahn/sketches/xgXgKTU9u

let butterflies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 200;
let col1, col2, col3, col4, col5;
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
}

function draw() {
    background(67,58,63);
    //translate(200,200);
    let c3 = color(0);
    
    //let gradient =  createRadialGradient(innerRadius, outerRadius, x, y)
    // need inner radius and outer radius, x ,y optioal
     let colA = createRadialGradient(0, 2/3*sc);
    // let colB = createRadialGradient(0, 0.66*sc);
    //let colA = createConicGradient(PI*0.0, 0.5*sc, 0.5*sc);
    let colB = createConicGradient(PI*0.0, 0.5*sc, 0.5*sc); // purple
    // col1 = color(203,239,67);  //green
    // col2 = color(143,149,211); //lavender
    // col3 = color(67,58,63); //dk gray
    // col4 = color(165, 117,72); // brown
    col1 = color(167,201,87);  //green
    col2 = color(140,57,163); // purple
    col3 = color(67,58,63); //dk gray
    //col4 = color(165, 117,72); // brown
    //colA.colors(0, col2, 0.33, col1, 0.66, col2);
   colA.colors(0, col2, 0.7, col1);
    //colB.colors(0.3, col2, 1, col1);
    colB.colors(0, col1, 0.2, col2,  0.75, col1);
    col5 = lerpColor(col1, col2, 0.33);
    col6 = lerpColor(col1, col2, 0.66);
    let b = 0.15;
    // for (let w = 100; w <100; w ++)
    // {
    for (let i = 0; i < 81; i++) {
       // let col = map(100, 0, 81, 0, 255);
        if (i % 2 == 0) {
            //butterflies[i].wings(0, sc, col2, col1);
            //col.colors(0, col1, col2);
            butterflies[i].tile(0, sc, colA, col1, col2, col3, col5)
            // butterflies[i].spots(0, sc, 0.04*sc);
            // butterflies[i].markings(0,sc, 0.05*sc,0.1*sc);
        } else {
            // (colB) color 2 vertical allignment
            butterflies[i].tile(PI / 2, sc, colB, col2, col1, col3, col5);
            // butterflies[i].spots(PI/2, sc, 0.04*sc);
            // butterflies[i].markings(PI/2,sc, 0.05*sc,0.1*sc);
        }
    }
    //}
    // b += TWO_PI/frames;//0.01;

}