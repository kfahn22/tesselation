let fishies = [];
let num = 4;
let j = 0;
let frames = 60;
let sc = 100;

function setup() {
    createCanvas(600, 600, WEBGL);
    rectMode(CENTER);
    let c1 = color('#2DC5F4');
    let c2 = color(0, 0, 0);
    // need an odd number!!
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
           if (i % 2 == 0) {
                fishies.push(new fishTile(i* sc, j * sc, sc, sc, c1, c2, 0));
            } else if (i % 2 != 0) {
                fishies.push(new fishTile(i* sc, j* sc, sc, sc, c1, c2, -PI));
            }
        }
    }
        console.log(fishies.length);
    }
// }

function draw() {
    background('#F063A4');
   
    // for (let i = 0; i < 100; i++) {
    //     let col = map(100, 0, 100, 0, 255);
    //     if (i % 2 == 0) {
    //         fishies[i].fish(0, sc, col);
           
    //     } else {
    //         push();
    //        //translate(-sc, sc*2/3);
    //         scale(1,-1);
    //         fishies[i].fish(0, sc, col);
    //         pop();
    //     }
    // }
    for (let i = 0; i < fishies.length; i++) {
        let col = map(100, 0, 100, 0, 255);
        if (i % 2!= 0) {
            push();
            fishies[i].fish(i, -1, sc, col);
           pop();
        } else {
            push();
            fishies[i].fish(i, 1, sc, col);
            pop();
        }
    }
}