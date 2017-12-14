const input = [102,255,99,252,200,24,219,57,103,2,226,254,1,0,69,216]

let list = [];
for(let i = 0; i < 256; i++) {
  list.push(i);
}

function take(list, start, num) {
  const collect = [];
  for(let i = 0; i < num; i++) {
    collect.push(list[(start + i) % list.length]);
  }
  return collect;
}

function solve(list, input) {
  let current = 0;
  let skipSize = 0;
  input.forEach(d => {
    let sub = take(list, current, d);
    sub.reverse();
    sub.forEach((f, i) => {
      list[(current + i) % list.length] = f
    });
    current += skipSize + d;
    skipSize++;
  })
  return list
}

solve(list, input)



