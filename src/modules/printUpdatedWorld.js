export { printUpdatedWorld };

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
