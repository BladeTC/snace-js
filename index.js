// run `node index.js` in the terminal
var readlineSync = require("readline-sync");

let worldSize = 15;
const food = "*";
const player = "@";
const body = "#";
const cell = "x";
let direction = "w";
const bodyPositions = [];
let playerPosition = {
  x: 7,
  y: 7,
};
let row = "";
do {
  direction = readlineSync.prompt({ limit: /[wasdx]/ });
  console.clear();
  console.log(direction);
  for (let y = 0; y < worldSize; y++) {
    for (let x = 0; x < worldSize; x++) {
      let foundBody = false;

      if (playerPosition.x == x && playerPosition.y == y) {
        if (direction == "w") {
          row += player;
          playerPosition.y--;
          direction = "";
        } else if (direction == "s") {
          row += player;
          playerPosition.y++;
          direction = "";
        } else if (direction == "a") {
          row += player;
          playerPosition.x--;
          direction = "";
        } else if (direction == "d") {
          row += player;
          playerPosition.x++;
          direction = "";
        }
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
  }
} while (direction != "x");
