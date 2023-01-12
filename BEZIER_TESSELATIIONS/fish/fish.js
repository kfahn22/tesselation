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

    fish(w, col) {

        push();
        stroke(255, 0, 0);
        translate(this.x + this.w / 2, this.y + this.h / 2);
        pop();


        let m = map(w, 30, 100, 100, 100);
        stroke(col, 255, 255);
        strokeWeight(1);


        beginShape();
        vertex(-0.15 * w, -.5 * this.h);
        bezierVertex(0.125 * w, -0.35 * this.h, 0.33 * w, -0.25 * this.h, 0.5 * w, -this.h * 0.05);
        bezierVertex(0.5 * w, -0.05 * this.h, 0.37 * w, 0.3 * this.h, 0.1 * w, this.h * 0.5);
        bezierVertex(0.175 * w, 0.40 * this.h, 0.175 * w, 0.25 * this.h, 0.15 * w, this.h * 0.25);
        bezierVertex(0.1 * w, 0.25 * this.h, 0.025 * w, 0.4 * this.h, -0.15 * w, this.h * 0.5);
        // *** inside corner 
        bezierVertex(-0.1 * w, 0.3 * this.h, -0.1 * w, 0.25 * this.h, -0.15 * w, this.h * 0.15);
        bezierVertex(-0.15 * w, 0.15 * this.h, -0.45 * w, 0.30 * this.h, -0.5 * w, this.h * 0.25);
        bezierVertex(-0.35 * w, 0.10 * this.h, -0.35 * w, -0.10 * this.h, -0.5 * w, -this.h * 0.15);
        bezierVertex(-0.35 * w, -0.18 * this.h, -0.3 * w, -0.1 * this.h, -0.15 * w, -this.h * 0.1);
        // *** top of fin
        bezierVertex(-0.2 * w, -0.18 * this.h, -0.18 * w, -0.15 * this.h, -0.15 * w, -this.h * 0.5);
        endShape();



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
        circle(-0.15 * w, this.h * 0.15, 8);
        pop();
        // bottom tip of tail
        push();
        fill(0, 255, 255);
        noStroke();
        circle(-0.5 * w, this.h * 0.286, 8);
        pop();
        // top tip of tail
        push();
        fill(0, 255, 0);
        noStroke();
        circle(-0.5 * w, -this.h * 0.186, 8);
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