function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);
    fill('#9253A1')
    noStroke();
    strokeWeight(2);
    beginShape();
    vertex(0, height);
    bezierVertex(0.15 * width, 0.95 * height, 0.3 * width, 1 * height, 0.45 * width, height * 0.7);
    bezierVertex(0.465 * width, 0.85 * height, 0.465 * width, 0.85 * height, 0.55 * width, height * 1);
    line(0.55*width, height, 0, height);
    endShape(CLOSE);
    beginShape();
    vertex(0.45*width, height);
    bezierVertex(0.535 * width, 0.85 * height, 0.535 * width, 0.85 * height, 0.55* width, height * .7);
    bezierVertex(0.7*width, height*1., 0.85*width, height*0.95, width, height);
    line(width, height, 0.55*width, height);
    endShape();
}

function mousePressed() {
    save('assets/wings.jpg');
}