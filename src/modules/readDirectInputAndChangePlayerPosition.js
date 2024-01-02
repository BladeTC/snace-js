import { prompt } from "readline-sync";
export { readDirectInputAndChangePlayerPosition };

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
