export { cleanGrid };

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
