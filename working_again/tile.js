let clr;

class Tile {
    constructor(_x, _a1, _a2, _a, _b, _c, _d, _e) {
        this.x = _x;
        // this.tW = _tW;
        // this.sH = _sH; // shear Height
        this.shearAngle = _a1;
        this.rotateAngle = _a2;
        this.a = _a;
        this.b = _b;
        this.c = _c;
        this.d = _d;
        this.e = _e;
        this.col = color(random(255), 0, random(255));
    }

    halfTile() {
        push();
        beginShape();
        vertex(0, 0);
        bezierVertex(this.a * this.x, -this.a * this.x, this.b * this.x, this.a * this.x, this.c * this.x, 0);
        line(this.c * this.x, 0, 2*this.a * this.x, this.d * this.x);
        line(2*this.a * this.x, this.d * this.x, this.c * this.x, this.e * this.x);
        endShape();
        pop();
    }

    tile() {
        push();
        shearX(this.shearAngle);
        this.halfTile(x);
        translate(this.c * this.x, this.e * this.x);
        rotate(this.rotateAngle);
        this.halfTile(this.x);
        pop();
    }
    
    showTwo() {
        // push();
        noFill();
        strokeWeight(3);
        stroke(this.col);
        this.tile();
        stroke(255,0, 0);
        translate(this.b*this.x, this.e*this.x)
        this.tile();
        // pop();
   } 

    tileUnit(sx, sy) {
        
        this.showTwo();
        translate(sx, sy)
        this.showTwo();
        
    }
}