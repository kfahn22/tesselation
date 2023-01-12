class Tile {
    constructor(_w, _h, _a, _b, _c, _d, _e, _f) {
        this.w = _w;
        this.h = _h;
        this.a = _a;
        this.b = _b;
        this.c = _c;
        this.d = _d;
        this.e = _e;
        this.f = _f;
    }
    squareTile() {
        stroke(255);
        strokeWeight(3);
        noFill();
        push();
        rotate(0);
        beginShape();
        vertex((this.a - 1) * this.w, (this.b - 1) * this.h);
        bezierVertex(-this.c * this.w, -(this.d + 0.25) * this.h, this.e * this.w, -(this.f + 0.25) * this.h, this.a * this.w, (this.b - 1) * this.h);
        endShape();
        pop();
        // East
        push();
        //rotate(90);
        beginShape();
        vertex(this.a * this.w, (this.b - 1) * this.h);
        bezierVertex((this.c + 0.25) * this.w, -this.d * this.h, (this.e + 0.25) * this.w, this.f * this.h, this.a * this.w, this.b * this.h);
        endShape();
        pop();
        // South
        push();
        //rotate(180);
        beginShape();
        vertex(this.a * this.w, this.b * this.h);
        bezierVertex(this.c * this.w, (this.d + 0.25) * this.h, -this.e * this.w, (this.f + 0.25) * this.h, (this.a - 1) * this.w, this.b * this.h);
        endShape();
        pop();
        // West
        push();
        //rotate(270);
        beginShape();
        vertex((this.a - 1) * this.w, this.b * this.h);
        bezierVertex(-(this.c + 0.25) * this.w, this.d * this.h, -(this.e + 0.25) * this.w, -this.f * this.h, (this.a - 1) * this.w, (this.b - 1) * this.h);
        endShape();
        pop();
    }

    update(angle) {
        let ang1 = radians(angle);
        let x1 = w/2 + 20 * cos(ang1);
        stroke(255);
        strokeWeight(3);
        noFill();
        push();
        rotate(0);
       
        // this.c = this.c;
        // this.d = this.d;
        // this.e = this.e;
        // this.f = this.f ;
        beginShape();
        vertex((this.a  - 1) * this.w, (this.b - 1) * this.h);
        bezierVertex(-(this.c )* this.w, -((this.d )+ 0.25) * this.h, (this.e ) * this.w, -((this.f ) + 0.25) * this.h, this.a * this.w, (this.b - 1) * this.h);
        endShape();
        pop();
        // East
        push();
        //rotate(90);
        beginShape();
        vertex(this.a * this.w, (this.b - 1) * this.h);
        bezierVertex((this.c + 0.25) * this.w, -this.d * this.h, (this.e + 0.25) * this.w, this.f * this.h, this.a * this.w, this.b * this.h);
        endShape();
        pop();
        // South
        push();
        //rotate(180);
        beginShape();
        vertex(this.a * this.w, this.b * this.h);
        bezierVertex(this.c * this.w, (this.d + 0.25) * this.h, -this.e * this.w, (this.f + 0.25) * this.h, (this.a - 1) * this.w, this.b * this.h);
        endShape();
        pop();
        // West
        push();
        //rotate(270);
        beginShape();
        vertex((this.a - 1) * this.w, this.b * this.h);
        bezierVertex(-(this.c + 0.25) * this.w, this.d * this.h, -(this.e + 0.25) * this.w, -this.f * this.h, (this.a - 1) * this.w, (this.b - 1) * this.h);
        endShape();
        pop();
        this.a = this.a + x1;
        this.b = this.b + x1;
    }

    
}