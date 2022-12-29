class Tile {
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.a = 0.08; // 0.08
        this.b = 0.15;
        this.c = 0.21;
        this.d = 0.28;
        this.e = 0.05;
        this.f = 0.35;
    }

    wings(angle, w, col1, col2, col3) {
        //fillGradient(col1);

        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        rotate(angle);
        push();
        noStroke();
        fill(col1);
        rect(0, 0, this.w, this.h);
        pop();
        noFill();
        let m = map(w, 30, 100, 100, 100);
        stroke(col2, 255, 255);
        strokeWeight(2);
        //noStroke();
        //circle(0, 0, 2);
        // body
        beginShape();
        vertex(-this.a * w, -this.b * this.h);
        bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -0.09 * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        bezierVertex(0.09 * w, -(this.b + 0.01) * this.h, this.a * w, -this.c * this.h, this.a * w, -this.b * this.h)
        endShape();
        beginShape();
        vertex(-this.a * w, this.b * this.h);
        bezierVertex(-this.a * w, (this.b + 0.01) * this.h, -0.09 * w, this.c * this.h, 0.0 * w, this.h * this.f);
        bezierVertex(0.09 * w, (this.b + 0.01) * this.h, this.a * w, this.c * this.h, this.a * w, this.h * this.b)
        endShape();
        //top
        beginShape();
        vertex(-0.08 * w, -0.15 * this.h);
        bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 + this.e) * this.h, -0.5 * w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(0.08 * w, -0.15 * this.h);
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 + this.e) * this.h, 0.5 * w, -this.h * 0.5);
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
        vertex((this.a) * w, (this.b + 0.01) * this.h);
        bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + this.e) * this.h, 0.5 * w, this.h * 0.5);
        endShape();
        pop();

    }

    wings2(angle, w, col1, col2) {
        // translate to x,y position
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        push();
        noStroke();
        if (angle == 0) {
            fill(col1);
        } else {
            fill(col2);
        }
        rect(0, 0, this.w, this.h);
        pop();
        rotate(angle);
        if (angle == 0) {
            fill(col2);
        } else {
            fill(col1);
        }

        noStroke();
        beginShape();
        vertex(-0.5 * w, -this.h * 0.5);
        bezierVertex(-0.32 * w, -(0.5 + this.e) * this.h, -(this.c + 0.01) * w, -this.d * this.h, -0.08 * w, -0.15 * this.h);
        // top of body
        bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -0.09 * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        bezierVertex(0.09 * w, -this.c * this.h, this.a * w, -(this.b + 0.01) * this.h, this.a * w, -this.b * this.h)
        // up to top right corner
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 + this.e) * this.h, 0.5 * w, -this.h * 0.5);
        // connecting line
        bezierVertex(0.5 * w, -this.h * 0.5, 0.5 * w, -this.h * 0.5, 0.5 * w, this.h * 0.5);
        bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
        // bottom of body
        bezierVertex(0.09 * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
        bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
        //bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 +this.e) * this.h, -0.5 * w, this.h * 0.5);
        // to bottom left corner
        bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        // connecting line
        bezierVertex(-0.5 * w, this.h * 0.5, -0.5 * w, this.h * 0.5, -0.5 * w, -this.h * 0.5);
        endShape(CLOSE);

        // Add markings
        // middle
        push();
        stroke(col3);
        beginShape();
        vertex(this.a * w, -this.e * this.h);
        bezierVertex(0.25 * w, this.e * this.h, (0.5 - this.b) * w, this.a * this.h, 0.5 * w, this.h * (this.e));
        endShape();
        beginShape();
        vertex(-this.a * w, -this.e * this.h);
        bezierVertex(-0.25 * w, this.e * this.h, -(0.5 - this.b) * w, this.a * this.h, -0.5 * w, this.h * 0.05);
        endShape();
        // circle(-0.03* w, 0.5 * this.h, 5);
        // circle(0 * w, this.h * this.f, 5);
        if (angle == 0) {
            beginShape();
            vertex(-0.05 * w, 0.5 * this.h);
            bezierVertex(-0.04 * w, 0.45 * this.h, -0.02 * w, 0.40 * this.h, 0 * w, this.h * this.f);
            endShape();
            beginShape();
            vertex(-0.05 * w, -0.5 * this.h);
            bezierVertex(-0.04 * w, -0.45 * this.h, -0.02 * w, -0.40 * this.h, 0 * w, -this.h * this.f);
            endShape();
        } else {
            beginShape();
            vertex(0.05 * w, 0.5 * this.h);
            bezierVertex(0.04 * w, 0.45 * this.h, 0.02 * w, 0.40 * this.h, 0 * w, this.h * this.f);
            endShape();
            beginShape();
            vertex(0.05 * w, -0.5 * this.h);
            bezierVertex(0.04 * w, -0.45 * this.h, 0.02 * w, -0.40 * this.h, 0 * w, -this.h * this.f);
            endShape();
        }
        pop();


        pop();
    }


}