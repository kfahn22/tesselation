/*
  p5.bezier.js basic example
  Peiling Jiang
  NYU ITP/IMA 2020
*/

let x = 100;
let y = 100;

function setup() {
    let c = createCanvas(500, 500)
    p5bezier.initBezier(c)
    noFill()
  }
  
  function draw() {
    background(235)
    strokeWeight(2)
    p5bezier.newBezier([
      [0.1*x, 10],
      [100, 700],
      [500, -800],
      [800, 1000],
      [10, 300],
    ])
  }