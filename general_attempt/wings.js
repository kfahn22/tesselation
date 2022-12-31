// a = 0.05; b = 0.15; c = .21; d = 0.28; e = 0.5; f = 0.35;

let c;

class Tile {
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.a = 0.10; // 0.05
        this.b = 0.15;
        this.c = 0.18;
        this.d = 0.35;
        this.e = 0.05;
        this.f = 0.35;
    }

    tile(angle, w, col, col1, col2, col3, col5) {
        //c;
        // translate to x,y position
        fillGradient(col);
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        push();
        noStroke();
        // if (angle == 0) {
        //     fillGradient(col1);
        //    // fill(col1);
        // } else {
        //     fillGradient(col2);
        //     //fill(col2);
        // }

        rect(0, 0, this.w, this.h);
        pop();
        rotate(angle);
        if (angle == 0) {
            fill(col5);
            c = lerpColor(col2, col3, 0.75);
        } else {
            fill(col1);
            c = lerpColor(col1, col3, 0.75);
        }

        noStroke();
        push();
        beginShape();
        vertex(-0.5 * w, -this.h * 0.5);
        bezierVertex(-0.32 * w, -(0.5 - this.e) * this.h, -(this.c + 0.01) * w, -this.d * this.h, -this.a * w, -0.15 * this.h);
        // top of body
        bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -(this.a + 0.01) * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        bezierVertex((this.a + 0.01) * w, -this.c * this.h, this.a * w, -(this.b + 0.01) * this.h, this.a * w, -this.b * this.h)
        // up to top right corner
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - this.e) * this.h, 0.5 * w, -this.h * 0.5);
        rotate(PI/2);
        bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
        // bottom of body
        bezierVertex((this.a + 0.01) * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
        bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
        //bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 +this.e) * this.h, -0.5 * w, this.h * 0.5);
        rotate(PI/2)
        bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
        // bottom of body
        bezierVertex((this.a + 0.01) * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
        bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
       // bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        endShape();
        pop();
        
        // // connecting line
        // bezierVertex(0.5 * w, -this.h * 0.5, 0.5 * w, -this.h * 0.5, 0.5 * w, this.h * 0.5);
        // bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
        // // bottom of body
        // bezierVertex((this.a + 0.01) * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
        // bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
        // //bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 +this.e) * this.h, -0.5 * w, this.h * 0.5);
        // // to bottom left corner
        // bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        // // connecting line
        // bezierVertex(-0.5 * w, this.h * 0.5, -0.5 * w, this.h * 0.5, -0.5 * w, -this.h * 0.5);
        // endShape(CLOSE);

        // // Add markings
        // // middle
        // push();
        // stroke(c);
        // beginShape();
        // vertex(this.a * w, -this.e * this.h);
        // bezierVertex(0.25 * w, this.e * this.h, (0.5 - this.b) * w, this.a * this.h, 0.5 * w, this.h * (this.e));
        // endShape();
        // beginShape();
        // vertex(-this.a * w, -this.e * this.h);
        // bezierVertex(-0.25 * w, this.e * this.h, -(0.5 - this.b) * w, this.a * this.h, -0.5 * w, this.h * 0.05);
        // endShape();
        // if (angle == 0) {
        //     beginShape();
        //     vertex(-0.05 * w, 0.5 * this.h);
        //     bezierVertex(-0.04 * w, 0.45 * this.h, -0.02 * w, 0.40 * this.h, 0 * w, this.h * this.f);
        //     endShape();
        //     beginShape();
        //     vertex(-0.05 * w, -0.5 * this.h);
        //     bezierVertex(-0.04 * w, -0.45 * this.h, -0.02 * w, -0.40 * this.h, 0 * w, -this.h * this.f);
        //     endShape();
        // } else {
        //     beginShape();
        //     vertex(0.05 * w, 0.5 * this.h);
        //     bezierVertex(0.04 * w, 0.45 * this.h, 0.02 * w, 0.40 * this.h, 0 * w, this.h * this.f);
        //     endShape();
        //     beginShape();
        //     vertex(0.05 * w, -0.5 * this.h);
        //     bezierVertex(0.04 * w, -0.45 * this.h, 0.02 * w, -0.40 * this.h, 0 * w, -this.h * this.f);
        //     endShape();
        // }
        // pop();

        // // body color
        // push();
        // fill(c);
        // beginShape();
        // vertex(0.0 * w, -this.f * this.h);
        // bezierVertex(0.09 * w, -0.25 * this.h, 0.09 * w, 0.25 * this.h, 0.0 * w, this.f * this.h);
        // bezierVertex(-0.09 * w, 0.25 * this.h, -0.09 * w, -0.25 * this.h, 0.0 * w, -this.f * this.h);
        // endShape();
        // pop();

        // // outline
        // push();
        // noFill();
        // stroke(c, 50);
        // strokeWeight(3)
       
        // //top
        // beginShape();
        // vertex(-this.a * w, -0.15 * this.h);
        // bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 - 0.02) * this.h, -0.5 * w, -this.h * 0.5);
        // endShape();
        // beginShape();
        // vertex(this.a * w, -0.15 * this.h);
        // bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - 0.02) * this.h, 0.5 * w, -this.h * 0.5);
        // endShape();
        // // left side - a little off
        // beginShape();
        // vertex(-(this.a) * w, (this.b + 0.01) * this.h);
        // bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        // endShape();
        // // beginShape();
        // // vertex(-this.a * w, this.b * this.h);
        // // bezierVertex(-this.a * w, (this.b + 0.01) * this.h, -(this.b + 0.01) * w, this.c * this.h, 0.0 * w, this.h * (0.5 - this.b));
        // // bezierVertex((this.b + 0.01) * w, (this.b + 0.01)* this.h, this.a * w, this.c * this.h, this.a * w, this.h * this.b)
        // // endShape();
        // beginShape();
        // vertex((this.a) * w, (this.b + 0.01) * this.h);
        // bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + 0.02) * this.h, 0.5 * w, this.h * 0.5);
        // endShape();
        // pop();

        pop();
    }

    spots(angle, sc, r) {
        // top right -- green
        push();
        fill(255);
        stroke(c);
            //noStroke();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        if (angle == 0) {
            
            push();
            // purple
            circle((0.20) * sc, (0.46) * sc, 1.2*r);
            circle((0.1) * sc, (0.38) * sc, r);
            circle((0.20) * sc, (-0.46) * sc, 1.2*r);
            circle((0.1) * sc, (-0.38) * sc, r);
            // green
            circle((-0.45) * sc, (-0.33) * sc, r);
            circle((0.45) * sc, (-0.33) * sc, r);

            pop();
        } else {
            // gives two circles right purple
            circle((0.32) * sc, (0.42) * sc, r);
            circle((0.32) * sc, (-0.42) * sc, r);
            // green
            circle((-0.38) * sc, (-0.10) * sc, r);
            circle((-0.45) * sc, (-0.2) * sc, 1.2*r);
            circle((0.45) * sc, (-0.2) * sc, 1.2*r);
            circle((0.38) * sc, (-0.10) * sc, r);
        }
        pop();

    }
    markings(angle, sc, rw, rh) {
        noStroke();
        fill(c);
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        
        if (angle == 0) {
            // markings on green
            // 1
            push();
            translate(0.38 * sc, 0.33 * sc);
            rotate(-PI * 0.32);
            ellipse(0, 0, rw, rh);
            pop();
            push();
            translate(0.4 * sc, 0.24 * sc)
            rotate(-PI * 0.36);
            ellipse(0, 0, rw, 2*rh);
            pop();
            push();
            translate(-0.38 * sc, 0.33 * sc);
            rotate(PI * 0.32);
            ellipse(0, 0, rw, rh);
            pop();
            push();
            translate(-0.4 * sc, 0.24 * sc)
            rotate(PI * 0.36);
            ellipse(0, 0, rw, 1.5*rh);
            pop();
        } else {
            push();
            fill(c);
            translate(-0.3 * sc, 0.40 * sc);
            rotate(PI * 0.65);
            ellipse(0, 0, rh, rw);
            pop();
            push();
            fill(c);
            translate(-0.175 * sc, 0.40 * sc);
            rotate(PI * 0.65);
            ellipse(0, 0, rh*2, rw);
            pop();
            push();
            fill(c);
            translate(-0.3 * sc, -0.40 * sc);
            rotate(-PI * 0.65);
            ellipse(0, 0, rh, rw);
            pop();
            push();
            fill(c);
            translate(-0.175 * sc, -0.42 * sc);
            rotate(-PI * 0.65);
            ellipse(0, 0, rh*1.5, rw);
            pop();
        }

       pop();
    }
}