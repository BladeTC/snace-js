// run `node index.js` in the terminal
var readlineSync = require("readline-sync");

let worldSize = 15;
const food = "*";
const player = "@";
const body = "#";
const cell = "x";
let direction = "";
const bodyPositions = [];
let playerPosition = {
  x: 8,
  y: 4,
};
let row = "";
do {
  if (direction != "") direction = readlineSync.prompt({ limit: /[wasdx]/ });
  switch (direction) {
    case "a":
      playerPosition.x--;
      break;
    case "d":
      playerPosition.x++;
      break;
    case "w":
      playerPosition.y--;
      break;
    case "s":
      playerPosition.y++;
      break;
  }
  console.clear();
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 17; x++) {
      let foundBody = false;

      if (playerPosition.x == x && playerPosition.y == y) {
        row += player;
        direction = "";
      } else row += "-";

      for (let bodyPosition of bodyPositions) {
        if (bodyPosition.x == x && bodyPosition.y == y) {
          row += body;
          foundBody = true;
        }
      }
      if (foundBody) {
        continue;
      }
    }
    console.log(row);
    row = "";
    direction = "p";
  }
} while (direction != "x");
