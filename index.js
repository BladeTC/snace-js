// run `node index.js` in the terminal
import { prompt } from "readline-sync";
const food = "*";
const player = "@";
const body = "#";
const cell = ".";
let direction = "";

runWorld();

function runWorld() {
  let worldSizeX = 17;
  let worldSizeY = 9;
  //let grid = [];
  let foundBodys = 0;
  const bodyUnits = [];

  let foodPosition = {
    x: 6,
    y: 2,
  };

  let playerPosition = {
    x: 8,
    y: 4,
  };

  const grid = setupWorld(worldSizeY, worldSizeX, playerPosition, foodPosition);
  do {
    printUpdatedWorld(grid);
    for (let y = 0; y < worldSizeY; y++) {
      for (let x = 0; x < worldSizeX; x++) {
        if ("player is on the edge") {
          //loopPlayer();
        }
      }
    }
    readDirectInputAndChangePlayerPosition();
  } while (direction != "x");
}

function setupWorld(worldSizeY, worldSizeX, p, f) {
  let grid = [];
  for (let y = 0; y < worldSizeY; y++) {
    grid[y] = [];
    for (let x = 0; x < worldSizeX; x++) {
      grid[y][x] = cell;
    }
  }
  grid[p.y][p.x] = player;
  grid[f.y][f.x] = food;
  return grid;
}

function printUpdatedWorld(grid) {
  let row = "";
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      row += grid[y][x];
    }
    console.log(row);
    row = "";
  }
}

function readDirectInputAndChangePlayerPosition() {
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
