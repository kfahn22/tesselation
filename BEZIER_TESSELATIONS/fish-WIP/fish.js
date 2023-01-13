class fishTile {
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

    fish(i, f, w, col) {

        push();
        if (i % 2 == 0) {
            push();
            stroke(255, 0, 0);
            translate(this.x + this.w / 2, this.y + this.h / 2);
            pop();
        } else {
            //push();
            translate(-this.w / 3, -this.h * 2 / 3);
            //pop();
        }
        circle(0, 0, 5);
        scale(f, 1);
        noFill();
        let m = map(w, 30, 100, 100, 100);
        stroke(col, 255, 255);
        strokeWeight(1);
        //noStroke();
        //circle(0, 0, 2);
        // body
        // beginShape();
        // vertex(-this.a * w, -this.b * this.h);
        // bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -0.09 * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        // bezierVertex(0.09 * w, -(this.b + 0.01) * this.h, this.a * w, -this.c * this.h, this.a * w, -this.b * this.h)
        // endShape();
        // beginShape();
        // vertex(-this.a * w, this.b * this.h);
        // bezierVertex(-this.a * w, (this.b + 0.01) * this.h, -0.09 * w, this.c * this.h, 0.0 * w, this.h * this.f);
        // bezierVertex(0.09 * w, (this.b + 0.01) * this.h, this.a * w, this.c * this.h, this.a * w, this.h * this.b)
        // endShape();

        //top
        // beginShape();
        // vertex(-0.08 * w, -0.15 * this.h);
        // bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 + this.e) * this.h, -0.5 * w, -this.h * 0.5);
        // endShape();
        // beginShape();
        // vertex(0.08 * w, -0.15 * this.h);
        // bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 + this.e) * this.h, 0.5 * w, -this.h * 0.5);
        // endShape();

        beginShape();
        vertex(-0.15 * w, -.5 * this.h);
        // nose - red
        bezierVertex(0.125 * w, -0.35 * this.h, 0.33 * w, -0.25 * this.h, 0.5 * w, -this.h * 0.05);
        // bottom of fine - fushia
        bezierVertex(0.5 * w, -0.05 * this.h, 0.37 * w, 0.3 * this.h, 0.1 * w, this.h * 0.5);
        // inside bottom - yellow
        bezierVertex(0.175 * w, 0.40 * this.h, 0.175 * w, 0.25 * this.h, 0.15 * w, this.h * 0.25);
        // back fin - blue
        bezierVertex(0.1 * w, 0.25 * this.h, 0.025 * w, 0.4 * this.h, -0.15 * w, this.h * 0.5);
        // *** inside corner  - turquoies
        bezierVertex(-0.1 * w, 0.3 * this.h, -0.1 * w, 0.25 * this.h, -0.15 * w, this.h * 0.15);
        // bottom of tail - aqua
        bezierVertex(-0.15 * w, 0.15 * this.h, -0.45 * w, 0.30 * this.h, -0.5 * w, this.h * 0.25);
        // top of tail - bright green
        bezierVertex(-0.35 * w, 0.10 * this.h, -0.35 * w, -0.10 * this.h, -0.475 * w, -this.h * 0.4);
        // inside top -- redish purple
        bezierVertex(-0.3 * w, -0.2 * this.h, -0.25 * w, -0.2 * this.h, -0.15 * w, -this.h * 0.15);
        // *** top of fin - kelly green
        bezierVertex(-0.3 * w, -0.2 * this.h, -0.18 * w, -0.15 * this.h, -0.15 * w, -this.h * 0.5);
        endShape();
        // beginShape();
        // vertex(0.08 * w, -0.15 * this.h);
        // bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 + this.e) * this.h, 0.5 * w, -this.h * 0.5);
        // endShape();

        // // middle
        // beginShape();
        // vertex(this.a * w, -this.e * this.h);
        // bezierVertex(0.25 * w, this.e * this.h, (0.5 - this.b) * w, this.a * this.h, 0.5 * w, this.h * this.e);
        // endShape();
        // beginShape();
        // vertex(-this.a * w, -this.e * this.h);
        // bezierVertex(-0.25 * w, this.e * this.h, -(0.5 - this.b) * w, this.a * this.h, -0.5 * w, this.h * 0.);
        // endShape();

        //bottom
        // beginShape();
        // vertex(-(this.a) * w, (this.b + 0.01) * this.h);
        // bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + this.e) * this.h, -0.5 * w, this.h * 0.5);
        // endShape();
        // beginShape();
        // vertex((this.a) * w, (this.b + 0.01) * this.h);
        // bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + this.e) * this.h, 0.5 * w, this.h * 0.5);
        // endShape();


        // nose
        push();
        fill(255, 0, 0);
        noStroke();
        circle(0.5 * w, -this.h * 0.05, 8);
        pop();
        // bottom of fin
        push();
        fill(255, 0, 255);
        noStroke();
        circle(0.1 * w, this.h * 0.5, 8);
        pop();
        // inside bottom
        push();
        fill(255, 255, 0);
        noStroke();
        circle(0.15 * w, this.h * 0.25, 8);
        pop();
        // bottom back corner of  body
        push();
        fill(0, 0, 255);
        noStroke();
        circle(-0.15 * w, this.h * 0.5, 8);
        pop();
         // inside corner back bottom ***
         push();
         fill(0, 125, 255);
         noStroke();
         circle( -0.15 * w, this.h * 0.15, 8);
         pop();
        // bottom tip of tail
        push();
        fill(0, 255, 255);
        noStroke();
        circle(-0.5 * w, this.h * 0.25, 8);
        pop();
        // top tip of tail
        push();
        fill(0, 255, 0);
        noStroke();
        circle(-0.5 * w, -this.h * 0.15, 8);
        pop();

        // inside top
        push();
        fill(125, 0, 125);
        noStroke();
        circle(-0.15 * w, -this.h * 0.1, 8);
        pop();
        // tip of top fin ***
        push();
        fill(0, 125, 0);
        noStroke();
        circle(-0.15 * w, -this.h * 0.5, 8);
        pop();
    }
}