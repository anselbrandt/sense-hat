const sense = require("sense-hat-led");

const sleep = sense.sync.sleep;

let t = 2;

sense.sync.clear();
sense.sync.setRotation(0);

const X = [248, 248, 248]; // black
const O = [0, 0, 0]; // White

const array = [
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  X,
  X,
  X,
  O,
  O,
  O,
  X,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

sense.sync.setPixels(array);
sleep(t);
sense.sync.clear();

