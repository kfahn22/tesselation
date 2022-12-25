let butterflies = [];


// function preload() {
//     img = loadImage('assets/wings.jpg');
// }

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    let c1 = color('#9253A1');
    let c2 = color(0, 0, 0);
    butterflies.push(new Tile(200,200,100,100,c1,c2,0));

       
   
}

function draw() {
    background(0);
    translate(200,200);
    butterflies[0].top();

}