class Tile {
    constructor(_x, _y, _w, _h, _col1, _col2, _angle) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.col1 = _col1;
        this.col2 = _col2;
        this.angle = _angle;
    }

    wings(angle) {
        push();
        translate(this.x+ this.w/2, this.y + this.h/2);
        rotate(angle);
        //fill(this.col2);
        noFill();
        stroke(255);
        strokeWeight(2);
        //noStroke();
        //circle(0, 0, 2);
        // body
        beginShape();
        vertex(-0.08 * this.w, -0.15 * this.h);
        bezierVertex(-0.08 * this.w, -0.16 * this.h, -0.09 * this.w, -0.21 * this.h, 0.0 * this.w, -this.h * 0.35);
        bezierVertex(0.09 * this.w, -0.16 * this.h, 0.08 * this.w, -0.21 * this.h, 0.08 * this.w, -this.h * 0.15)
        endShape();
        beginShape();
        vertex(-0.08 * this.w, 0.15 * this.h);
        bezierVertex(-0.08 * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * 0.35);
        bezierVertex(0.09 * this.w, 0.16 * this.h, 0.08 * this.w, 0.21 * this.h, 0.08 * this.w, this.h * 0.15)
        endShape();
        //top
        beginShape();
        vertex(-0.07 * this.w, -0.16 * this.h);
        bezierVertex(-0.22 * this.w, -0.28 * this.h, -0.32 * this.w, -.55 * this.h, -0.5 * this.w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(0.07 * this.w, -0.16 * this.h);
        bezierVertex(0.22 * this.w, -0.28 * this.h, 0.32 * this.w, -.55 * this.h, 0.5 * this.w, -this.h * 0.5);
        endShape();
        // middle
        beginShape();
        vertex(0.08 * this.w, -0.05 * this.h);
        bezierVertex(0.25 * this.w, 0.05 * this.h, 0.35 * this.w, 0.08 * this.h, 0.5 * this.w, this.h * 0.05);
        endShape();
        beginShape();
        vertex(-0.08 * this.w, -0.05 * this.h);
        bezierVertex(-0.25 * this.w, 0.05 * this.h, -0.35 * this.w, 0.08 * this.h, -0.5 * this.w, this.h * 0.);
        endShape();
        
        //bottom
        beginShape();
        vertex(-0.07 * this.w, 0.16 * this.h);
        bezierVertex(-0.22 * this.w, 0.28 * this.h, -0.32 * this.w, .55 * this.h, -0.5 * this.w, this.h * 0.5);
        endShape();
        beginShape();
        vertex(-0.08 * this.w, 0.15 * this.h);
        bezierVertex(-0.08 * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * 0.35);
        bezierVertex(0.09 * this.w, 0.16 * this.h, 0.08 * this.w, 0.21 * this.h, 0.08 * this.w, this.h * 0.15)
        endShape();
        beginShape();
        vertex(0.07 * this.w, 0.16 * this.h);
        bezierVertex(0.22 * this.w, 0.28 * this.h, 0.32 * this.w, .55 * this.h, 0.5 * this.w, this.h * 0.5);
        endShape();
        pop();

    }

    top(angle) {
        push();
        translate(this.x+ this.w/2, this.y + this.h/2);
        rotate(angle);
        //fill(this.col2);
        noFill();
        stroke(255);
        strokeWeight(2);
        //noStroke();
        circle(0, 0, 2);
        // body
        beginShape();
        vertex(-0.08 * this.w, -0.15 * this.h);
        bezierVertex(-0.08 * this.w, -0.16 * this.h, -0.09 * this.w, -0.21 * this.h, 0.0 * this.w, -this.h * 0.35);
        bezierVertex(0.09 * this.w, -0.16 * this.h, 0.08 * this.w, -0.21 * this.h, 0.08 * this.w, -this.h * 0.15)
        endShape();
        beginShape();
        vertex(-0.08 * this.w, 0.15 * this.h);
        bezierVertex(-0.08 * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * 0.35);
        bezierVertex(0.09 * this.w, 0.16 * this.h, 0.08 * this.w, 0.21 * this.h, 0.08 * this.w, this.h * 0.15)
        endShape();
        //top
        beginShape();
        vertex(-0.07 * this.w, -0.16 * this.h);
        bezierVertex(-0.22 * this.w, -0.28 * this.h, -0.32 * this.w, -.55 * this.h, -0.5 * this.w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(0.07 * this.w, -0.16 * this.h);
        bezierVertex(0.22 * this.w, -0.28 * this.h, 0.32 * this.w, -.55 * this.h, 0.5 * this.w, -this.h * 0.5);
        endShape();
        // middle
        beginShape();
        vertex(0.08 * this.w, -0.05 * this.h);
        bezierVertex(0.25 * this.w, 0.05 * this.h, 0.35 * this.w, 0.08 * this.h, 0.5 * this.w, this.h * 0.05);
        endShape();
        beginShape();
        vertex(-0.08 * this.w, -0.05 * this.h);
        bezierVertex(-0.25 * this.w, 0.05 * this.h, -0.35 * this.w, 0.08 * this.h, -0.5 * this.w, this.h * 0.);
        endShape();
        
        //bottom
        beginShape();
        vertex(-0.07 * this.w, 0.16 * this.h);
        bezierVertex(-0.22 * this.w, 0.28 * this.h, -0.32 * this.w, .55 * this.h, -0.5 * this.w, this.h * 0.5);
        endShape();
        beginShape();
        vertex(-0.08 * this.w, 0.15 * this.h);
        bezierVertex(-0.08 * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * 0.35);
        bezierVertex(0.09 * this.w, 0.16 * this.h, 0.08 * this.w, 0.21 * this.h, 0.08 * this.w, this.h * 0.15)
        endShape();
        beginShape();
        vertex(0.07 * this.w, 0.16 * this.h);
        bezierVertex(0.22 * this.w, 0.28 * this.h, 0.32 * this.w, .55 * this.h, 0.5 * this.w, this.h * 0.5);
        endShape();

        
        pop();

    }

    tile() {
        //push();
        rect(this.x + this.w / 2, this.y + this.h / 2, this.w, this.h);
        push();
        translate(this.x / 2, this.y / 2);
        rotate(this.angle);
        noStroke();
        fill(this.col1);

        push();
        this.top();
        pop();
        push();
        this.bottom();
        pop();
        pop();
    }
    // wing3() {
    //     noStroke();
    //     fill(this.col1);
    //     rect(this.x-50,this.y-50,this.w,this.h);
    //     push();
    //     //scale(-1, 1);
    //     this.wing1();
    //     pop();

    // }
}