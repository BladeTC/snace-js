export { loopPlayer };

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
