// run `node index.js` in the terminal

let worldSize = 15;
const food = "*";
const player = "@";
const body = "#";
const cell = "x";
let direction = "w";
const bodyPositions = [];
let playerPosition = {
  x: 7,
  y: 7,
};
let row = "";

for (let y = 0; y < worldSize; y++) {
  for (let x = 0; x < worldSize; x++) {
    let foundBody = false;
    for (let bodyPosition of bodyPositions) {
      if (bodyPosition.x == x && bodyPosition.y == y) {
        row += body;
        foundBody = true;
      }
    }
    if (foundBody) {
      continue;
    }
    if (playerPosition.x == x && playerPosition.y == y) {
      row += player;
      if (direction == "w") {
        player.y++;
      }
    } else row += "-";
  }
  console.log(row);
  row = "";
}
//return console.log("0");

process.stdin.on("data", (data) => {
  // stdin(direction);
  direction = data.toString();
  console.log(direction);
});
