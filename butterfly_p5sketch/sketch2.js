let wings = [];


function preload() {
    img = loadImage('assets/wings.jpg');
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    let c1 = color('#9253A1');
    let c2 = color(0, 0, 0);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i % 2 == 0 & j % 2 == 0) {
                wings.push(new Half(100 * i, 100 * j, 100, 100, c1, c2, 0));
            } else if (i % 2 != 0 & j % 2 != 0) {
                wings.push(new Half(100 * i, 100 * j, 100, 100, c2, c1, PI / 2));
            // } else if (i % 2 != 0 & j % 2 == 0) {
            //     wings.push(new Half(100 * i, 100 * j, 100, 100, c2, c1, 0));
            }
            //else if (i % 2 != 0 & j % 2 != 0) {
            //     wings.push(new Half(100 * i, 100 * j, 100, 100, c2, c1, PI / 2));
            // } else {
            //     wings.push(new Half(100 * i, 100 * j, 100, 100, c2, c1, PI / 2));
            // }

        }
    }
    //console.log(wings.length);
    // wings.push(new Half(0, 0, 100, 100, c1, c2)); //0
    // wings.push(new Half(100, 100, 100, 100, c2, c1)); //4
    // wings.push(new Half(0, 200, 100, 100, c1, c2));  // 7
    // wings.push(new Half(100, 300, 100, 100, c2, c1)); // 
    // wings.push(new Half(200, 0, 100, 100, c2, c1)); //
    // wings.push(new Half(100, 100, 100, 100, c1, c2));
    //rectMode(CENTER);
}

function draw() {
    background(0);
    for (i = 0; i < 3; i++) {
        wings[i].tile();
    }

    // push();
    // wings[0].tile(0);
    // pop();
    // push();
    // wings[1].tile(PI * 1 / 2);
    // pop();
    // push();
    // wings[2].tile(0);
    // pop();
    // push();
    // wings[3].tile(PI / 2);
    // pop();
    // push();
    // wings[4].tile(PI / 2);
    // pop();
    // push();
    // wings[5].tile(0);
    // pop();
    // push();
    // rotate(PI);
    // //rect(img, 100, 0, 100, 100);
    // image(img, 200, 200, 100, 100);
    // pop();
    //rect(0,0,100,50);
}