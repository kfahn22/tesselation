// a = 0.05; b = 0.15; c = .21; d = 0.28; e = 0.5; f = 0.35;

let c;

class Tile {
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.a = 0.05; // 0.08
        this.b = 0.15;
        this.c = 0.21;
        this.d = 0.28;
        this.e = 0.05;
        this.f = 0.35;
    }

    tile(angle, w, col, col1, col2, col3, col4, col5) {
        c;
        // translate to x,y position
        // must add gradient outside of push/pop to work
        fillGradient(col);
        noStroke(); // don't want lines around grid
        push();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        push();
        rect(0, 0, this.w, this.h);
        pop();
        // alternate color of grids
        rotate(angle);
        if (angle == 0) {
            fill(col5);
            c = lerpColor(col2, col3, 0.75);
        } else {
            fill(col1);
            c = lerpColor(col1, col3, 0.75);
        }
        // body of butterfly
        noStroke();
        beginShape();
        vertex(-0.5 * w, -this.h * 0.5);
        bezierVertex(-0.32 * w, -(0.5 - this.e) * this.h, -(this.c + 0.01) * w, -this.d * this.h, -this.a * w, -0.15 * this.h);
        // top of body
        bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -(this.a + 0.01) * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
        bezierVertex((this.a + 0.01) * w, -this.c * this.h, this.a * w, -(this.b + 0.01) * this.h, this.a * w, -this.b * this.h)
        // up to top right corner
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - this.e) * this.h, 0.5 * w, -this.h * 0.5);
        // connecting line
        bezierVertex(0.5 * w, -this.h * 0.5, 0.5 * w, -this.h * 0.5, 0.5 * w, this.h * 0.5);
        bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
        // bottom of body
        bezierVertex((this.a + 0.01) * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
        bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
        //bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 +this.e) * this.h, -0.5 * w, this.h * 0.5);
        // to bottom left corner
        bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        // connecting line
        bezierVertex(-0.5 * w, this.h * 0.5, -0.5 * w, this.h * 0.5, -0.5 * w, -this.h * 0.5);
        endShape(CLOSE);

        // Add middle line to define wings 
        // from middle of body to edge of grid
        push();
        stroke(c);
        beginShape();
        vertex(this.a * w, -this.e * this.h);
        bezierVertex(0.25 * w, this.e * this.h, (0.5 - this.b) * w, this.a * this.h, 0.5 * w, this.h * (this.e));
        endShape();
        beginShape();
        vertex(-this.a * w, -this.e * this.h);
        bezierVertex(-0.25 * w, this.e * this.h, -(0.5 - this.b) * w, this.a * this.h, -0.5 * w, this.h * 0.05);
        endShape();
        // this bit continues line edge of grid to from tip of body
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

        // middle body color
        push();
        fill(c);
        beginShape();
        vertex(0.0 * w, -this.f * this.h);
        bezierVertex(0.09 * w, -0.25 * this.h, 0.09 * w, 0.25 * this.h, 0.0 * w, this.f * this.h);
        bezierVertex(-0.09 * w, 0.25 * this.h, -0.09 * w, -0.25 * this.h, 0.0 * w, -this.f * this.h);
        endShape();
        pop();

        // outline butterfly
        push();
        noFill();
        stroke(c, 50);
        strokeWeight(3)

        //top
        beginShape();
        vertex(-this.a * w, -0.15 * this.h);
        bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 - 0.02) * this.h, -0.5 * w, -this.h * 0.5);
        endShape();
        beginShape();
        vertex(this.a * w, -0.15 * this.h);
        bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - 0.02) * this.h, 0.5 * w, -this.h * 0.5);
        endShape();
        // left side - a little off
        beginShape();
        vertex(-(this.a) * w, (this.b + 0.01) * this.h);
        bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
        endShape();

        beginShape();
        vertex((this.a) * w, (this.b + 0.01) * this.h);
        bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + 0.02) * this.h, 0.5 * w, this.h * 0.5);
        endShape();
        pop();

        pop();
    }

    spots(angle, sc, r) {
        push();
        fill(255);
        stroke(c);

        translate(this.x + this.w / 2, this.y + this.h / 2);
        if (angle == 0) {
            push();
            // purple
            circle((0.20) * sc, (0.46) * sc, 1.2 * r);
            circle((0.1) * sc, (0.38) * sc, r);
            circle((0.20) * sc, (-0.46) * sc, 1.2 * r);
            circle((0.1) * sc, (-0.38) * sc, r);
            // green
            circle((-0.45) * sc, (-0.33) * sc, r);
            circle((0.45) * sc, (-0.33) * sc, r);

            pop();
        } else {
            // purple
            circle((0.32) * sc, (0.42) * sc, r);
            circle((0.32) * sc, (-0.42) * sc, r);
            // green
            circle((-0.38) * sc, (-0.10) * sc, r);
            circle((-0.45) * sc, (-0.2) * sc, 1.2 * r);
            circle((0.45) * sc, (-0.2) * sc, 1.2 * r);
            circle((0.38) * sc, (-0.10) * sc, r);
        }
        pop();

    }
    // m multiplier 1 or -1 to swtich sides
    addSpots(angle, j, sc, r, m) {
        push();
        fill(255);
        stroke(c);

        translate(this.x + this.w / 2, this.y + this.h / 2);
        if (angle == 0) {
            push();
            // purple
            circle(m*(0.92- 0.1*pow(j, 1)) * sc, m*(0.75-0.1*pow(j, 1.1)) * sc, (1 - j*0.1)*r);
            //circle((0.1*i) * sc, (0.46) * sc, 1.2 * r);
            //circle((0.1*j) * sc, (-0.34+0.01*j) * sc, (1 + j*0.2)*r);
            // circle((0.1*i) * sc, (-0.46) * sc, 1.2 * r);
            // circle((0.1*i) * sc, (-0.38) * sc, r);
            // green
            // circle((-0.45) * sc, (-0.33) * sc, r);
            // circle((0.45) * sc, (-0.33) * sc, r);
            circle(m*(0.75- 0.1*pow(j, 1)) * sc, m*(0.08+0.1*pow(j, 1.1)) * sc, (1 - j*0.1)*r);
            pop();
        } else {
            push();
            //let rn = random(0.01, 0.02);
            // purple
            circle(m*(0.92 - 0.1*pow(j, 1)) * sc, m*(0.25+0.1*pow(j, 1.1)) * sc, (1 - j*0.1)*r);
            // circle((0.3*i) * sc, (0.42) * sc, r);
            // circle((0.32) * sc, (-0.42) * sc, r);
            // // green
            // circle((-0.38) * sc, (-0.10) * sc, r);
            // circle((-0.45) * sc, (-0.2) * sc, 1.2 * r);
            // circle((0.45) * sc, (-0.2) * sc, 1.2 * r);
            // circle((0.38) * sc, (-0.10) * sc, r);
            circle(m*(0.25+0.1*pow(j, 1.1)) * sc, m*(0.08+ 0.1*pow(j, 1)) * sc, (1 - j*0.1)*r);
       pop();
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
            // push();
            // translate(0.38 * sc, 0.33 * sc);
            // rotate(-PI * 0.32);
            // ellipse(0, 0, rw, rh);
            // pop();
            // more complex marking
            push();
            translate(0.47 * sc, 0.36 * sc);
            rotate(PI * 0.75);
            beginShape();
            vertex(0, 0);
            quadraticVertex(0.8 * rw, -0.3 * rh, 1.4 * rw, 0, 1.3 * rw);
            quadraticVertex(1. * rw, 1. * rh, 1.3 * rw, 1.2 * rh);
            quadraticVertex(0.9 * rw, 1. * rh, 0.6 * rw, 1.2 * rh);
            endShape();
            pop();

            push();
            translate(-0.425 * sc, 0.42 * sc);
            rotate(-PI * 0.65);
            beginShape();
            vertex(0, 0);
            quadraticVertex(0.8 * rw, -0.3 * rh, 1.4 * rw, 0, 1.3 * rw);
            quadraticVertex(1. * rw, 1. * rh, 1.3 * rw, 1.2 * rh);
            quadraticVertex(0.9 * rw, 1. * rh, 0.6 * rw, 1.2 * rh);
            endShape();
            pop();

            push();
            translate(0.2 * sc, 0.36 * sc);
            //circle(0,0,4);
            rotate(PI * 0.55);
            beginShape();
            // vertex(0,0);
            // quadraticVertex(0.8*rw, -0.3*rh, 1.4*rw,0,1.3*rw);
            // quadraticVertex(1.*rw, 1.*rh, 1.3*rw, 1.2*rh);
            // quadraticVertex(0.9*rw, 1.*rh, 0.6*rw, 1.2*rh);
            endShape();
            pop();

            // push();
            // translate(-0.45 * sc, 0.25 * sc);
            // circle(0,0,4);
            // rotate(-PI * 0.525);
            // fill(255,0,0);
            // circle(-0.9 * rw, 0.1 * rh, 5);
            // beginShape();
            // vertex(0, 0);
            // quadraticVertex(0.6 * rw, 0.5 * rh, 1.2 * rw, 1.2 * rh);
            // quadraticVertex(0.8 * rw, 1.1 * rh, 0.8* rw, 1.2 * rh);
            // quadraticVertex(-0.3 * rw, 0.7 * rh, -0.9 * rw, 0.1 * rh);
            // quadraticVertex(-0.4 * rw, -0.3 * rh, 0 * rw, 0.0 * rh);
            // endShape();
            
            // pop();

            this.mark(-0.55, 0.3, 0.05, 2, sc, 1.45)


            // push();
            // translate(0.4 * sc, 0.24 * sc)
            // rotate(-PI * 0.36);
            // ellipse(0, 0, rw, 2*rh);
            // pop();
            // push();
            // translate(-0.38 * sc, 0.33 * sc);
            // rotate(PI * 0.32);
            // ellipse(0, 0, rw, rh);
            // pop();
            // push();
            // translate(-0.4 * sc, 0.24 * sc)
            // rotate(PI * 0.36);
            // ellipse(0, 0, rw, 1.5 * rh);
            // pop();
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
            ellipse(0, 0, rh * 2, rw);
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
            ellipse(0, 0, rh * 1.5, rw);
            pop();

            //green marking
            push();
            translate(-0.45 * sc, 0.25 * sc);
            //circle(0,0,4);
            rotate(PI * 0.725);
            beginShape();
            vertex(0, 0);
            quadraticVertex(1. * rw, -0.3 * rh, 1.5 * rw, 0, 1.3 * rh);
            quadraticVertex(1.3 * rw, 0.9 * rh, 1.3 * rw, 0.9 * rh);
            quadraticVertex(0.7 * rw, 0.7 * rh, 0.6 * rw, 1. * rh);
            endShape();
            //circle(1.3 * rw, 0.9 * rh, 5);
            pop();
            push();
            translate(-0.37 * sc, 0.125 * sc);
            //circle(0,0,4);
            rotate(PI * 0.65);
            beginShape();
            vertex(0, 0);
            quadraticVertex(1. * rw, -0.3 * rh, 1.4 * rw, 0, 1.3 * rh);
            quadraticVertex(1.3 * rw, 0.9 * rh, 1.4 * rw, 0.7 * rh);
            quadraticVertex(0.7 * rw, 0.6 * rh, 0.9 * rw, 0.8 * rh);
            endShape();
           // circle(1.4 * rw, 0.6 * rh, 5);
            pop();
            // push();
            // translate(0.45 * sc, 0.25 * sc);
            // //circle(0,0,4);
            // rotate(PI * 0.725);
            // beginShape();
            // vertex(0, 0);
            // quadraticVertex(1. * rw, -0.3 * rh, 1.5 * rw, 0, 1.3 * rh);
            // quadraticVertex(1.3 * rw, 0.9 * rh, 1.3 * rw, 0.9 * rh);
            // quadraticVertex(0.7 * rw, 0.7 * rh, 0.6 * rw, 1. * rh);
            // endShape();
            //circle(1.3 * rw, 0.9 * rh, 5);
            // pop();
            // push();
            // translate(0.39 * sc, 0.205 * sc);
            // circle(0,0,4);
            // rotate(-PI * 0.55);
            // beginShape();
            // vertex(0, 0);
            // quadraticVertex(1. * rw, -0.3 * rh, 1.4 * rw, 0, 1.3 * rh);
            // quadraticVertex(1.3 * rw, 0.9 * rh, 1.4 * rw, 0.7 * rh);
            // quadraticVertex(0.7 * rw, 0.6 * rh, 0.9 * rw, 0.8 * rh);
            // endShape();
           // circle(1.4 * rw, 0.6 * rh, 5);
            pop();
           
        }
        
       
        pop();
    }

    mark(a, b, c, e, sc, ang) {
        push();
        translate(a * sc, b * sc);
        //circle(0,0,4);
        rotate(PI * ang);
        beginShape();
        vertex(0, 0);
        quadraticVertex(c * sc, -c * sc, pow(e, 1) * c * sc, 0);
        quadraticVertex((c-0.01)*2 * sc, c * sc, pow(e,1) * c * sc, pow(e,2) * c * sc);
        quadraticVertex(pow(e, 0.7) * c * sc, pow(e, 1.8)*c * sc, 1*c * sc, pow(e, 2.2) * c * sc); // 3.5
        //quadraticVertex(1.5 * c * sc, 3.5*c * sc, 1*c * sc, pow(e, 2.2) * c * sc); // 3.5
        quadraticVertex(1 * c * sc, pow(e,2.)*c * sc, 0 * sc, 0. * sc);
        endShape();
     // circle(1*c * sc, pow(e, 2.2) * c * sc, 5);
        pop();
    }
}