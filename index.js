// run `node index.js` in the terminal
import { prompt } from "readline-sync";
const food = "*";
const player = "@";
const body = "#";
const cell = ".";
let direction = "";

runWorld();

function runWorld() {
  const worldSize = {
    x: 17,
    y: 9,
  };
  let grid;

  let foodPosition = {
    x: 6,
    y: 2,
  };

  let playerPosition = {
    x: 8,
    y: 4,
  };

  //const grid = setupWorld(worldSizeY, worldSizeX, playerPosition, foodPosition);
  do {
    grid = cleanGrid(worldSize);
    //printUpdatedWorld(grid, playerPosition, foodPosition);
    for (let y = 0; y < worldSize.y; y++) {
      for (let x = 0; x < worldSize.x; x++) {
        if (
          playerPosition.x == foodPosition.x &&
          playerPosition.y == foodPosition.y
        ) {
          console.clear();
          generateFood(worldSize, foodPosition, playerPosition);
          //addBody();
          printUpdatedWorld(grid, playerPosition, foodPosition);
        }

        if (
          playerPosition.x == -1 ||
          playerPosition.x == worldSize.x ||
          playerPosition.y == -1 ||
          playerPosition.y == worldSize.y
        ) {
          loopPlayer(worldSize, playerPosition);
          //printUpdatedWorld(grid, playerPosition, foodPosition);
        }
      }
    }
    printUpdatedWorld(grid, playerPosition, foodPosition);
    readDirectInputAndChangePlayerPosition(playerPosition);
  } while (direction != "x");
}

function loopPlayer(worldSize, playerPosition) {
  if (playerPosition.x == -1) {
    playerPosition.x = worldSize.x - 1;
  }
  if (playerPosition.x == worldSize.x) {
    playerPosition.x = 0;
  }
  if (playerPosition.y == -1) {
    playerPosition.y = worldSize.y - 1;
  }
  if (playerPosition.y == worldSize.y) {
    playerPosition.y = 0;
  }
}

function generateFood(worldSize, foodPosition, playerPosition) {
  do {
    foodPosition.x = Math.round(Math.random(worldSize.x) * (worldSize.x - 1));
    foodPosition.y = Math.round(Math.random(worldSize.y) * (worldSize.y - 1));
  } while (
    foodPosition.x == playerPosition.x &&
    foodPosition.y == playerPosition.y
  );
}

function cleanGrid(worldSize) {
  let grid = [];
  for (let y = 0; y < worldSize.y; y++) {
    grid[y] = [];
    for (let x = 0; x < worldSize.x; x++) {
      grid[y][x] = cell;
    }
  }
  return grid;
}

function printUpdatedWorld(grid, playerPosition, foodPosition) {
  console.clear();
  let row = "";
  grid[foodPosition.y][foodPosition.x] = food;
  grid[playerPosition.y][playerPosition.x] = player;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      row += grid[y][x];
    }
    console.log(row);
    row = "";
  }
}

function readDirectInputAndChangePlayerPosition(playerPosition) {
  direction = prompt({ limit: /[wasdx]/ });
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
