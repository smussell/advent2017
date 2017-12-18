// const list = [0, 1, 2, 3, 4] 
const input = '102,255,99,252,200,24,219,57,103,2,226,254,1,0,69,216'


let list = [];
for(let i = 0; i < 256; i++) {
  list.push(i);
}

function toAscii(str) {
  const collect = [];
  for(let i = 0; i < str.length; i++) {
    collect.push(str.charCodeAt(i));
  }
  return collect;
}

const padd = [17, 31, 73, 47, 23];

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
  for(let m = 0; m < 64; m++) {
    input.forEach(d => {
      let sub = take(list, current, d);
      sub.reverse();
      sub.forEach((f, i) => {
        list[(current + i) % list.length] = f
      });
      current += skipSize + d;
      skipSize++;
    })
  }
  return list
}

let qw = solve(list, toAscii(input).concat(padd)).reduce((a, c, i) => {
  return (a.buf.length % 16) === 15 ?
    {
      buf: [],
      res: a.res.concat(a.buf.concat([c]).reduce((b, d) => b ^ d))
    }
    : {...a, buf: a.buf.concat([c])}
}, {buf: [], res: []})
.res.map(d => d.toString(16)).map(d => d.length === 1 ? 0 + d : d).join('');

qw