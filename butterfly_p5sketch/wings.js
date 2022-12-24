class Half{
    constructor(_x, _y, _w, _h, _col1, _col2) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h; 
        this.col1 = _col1;
        this.col2 = _col2;
    }

    bottom(angle) {
        push();
        //translate(this.x, this.y);
        rotate(angle);
        fill(this.col2);
        noStroke();
        beginShape();
        vertex(0, this.h);
        bezierVertex(0.15 * this.w, 0.95 * this.h, 0.3 * this.w, 1 * this.h, 0.45 * this.w, this.h * 0.7);
        bezierVertex(0.465 * this.w, 0.85 * this.h, 0.465 * this.w, 0.85 * this.h, 0.55 * this.w, this.h * 1);
        line(0.55 * this.w, this.h, 0, this.h);
        endShape(CLOSE);
        beginShape();
        vertex(0.45 * this.w, this.h);
        bezierVertex(0.535 * this.w, 0.85 * this.h, 0.535 * this.w, 0.85 * this.h, 0.55 * this.w, this.h * .7);
        bezierVertex(0.7 * this.w, this.h * 1., 0.85 * this.w, this.h * 0.95, this.w, this.h);
        line(this.w, this.h, 0.55 * this.w, this.h);
        endShape();
        pop();
        //rect(this.x, this.y, this.w, this.h)
    }
    top(angle) {
        push();
        //translate(this.x, this.y);
        rotate(angle);
        fill(this.col2);
        noStroke();
        beginShape();
        vertex(0, 0);
        bezierVertex(0.15 * this.w, 0.05 * this.h, 0.3 * this.w, 0 * this.h, 0.45 * this.w, this.h * 0.3);
        bezierVertex(0.465 * this.w, 0.15 * this.h, 0.465 * this.w, 0.15 * this.h, 0.55 * this.w, this.h * 0);
        line(0.55 * this.w, 0*this.h, 0, this.h);
        endShape(CLOSE);
        beginShape();
        vertex(0.45 * this.w, 0*this.h);
        bezierVertex(0.535 * this.w, 0.15 * this.h, 0.535 * this.w, 0.15 * this.h, 0.55 * this.w, this.h * .3);
        bezierVertex(0.7 * this.w, this.h * 0., 0.85 * this.w, this.h * 0.05, this.w, 0*this.h);
        line(this.w, 0*this.h, 0.55 * this.w, 0*this.h);
        endShape();
        pop();
        //rect(this.x, this.y, this.w, this.h)
    }

    tile(angle) {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(this.col1);
        //rect(this.x-50,this.y-50,this.w,this.h);
       rect(0,0,this.w,this.h);
        //rotate(PI/2);
        this.top(angle);
        this.bottom(angle);
        pop(); 
    }
    // wing3() {
    //     noStroke();
    //     fill(this.col1);
    //     rect(this.x-50,this.y-50,this.w,this.h);
    //     push();
    //     //scale(-1, 1);
    //     this.wing1();
    //     pop();

    // }
}