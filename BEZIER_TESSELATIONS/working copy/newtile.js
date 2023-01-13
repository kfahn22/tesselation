// a = 0.05; b = 0.15; c = .21; d = 0.28; e = 0.5; f = 0.35;

let c;

class Tile {
    constructor(_x, _y, _w, _h, _a, _b, _c, _d, _col, _angle) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.a = 0.25; 
        this.b = 0.25;
        this.c = 0.25;
        this.d = 0.25;
        this.col = _col;
        this.angle = _angle;
    }
   
    basic() {
        push();
        stroke(255);
        //noFill();
        translate(this.x + this.w / 2, this.y + this.h / 2);
        shearX(PI/4);
        fill(this.col);
        beginShape();
        vertex(-0.5 * this.w, -this.h * 0.5);
        bezierVertex(-this.a * this.w, -this.b * this.h, this.a * this.w, -(0.5+this.b) * this.h, 0.5 * this.w, -this.h * 0.5);
        bezierVertex(this.c * this.w, -this.d * this.h, (this.c + 0.5) * this.w, this.d * this.h, 0.5 * this.w, this.h * 0.5);
        bezierVertex(this.a * this.w, this.b * this.h, -this.a* this.w, (this.b + 0.5) * this.h, -0.5 * this.w, this.h * 0.5);
        bezierVertex(-this.c * this.w, this.d * this.h, -(this.c + 0.5) * this.w, -this.d * this.h, -0.5 * this.w, -this.h * 0.5);
        endShape(CLOSE);
        pop();
    }


   

  

    

  
}