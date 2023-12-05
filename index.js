// run `node index.js` in the terminal
var readlineSync = require("readline-sync");

let worldSizeX = 17;
let worldSizeY = 9;
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
print(worldSizeX, worldSizeY);

while (direction != "x") {
  readDirectInputAndChangePlayerPosition();
  print(worldSizeX, worldSizeY);
}

function print(x, y) {
  console.clear();
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 17; x++) {
      let foundBody = false;

      if (playerPosition.x == x && playerPosition.y == y) {
        row += player;
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
}

function readDirectInputAndChangePlayerPosition() {
  direction = readlineSync.prompt({ limit: /[wasdx]/ });
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
}

// if (direction != "") direction = readlineSync.prompt({ limit: /[wasdx]/ });
// switch (direction) {
//   case "a":
//     playerPosition.x--;
//     break;
//   case "d":
//     playerPosition.x++;
//     break;
//   case "w":
//     playerPosition.y--;
//     break;
//   case "s":
//     playerPosition.y++;
//     break;
// }
// console.clear();
// for (let y = 0; y < 9; y++) {
//   for (let x = 0; x < 17; x++) {
//     let foundBody = false;

//     if (playerPosition.x == x && playerPosition.y == y) {
//       row += player;
//       direction = "";
//     } else row += "-";

//     for (let bodyPosition of bodyPositions) {
//       if (bodyPosition.x == x && bodyPosition.y == y) {
//         row += body;
//         foundBody = true;
//       }
//     }
//     if (foundBody) {
//       continue;
//     }
//   }
//   console.log(row);
//   row = "";
//   direction = "p";
// }
