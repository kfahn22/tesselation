// p5.patgrad library https://github.com/antiboredom/p5.patgrad
// https://editor.p5js.org/kfahn/sketches/xgXgKTU9u

let butterflies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 100;
let col1, col2, col3, col4, col5;
// a = 0.05; b = 0.15; c = .21; d = 0.28; e = 0.5; f = 0.35;

function setup() {
    createCanvas(450, 450);
    rectMode(CENTER);
    
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
    let colA = createRadialGradient(0, 2/3*sc);
    let colB = createRadialGradient(0, 2/3*sc);
    col1 = color(203,239,67);  //green
    col2 = color(143,149,211); //lavender
    col3 = color(67,58,63); //dk gray
    col4 = color(165, 117,72); // brown
    colA.colors(0, col1, 0.7, col2);
    colB.colors(0.4, col2, 1, col1);
    col5 = lerpColor(col1, col2, 0.33);
   
    
    for (let i = 0; i < 82; i++) {
       // let col = map(100, 0, 81, 0, 255);
        if (i % 2 == 0) {
            //butterflies[i].wings(0, sc, col2, col1);
            //col.colors(0, col1, col2);
            butterflies[i].tile(0, sc, colA, col1, col2,  col3, col4, col5)
            //butterflies[i].spots(0, sc, 0.06*sc);
            //butterflies[i].markings(0,sc,0.06*sc,0.2*sc);
            for (let j = 0; j < 4; j++) {
                butterflies[i].addSpots(0, j, sc, 0.06*sc, -1);
                butterflies[i].addMark(0, 1, j, j * 0.02, 2, sc, 1.35); //-0.55, 0.3, 0.05, 2, sc, 1.45
            }
        } else {
            //col.colors(0, col2, col1);
            butterflies[i].tile(PI/2, sc, colB, col2, col1, col3, col4);
           // butterflies[i].spots(PI/2, sc, 0.06*sc);
            //butterflies[i].markings(PI/2,sc,0.06*sc,0.2*sc);
            for (let j = 0; j < 4; j++) {
           // butterflies[i].addSpots(PI/2, j, sc, 0.04*sc, 1);
            butterflies[i].addSpots(PI/2, j, sc, 0.06*sc, -1);
            butterflies[i].addMark(PI/2, 1, j, j * 0.021, 2, sc, -1.35); //-0.55, 0.3, 0.05, 2, sc, 1.45
            
            }
        }
    }
}