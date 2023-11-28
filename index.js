// run `node index.js` in the terminal

let worldSize = 15;
const food = '*';
const player = '@';
const body = '#';
const cell = 'x';
let direction = 'w';
const bodyPositions = [
  {
    x: 3,
    y: 3,
  },
  {
    x: 4,
    y: 3,
  },
  {
    x: 3,
    y: 3,
  },
  {
    x: 3,
    y: 3,
  },
];
let playerPosition = {
  x: 2,
  y: 3,
};
let row = '';

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
      if (direction == 'w') {
        player.y++;
      }
    } else row += '-';
  }
  console.log(row);
  row = '';
}
