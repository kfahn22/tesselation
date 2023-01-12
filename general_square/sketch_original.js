let w = 100;
let h = 100;
let step = 100;
let a, b, c, d, e, f;
let tiles = [];

function setup() {
    createCanvas(400, 400);
    a = 0.5;
    b = 0.5;
    c = 0.25;
    d = 0.25;
    e = 0.25;
    f = 0.25;
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
            {
                tiles.push(new Tile(w * i, h * j, a, b, c, d, e, f));
            }
        }
}

function draw() {
    background(59);
    rectMode(CENTER);
    angleMode(DEGREES);
    translate(width / 2, height / 2);
    //  parameters

    noFill();
    stroke(255);
    strokeWeight(3);
    for (let i = 0; i < 9; i++) {
        tiles[i].show();
    }

    // line((a-1)*w, (b-1)*h, a*w, (b-1)*h);
    // line(a*w, (b-1)*h, a*w, b*h);
    // line(a*w, b*h, (a-1)*w, b*h);
    // line((a-1)*w, b*h, (a-1)*w, (b-1)*h);
    // push();
    // rotate(0);
    // beginShape();
    // vertex((a - 1) * w, (b - 1) * h);
    // bezierVertex(-c * w, -(d + 0.25) * h, e * w, -(f + 0.25) * h, a * w, (b - 1) * h);
    // endShape();
    // pop();
    // // East
    // push();
    // //rotate(90);
    // beginShape();
    // vertex(a * w, (b - 1) * h);
    // bezierVertex((c + 0.25) * w, -d * h, (e + 0.25) * w, f * h, a * w, b * h);
    // endShape();
    // pop();
    // // South
    // push();
    // //rotate(180);
    // beginShape();
    // vertex(a * w, b * h);
    // bezierVertex(c * w, (d + 0.25) * h, -e * w, (f + 0.25) * h, (a - 1) * w, b * h);
    // endShape();
    // pop();
    // // West
    // push();
    // //rotate(270);
    // beginShape();
    // vertex((a - 1) * w, b * h);
    // bezierVertex(-(c + 0.25) * w, d * h, -(e + 0.25) * w, -f * h, (a - 1) * w, (b - 1) * h);
    // endShape();
    // pop();
}

function tile(a, b, c, d, e, f, g, h) {
    // stroke(255,0,0);
    // strokeWeight(3);
    // North
    push();
    rotate(0);
    beginShape();
    vertex((a - 1) * w, (b - 1) * h);
    bezierVertex(-c * w, -d * h, c * w, -(d + 0.25) * h, a * w, (b - 1) * h);
    endShape();
    pop();
    // East
    push();
    //rotate(90);
    beginShape();
    vertex(a * w, (b - 1) * h);
    bezierVertex((c + 0.25) * w, -d * h, c * w, d * h, a * w, b * h);
    endShape();
    pop();
    // South
    push();
    //rotate(180);
    beginShape();
    vertex(a * w, b * h);
    bezierVertex(c * w, (d + 0.25) * h, -c * w, (d + 0.25) * h, (a - 1) * w, b * h);
    endShape();
    pop();
    // West
    push();
    //rotate(270);
    beginShape();
    vertex((a - 1) * w, b * h);
    bezierVertex(-(c + 0.25) * w, d * h, -(c + 0.25) * w, -d * h, (a - 1) * w, (b - 1) * h);
    endShape();
    pop();
}