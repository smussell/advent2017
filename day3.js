
var n = 312051


function solve(n) {
  let isEven = false;
  for(var i = n; true; i++) {
    let sq = Math.sqrt(i);
    if(sq % 1 === 0) {
      if(sq % 2 === 0) {
        isEven = true;
      }
      break;
    }
  }

  const side = findSide(n, i, isEven)

  let centerNumber = 0;
  if(side == 'top' || side == 'bottom') {
    centerNumber = i - (Math.ceil(Math.sqrt(i) / 2) - 1);
  } else {
    centerNumber = i - (Math.sqrt(i) - 1) - Math.floor(Math.sqrt(i) / 2)
  }

  return Math.floor(Math.sqrt(i) / 2) + Math.abs(n - centerNumber);
}

function findSide(n, i, isEven) {
  if(n > i - (Math.sqrt(i) - 1)) {
    return isEven ? 'top' : 'bottom';
  } else {
    return isEven ? 'right' : 'left';
  }
}

solve(n)
