// a = 0.05; b = 0.15; c = .21; d = 0.28; e = 0.5; f = 0.35;

let c;

class Tile {
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.a = 0.25; 
        this.b = 0.25;
        // this.c = 0.21;
        // this.d = 0.28;
        // this.e = 0.05;
        // this.f = 0.35;
    }

    // tile(angle, shearAngle, w, col) {
    //     c = color(255);
    //     // translate to x,y position
    //     // must add gradient outside of push/pop to work
    //     fillGradient(col);
    //     noStroke(); // don't want lines around grid
    //     push();
    //     translate(this.x + this.w / 2, this.y + this.h / 2);
    //     push();
    //     rect(0, 0, this.w, this.h);
    //     pop();
    //     // alternate color of grids
    //     rotate(angle);
    //     if (angle == 0) {
    //         shearX(shearAngle);
    //         color(143, 149, 211);
    //         // c = lerpColor(col2, col3, 0.75);
    //     } else {
    //         // fill(col1);
    //         shearX(shearAngle)
    //         // c = lerpColor(col1, col3, 0.75);
    //     }
    //     // body of butterfly
    //     noStroke();
    //     beginShape();
    //     vertex(-0.5 * w, -this.h * 0.5);
    //     bezierVertex(-0.32 * w, -(0.5 - this.e) * this.h, -(this.c + 0.01) * w, -this.d * this.h, -this.a * w, -0.0 * this.h);
    //     // top of body
    //     // bezierVertex(-this.a * w, -(this.b + 0.01) * this.h, -(this.a + 0.01) * w, -this.c * this.h, 0.0 * w, -this.f * this.h);
    //     // bezierVertex((this.a + 0.01) * w, -this.c * this.h, this.a * w, -(this.b + 0.01) * this.h, this.a * w, -this.b * this.h)
    //     // up to top right corner
    //     bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - this.e) * this.h, 0.5 * w, -this.h * 0.5);
    //     // connecting line
    //     bezierVertex(0.5 * w, -this.h * 0.5, 0.5 * w, -this.h * 0.5, 0.5 * w, this.h * 0.5);
    //     bezierVertex(0.32 * w, 0.5 * this.h, (this.c + 0.01) * w, (this.d) * this.h, this.a * w, this.b * this.h);
    //     // bottom of body
    //     // bezierVertex((this.a + 0.01) * w, (this.b + 0.01) * this.h, (this.a) * w, this.c * this.h, 0 * w, this.h * this.f);
    //     // bezierVertex(-(this.a) * w, this.c * this.h, -(this.a + 0.01) * w, (this.b + 0.01) * this.h, -this.a * w, this.b * this.h);
    //     //bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 +this.e) * this.h, -0.5 * w, this.h * 0.5);
    //     // to bottom left corner
    //     bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
    //     // connecting line
    //     bezierVertex(-0.5 * w, this.h * 0.5, -0.5 * w, this.h * 0.5, -0.5 * w, -this.h * 0.5);
    //     endShape(CLOSE);

        

       

    //     // outline butterfly
    //     push();
    //     noFill();
    //     c = color(255);
    //     stroke(c, 50);
    //     strokeWeight(3)

    //     //top
    //     beginShape();
    //     vertex(-this.a * w, -0.15 * this.h);
    //     bezierVertex(-0.22 * w, -this.d * this.h, -0.32 * w, -(0.5 - 0.02) * this.h, -0.5 * w, -this.h * 0.5);
    //     endShape();
    //     beginShape();
    //     vertex(this.a * w, -0.15 * this.h);
    //     bezierVertex((this.c + 0.01) * w, -this.d * this.h, 0.32 * w, -(0.5 - 0.02) * this.h, 0.5 * w, -this.h * 0.5);
    //     endShape();
    //     // left side - a little off
    //     beginShape();
    //     vertex(-(this.a) * w, (this.b + 0.01) * this.h);
    //     bezierVertex(-(this.c + 0.01) * w, this.d * this.h, -0.32 * w, (0.5 + 0.02) * this.h, -0.5 * w, this.h * 0.5);
    //     endShape();

    //     beginShape();
    //     vertex((this.a) * w, (this.b + 0.01) * this.h);
    //     bezierVertex((this.c + 0.01) * w, this.d * this.h, 0.32 * w, (0.5 + 0.02) * this.h, 0.5 * w, this.h * 0.5);
    //     endShape();
    //     pop();

    //     pop();
    // }

    basic() {
        push();
        stroke(255);
        noFill();
        beginShape();
        vertex(-0.5 * this.w, -this.h * 0.5);
        // up to top right corner
        bezierVertex(-(this.a) * this.w, -this.b * this.h, (0.5-this.a) * this.w, -(0.5+this.b) * this.h, 0.5 * this.w, -this.h * 0.5);
        endShape();
        pop();
    }
    
    tile(angle, shearAngle, w, col) {
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
            shearX(shearAngle);
            fill(255);
            // c = lerpColor(col2, col3, 0.75);
        } else {
            // fill(col1);
            //shearX(shearAngle)
            // c = lerpColor(col1, col3, 0.75);
        }
        //noStroke();
        this.basic();
        rotate(PI/2);
        this.basic();
        rotate(PI/2);
        this.basic();
        rotate(PI/2);
        this.basic();
        pop();
    }


   

  

    

  
}