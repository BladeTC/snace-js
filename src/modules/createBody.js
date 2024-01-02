export { createBody };

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
