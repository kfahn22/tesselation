class Tile {
    constructor(_x, _tW, _sH, _a1, _a2, _a, _b) {
        this.x = _x;
        this.tW = _tW;
        this.sH = _sH; // shear Height
        this.shearAngle = _a1;
        this.rotateAngle = _a2;
        this.a = _a;
        this.b = _b;
        this.col = color(random(255), 0, random(255));
    }

    halfTile() {
        push();
        beginShape();
        vertex(0, 0);
        bezierVertex(3 * this.x, -3 * this.x, 5 * this.x, 3 * this.x, 8 * this.x, 0);
        line(8 * this.x, 0, 6 * this.x, this.sH * this.x);
        line(6 * this.x, this.sH * this.x, 8 * this.x, this.tW * this.x);
        endShape();
        pop();
    }

    tile() {
        push();
        shearX(this.shearAngle);
        this.halfTile(x);
        translate(8 * this.x, this.tW * this.x);
        rotate(this.rotateAngle);
        this.halfTile(this.x);
        pop();
    }
    show() {
        noFill();
        strokeWeight(3);
        stroke(this.col);
        this.tile();
    }
}