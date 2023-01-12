class Tile {
    constructor(_x, _y, _w, _h, _col1, _col2, _angle) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.col1 = _col1;
        this.col2 = _col2;
        this.angle = _angle;
        this.a = 0.08; // 0.08
        this.b = 0.15;
        this.c = 0.21;
        this.d = 0.28;
        this.e = 0.05;
        this.f = 0.35;
    }

    wings(angle, w, col) {
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        rotate(angle);
        //fill(this.col2);
        noFill();
        let m = map(w, 30, 100, 100, 100);
        stroke(col, 255, 255);
        strokeWeight(2);
        //noStroke();
        //circle(0, 0, 2);
        // body
        beginShape();
        vertex(-this.a * w, -this.b * this.h);
        bezierVertex(-this.a * w, -(this.b+0.01) * this.h, -0.09 * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        bezierVertex(0.09 * w, -(this.b+0.01) * this.h, this.a * w, -this.c * this.h, this.a * w, -this.b * this.h)
        endShape();
        beginShape();
        vertex(-this.a * w, this.b * this.h);
        bezierVertex(-this.a * w, (this.b+0.01) * this.h, -0.09 * w, this.c * this.h, 0.0 * w, this.h * this.f);
        bezierVertex(0.09 * w, (this.b+0.01) * this.h, this.a * w, this.c * this.h, this.a * w, this.h * this.b)
        endShape();
        //top
        beginShape();
        vertex(-0.08 * w, -0.15 * this.h);
        bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 + this.e) * this.h, -0.5 * w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(0.08 * w, -0.15 * this.h);
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32* w, -(0.5 + this.e) * this.h, 0.5 * w, -this.h * 0.5);
        endShape();
        // middle
        beginShape();
        vertex(this.a * w, -this.e * this.h);
        bezierVertex(0.25 * w, this.e * this.h, (0.5 - this.b) * w, this.a * this.h, 0.5 * w, this.h * this.e);
        endShape();
        beginShape();
        vertex(-this.a * w, -this.e * this.h);
        bezierVertex(-0.25 * w, this.e * this.h, -(0.5 - this.b) * w, this.a * this.h, -0.5 * w, this.h * 0.);
        endShape();

        //bottom
        beginShape();
        vertex(-(this.a) * w, (this.b + 0.01) * this.h);
        bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + this.e) * this.h, -0.5 * w, this.h * 0.5);
        endShape();
        // beginShape();
        // vertex(-this.a * w, this.b * this.h);
        // bezierVertex(-this.a * w, (this.b + 0.01) * this.h, -(this.b + 0.01) * w, this.c * this.h, 0.0 * w, this.h * (0.5 - this.b));
        // bezierVertex((this.b + 0.01) * w, (this.b + 0.01)* this.h, this.a * w, this.c * this.h, this.a * w, this.h * this.b)
        // endShape();
        beginShape();
        vertex((this.a ) * w, (this.b + 0.01) * this.h);
        bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + this.e) * this.h, 0.5 * w, this.h * 0.5);
        endShape();
        pop();

    }

    wings2(angle, w) {
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        rotate(angle);
        //fill(this.col2);
        noFill();
        stroke(255);
        strokeWeight(2);
        //noStroke();
        //circle(0, 0, 2);
        // body
        beginShape();
        vertex(-this.a * this.w, -this.b * this.h);
        bezierVertex(-this.a * this.w, -0.16 * this.h, -0.09 * this.w, -this.c * this.h, 0.0 * this.w, -this.f * this.h);
        bezierVertex(0.09 * this.w, -0.16 * this.h, this.a * this.w, -this.c * this.h, this.a * this.w, -this.b * this.h)
        endShape();
        beginShape();
        vertex(-this.a * this.w, this.b * this.h);
        bezierVertex(-this.a * this.w, 0.16 * this.h, -0.09 * this.w, this.c * this.h, 0.0 * this.w, this.h * this.f);
        bezierVertex(0.09 * this.w, 0.16 * this.h, this.a * this.w, this.c * this.h, this.a * this.w, this.h * this.b)
        endShape();
        //top
        beginShape();
        vertex(-0.06 * this.w, -0.16 * this.h);
        bezierVertex(-0.22 * this.w, -this.d * this.h, -0.32 * this.w, -(0.5 + this.e) * this.h, -0.5 * this.w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(0.06 * this.w, -0.16 * this.h);
        bezierVertex((this.c + 0.01) * this.w, -this.d * this.h, 0.32* this.w, -(0.5 + this.e) * this.h, 0.5 * this.w, -this.h * 0.5);
        endShape();
        // middle
        beginShape();
        vertex(this.a * this.w, -this.e * this.h);
        bezierVertex(0.25 * this.w, this.e * this.h, (0.5 - this.b) * this.w, this.a * this.h, 0.5 * this.w, this.h * this.e);
        endShape();
        beginShape();
        vertex(-this.a * this.w, -this.e * this.h);
        bezierVertex(-0.25 * this.w, this.e * this.h, -(0.5 - this.b) * this.w, this.a * this.h, -0.5 * this.w, this.h * 0.);
        endShape();

        //bottom
        beginShape();
        vertex(-(this.a - 0.01) * this.w, (this.b + 0.01) * this.h);
        bezierVertex(-(this.c + 0.01) * this.w, this.d * this.h, -0.32 * this.w, (0.5 + this.e) * this.h, -0.5 * this.w, this.h * 0.5);
        endShape();
        // beginShape();
        // vertex(-this.a * this.w, this.b * this.h);
        // bezierVertex(-this.a * this.w, (this.b + 0.01) * this.h, -(this.b + 0.01) * this.w, this.c * this.h, 0.0 * this.w, this.h * (0.5 - this.b));
        // bezierVertex((this.b + 0.01) * this.w, (this.b + 0.01)* this.h, this.a * this.w, this.c * this.h, this.a * this.w, this.h * this.b)
        // endShape();
        beginShape();
        vertex((this.a - 0.01) * this.w, (this.b + 0.01) * this.h);
        bezierVertex((this.c + 0.01) * this.w, this.d * this.h, 0.32 * this.w, (0.5 + this.e) * this.h, 0.5 * this.w, this.h * 0.5);
        endShape();
        pop();

    }
    top(angle) {
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        rotate(angle);
        //fill(this.col2);
        noFill();
        stroke(255);
        strokeWeight(2);
        //noStroke();
        circle(0, 0, 2);
        // body
        beginShape();
        vertex(-this.a * this.w, -this.b * this.h);
        bezierVertex(-this.a * this.w, -0.16 * this.h, -0.09 * this.w, -0.21 * this.h, 0.0 * this.w, -this.h * (0.5 - this.b));
        bezierVertex(0.09 * this.w, -0.16 * this.h, 0.08 * this.w, -0.21 * this.h, this.a * this.w, -this.h * this.b)
        endShape();
        beginShape();
        vertex(-this.a * this.w, 0.15 * this.h);
        bezierVertex(-this.a * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * (0.5 - this.b));
        bezierVertex(0.09 * this.w, 0.16 * this.h, 0.08 * this.w, 0.21 * this.h, this.a * this.w, this.h * this.b)
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
        vertex(-this.a * this.w, 0.15 * this.h);
        bezierVertex(-this.a * this.w, 0.16 * this.h, -0.09 * this.w, 0.21 * this.h, 0.0 * this.w, this.h * (0.5 - this.b));
        bezierVertex(0.09 * this.w, 0.16 * this.h, this.b * this.w, 0.21 * this.h, this.b * this.w, this.h * this.b)
        endShape();
        beginShape();
        vertex(0.07 * this.w, 0.16 * this.h);
        bezierVertex(0.22 * this.w, 0.28 * this.h, 0.32 * this.w, .55 * this.h, 0.5 * this.w, this.h * 0.5);
        endShape();


        pop();

    }

 
}