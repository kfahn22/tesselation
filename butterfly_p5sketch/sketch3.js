let butterflies = [];
let num = 4;
let j = 0;
// function preload() {
//     img = loadImage('assets/wings.jpg');
// }

function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    let c1 = color('#9253A1');
    let c2 = color(0, 0, 0);
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i % 2 == 0) {
                butterflies.push(new Tile(i * 100, j * 100, 100, 100, c1, c2, 0));
            }
            else if (i % 2 != 0) {
                butterflies.push(new Tile(i * 100, j*100, 100, 100, c1, c2, PI/2));
            }
        }
    }
}
// butterflies.push(new Tile(100,0,100,100,c1,c2,PI/2));





function draw() {
    background('#F063A4');
    //translate(200,200);
    for (let i =0; i < 25; i++) { 
       if (i % 2 == 0)
       {
            butterflies[i].wings(0);
           // j+=1;
        } else {
            butterflies[i].wings(PI/2);
        }
    }
    // for (let i = 4; i < 8; i++) {
    //     if (i % 2 == 0) {
    //         butterflies[i].top(PI / 2);
    //     } else {
    //         butterflies[i].top(0);
    //     }
    // }


}