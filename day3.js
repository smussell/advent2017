// part 1

const n = 23;

function solve(n) {
  for (var i = n; true; i++) {
    let sq = Math.sqrt(i);
    if (sq % 1 === 0) {
      break;
    }
  }

  let centerNumber = 0;
  if (n > i - (Math.sqrt(i) - 1)) {
    centerNumber = i - (Math.ceil(Math.sqrt(i) / 2) - 1);
  } else {
    centerNumber = i - (Math.sqrt(i) - 1) - Math.floor(Math.sqrt(i) / 2)
  }

  return Math.floor(Math.sqrt(i) / 2) + Math.abs(n - centerNumber);
}

solve(n)

// part 2


let grid = {'0,0': 1}
let current = [0, 0]

const dirs = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1]
];
const diags = [
  [1, 1],
  [1, -1],
  [-1, -1],
  [-1, 1]
];

let spaces = 1
let dir = 0

let answer;

for (let i = 0; i < 30; i++) {
  for (let j = 0; j < spaces; j++) {
    const [x, y] = current;
    const sum = sumPos(current) || 1;
    grid[`${x},${y}`] = sum;
    if (sum > 312051) {
      answer = sum;
      break;
    }
    current = [x + dirs[dir][0], y + dirs[dir][1]]
  }

  if (answer) break;

  if (i % 2 !== 0) spaces++;
  dir = (dir + 1) % 4
}

function sumPos(pos) {
  const allDirs = dirs.concat(diags);
  const [x, y] = pos;
  return allDirs.reduce((a, c) => {
    const val = grid[`${x + c[0]},${y + c[1]}`];
    return val ? a + val : a;
  }, 0)
}

console.log(answer);
