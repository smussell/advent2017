
var n = 23

function solve(n) {
  for(var i = n; true; i++) {
    let sq = Math.sqrt(i);
    if(sq % 1 === 0) {
      break;
    }
  }

  let centerNumber = 0;
  if(n > i - (Math.sqrt(i) - 1)) {
    centerNumber = i - (Math.ceil(Math.sqrt(i) / 2) - 1);
  } else {
    centerNumber = i - (Math.sqrt(i) - 1) - Math.floor(Math.sqrt(i) / 2)
  }

  return Math.floor(Math.sqrt(i) / 2) + Math.abs(n - centerNumber);
}

solve(n)
