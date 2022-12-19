class Translate {
    constructor(_px, _py) {
        this.px = _px;
        this.py = _py;
        this.tile = new Tile()
    }

    add() {
        let x = width / 100;
        let y = height / 100;
        // let area = x * y;
        let a = 3;
        let b = 10;
        // c = a + b
        let d = 5;
        let e = 10;


        // Angles for shear and rotate
        let shearA = PI / 4; // shear angle
        let rotA = PI; // rotate angle
        //for (let i = 0; i < height/(b*y); i++) {
        for (let i = 0; i < 1; i++) {
            tiles.push(new Tile(y, shearA, rotA, a, b, d, e));

        }


    }

show() {
    for (let i = 0; i < tiles.length; j++) {

        tiles[i].show();
    }
}
}