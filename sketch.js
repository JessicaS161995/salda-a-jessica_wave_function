const celdas = [];
const RETICULA = 5;

const azulejos = [];
const NA = 17;
const reglas = [
  {
      // tile 0
      UP: 0,
      RIGHT: 0,
      DOWN: 0,
      LEFT: 0,
  },
  {
    // tile 1
    UP: 0,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 2
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 1,
  },
  {
  // tile 3
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 1,
  },
  {
  // tile 4
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 5
  UP: 0,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 6
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 1,
  },
  {
  // tile 7
  UP: 0,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 1,
  },
  {
  // tile 8
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
  // tile 9
  UP: 0,
  RIGHT: 0,
  DOWN: 2,
  LEFT: 0,
  },
  {
  // tile 10
  UP: 2,
  RIGHT: 0,
  DOWN: 0,
  LEFT: 0,
  },
  {
    // tile 11
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 12
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    // tile 13
    UP: 0,
    RIGHT: 0,
    DOWN: 2,
    LEFT: 0,
  },
  {
    // tile 14
    UP: 2,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
},
{
  // tile 15
  UP: 0,
  RIGHT: 1,
  DOWN: 0,
  LEFT: 0,
  },
  {
    // tile 16
    UP: 2,
    RIGHT: 1,
    DOWN: 0,
    LEFT: 0,
  },
  {
    // tile 17
    UP: 0,
    RIGHT: 0,
    DOWN: 0,
    LEFT: 1,
},
];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  circle(mouseX, mouseY, 20);
}
