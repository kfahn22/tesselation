class Tile {
    constructor(_x, _tW, _sH, _a1, _a2, _a, _b, _num) {
        this.x = _x;
        this.tW = _tW;
        this.sH = _sH; // shear Height
        this.shearAngle = _a1;
        this.rotateAngle = _a2;
        this.a = _a;
        this.b = _b;
        this.c = _a - _b;
        this.num = _num;
        this.col = color(random(255), 0, random(255));
    }

    halfTile() {
        push();
        beginShape();
        vertex(0, 0);
        bezierVertex(this.b * this.x, -this.b * this.x, this.c * this.x, this.b * this.x, this.a * this.x, 0);
        line(this.a * this.x, 0, 2 * this.b * this.x, this.sH * this.x);
        line(2 * this.b * this.x, this.sH * this.x, this.a * this.x, this.tW * this.x);
        endShape();
        pop();
    }

    tile() {
        push();
        shearX(this.shearAngle);
        this.halfTile(x);
        translate(this.a * this.x, this.tW * this.x);
        rotate(this.rotateAngle);
        this.halfTile(this.x);
        pop();
    }
    show() {
        push();
        noFill();
        strokeWeight(3);
        for (let i = 0; i < 1; i++) {
            stroke(this.col);
            translate(this.b + this.c * this.x, this.tW * this.x);
            this.tile();
        }
        pop();
       // push();
        // noFill();
        // strokeWeight(3);
        // stroke(this.col);
        // this.tile();
       
         
           // translate(this.b * this.d, this.b * this.d);
            // noFill();
            // strokeWeight(3);
            // stroke(this.col);
            // this.tile();
            //pop();
       // }
        //pop();
    }
}