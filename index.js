// run `node index.js` in the terminal
import { prompt } from "readline-sync";

runWorld();

function runWorld() {
  let direction = "";
  let grid;

  let tails = [];

  const worldSize = {
    x: 17,
    y: 9,
  };

  let foodPosition = {
    x: 6,
    y: 2,
  };

  let playerPosition = {
    x: 8,
    y: 4,
  };

  do {
    grid = cleanGrid(worldSize);
    //printUpdatedWorld(grid, playerPosition, foodPosition);
    for (let y = 0; y < worldSize.y; y++) {
      for (let x = 0; x < worldSize.x; x++) {
        //player eats food
        if (
          playerPosition.x == foodPosition.x &&
          playerPosition.y == foodPosition.y
        ) {
          generateFood(worldSize, foodPosition, playerPosition);
          createBody(tails, playerPosition, direction);
        }

        //player loops around the edge
        if (
          playerPosition.x == -1 ||
          playerPosition.x == worldSize.x ||
          playerPosition.y == -1 ||
          playerPosition.y == worldSize.y
        ) {
          loopPlayer(worldSize, playerPosition);
        }
      }
    }
    printUpdatedWorld(grid, playerPosition, foodPosition, tails, direction);

    direction = readDirectInputAndChangePlayerPosition(playerPosition);
  } while (direction != "x");
}

function createBody(tails, playerPosition, direction) {
  let x = playerPosition.x;
  let y = playerPosition.y;

  switch (direction) {
    case "w":
      y++;
      break;
    case "s":
      y--;
      break;
    case "a":
      x++;
      break;
    case "d":
      x--;
      break;
  }
  tails.push({ x, y });
  return tails;
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
  const cell = ".";
  let grid = [];
  for (let y = 0; y < worldSize.y; y++) {
    grid[y] = [];
    for (let x = 0; x < worldSize.x; x++) {
      grid[y][x] = cell;
    }
  }
  return grid;
}

function printUpdatedWorld(grid, playerPosition, foodPosition, tails) {
  console.clear();
  let row = "";
  const food = "*";
  const player = "@";
  const body = "#";
  const cell = ".";

  grid[foodPosition.y][foodPosition.x] = food;

  for (const tail of tails) {
    grid[tail.y][tail.x] = body;
  }

  grid[playerPosition.y][playerPosition.x] = player;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      row += grid[y][x];
    }
    console.log(row);
    row = "";
  }
}

function readDirectInputAndChangePlayerPosition(playerPosition, direction) {
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
  return direction;
}
