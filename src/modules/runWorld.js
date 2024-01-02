export { runWorld };
import { cleanGrid } from "./cleanGrid";
import { createBody } from "./createBody";
import { generateFood } from "./generateFood";
import { loopPlayer } from "./loopPlayer";
import { printUpdatedWorld } from "./printUpdatedWorld";
import { readDirectInputAndChangePlayerPosition } from "./readDirectInputAndChangePlayerPosition";

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
