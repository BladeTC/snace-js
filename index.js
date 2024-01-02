// run `node index.js` in the terminal
import { prompt } from "readline-sync";

let worldSizeX = 17;
let worldSizeY = 9;
const food = "*";
const player = "@";
const body = "#";
const cell = ".";
let direction = "";
const bodyUnits = [];
let foodPosition = {
  x: 6,
  y: 2,
};
let playerPosition = {
  x: 8,
  y: 4,
};
let row = "";
let foundBodys = 0;
print(worldSizeX, worldSizeY);

while (direction != "x") {
  readDirectInputAndChangePlayerPosition();
  print(worldSizeX, worldSizeY);
}

function print(x, y) {
  console.clear();
  for (let y = 0; y < worldSizeY; y++) {
    for (let x = 0; x < worldSizeX; x++) {
      loopPlayer();
      if (bodyUnits.length != 0 && foundBodys == 0) {
        for (let i = 0; i <= bodyUnits.length - 1; i++) {
          if (bodyUnits[i].x == x && bodyUnits[i].y == y) {
            row += body;
            foundBodys++;
          }
        }
        row += cell;
      } else if (playerPosition.x == x && playerPosition.y == y) {
        row += player;
      } else if (foodPosition.x == x && foodPosition.y == y) {
        row += food;
      } else if (
        foodPosition.x == playerPosition.x &&
        foodPosition.y == playerPosition.y
      ) {
        generateFood();
        generateBody();
      } else row += cell;
    }
    console.log(row);
    row = "";
    foundBodys = 0;
  }
}

function printBody() {
  array.forEach((element) => {});
}

function generateBody() {
  let bodyPosition = Math.round(Math.random(2) + 1);
  if (bodyUnits.length == 0) {
    switch (direction) {
      case "w":
      case "a":
      case "s":
      case "d":
        bodyUnits[0] = { x: playerPosition.x + 1, y: playerPosition.y };
        break;
    }
  }
}

function loopPlayer() {
  if (playerPosition.x == worldSizeX) {
    playerPosition.x = 0;
  } else if (playerPosition.y == worldSizeY) {
    playerPosition.y = 0;
  } else if (playerPosition.x == -1) {
    playerPosition.x = worldSizeX - 1;
  } else if (playerPosition.y == -1) {
    playerPosition.y = worldSizeY - 1;
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
