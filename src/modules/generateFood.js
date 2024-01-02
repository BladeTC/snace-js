export { generateFood };

function generateFood(worldSize, foodPosition, playerPosition) {
  do {
    foodPosition.x = Math.round(Math.random(worldSize.x) * (worldSize.x - 1));
    foodPosition.y = Math.round(Math.random(worldSize.y) * (worldSize.y - 1));
  } while (
    foodPosition.x == playerPosition.x &&
    foodPosition.y == playerPosition.y
  );
}
