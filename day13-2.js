  
const firewalls = `
0: 3
1: 2
2: 6
4: 4
6: 4
8: 8
10: 6
12: 8
14: 5
16: 6
18: 8
20: 8
22: 12
24: 6
26: 9
28: 8
30: 12
32: 12
34: 17
36: 12
38: 8
40: 12
42: 12
44: 10
46: 12
48: 12
50: 12
52: 14
54: 14
56: 10
58: 14
60: 12
62: 14
64: 14
66: 14
68: 14
70: 14
72: 14
74: 14
76: 14
86: 14
94: 20
96: 18`.trim().split('\n')
    .map(d => d.split(': '))
    .reduce((a ,c) => ({[parseInt(c[0], 10)]: {
        range: parseInt(c[1], 10), depth: parseInt(c[0], 10)
      }, 
      ...a
    }), {})

const keys = Object.keys(firewalls);
const indexMap = keys.reduce((a, c, i) => ({[c]: i, ...a}), {});
let state = keys.map(d => ([0, true]));
const max = Math.max.apply(Math, keys);

function findPos(t, range) {
  const i = Math.floor(t /(range - 1));
  const d = t % (range - 1);
  return i % 2 === 0 ? 0 + d : (range - 1) - d;  
}

function run(start) {
  let me = 0;
  let time = start;
  let caught = false;
  
  while (me <= max) {
    if(firewalls[me]) {
      const pos = findPos(time, firewalls[me].range);
      if(pos === 0) {
        caught = true;
      }
    }
    time++;
    me++;
  }
  return caught;
}

for(let i = 10000; i <= 4000000; i++) {
  let caught = run(i);
  if(!caught) {
    console.log('done', i)
    break;
  }
}

