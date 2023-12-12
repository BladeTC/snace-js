// run `node index.js` in the terminal
var readlineSync = require("readline-sync");

let worldSizeX = 17;
let worldSizeY = 9;
const food = "*";
const player = "@";
const body = "#";
const cell = " ";
let direction = "";
const bodyPositions = [];
let foodPosition = {
  x: 6,
  y: 2,
};
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
  for (let y = 0; y < worldSizeY; y++) {
    for (let x = 0; x < worldSizeX; x++) {
      let foundBody = false;

      if (playerPosition.x == worldSizeX) {
        playerPosition.x = 0;
      } else if (playerPosition.y == worldSizeY) {
        playerPosition.y = 0;
      } else if (playerPosition.x == -1) {
        playerPosition.x = worldSizeX - 1;
      } else if (playerPosition.y == -1) {
        playerPosition.y = worldSizeY - 1;
      }

      if (playerPosition.x == x && playerPosition.y == y) {
        row += player;
      } else if (foodPosition.x == x && foodPosition.y == y) {
        row += food;
      } else if (
        foodPosition.x == playerPosition.x &&
        foodPosition.y == playerPosition.y
      ) {
        generateFood();
      } else row += cell;

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

function generateFood() {
  do {
    foodPosition.x = Math.round(Math.random(worldSizeX) * (worldSizeX - 1) + 1);
    foodPosition.y = Math.round(Math.random(worldSizeY) * (worldSizeY - 1) + 1);
  } while (
    foodPosition.x == playerPosition.x &&
    foodPosition.y == playerPosition.y
  );
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
