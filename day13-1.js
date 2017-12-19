let input = `
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
      range: parseInt(c[1], 10), down: true, pos: 0, depth: parseInt(c[0], 10)
    }, 
    ...a
  }), {})

const keys = Object.keys(input);
const max = Math.max.apply(Math, keys)

let me = 0;
let total = 0;
while (me <= max) {
  if(input[me]) {
    input[me].pos
    if(input[me].pos === 0) {
      total += (input[me].range * input[me].depth);
    }
  }
  Object.keys(input).forEach(d => {
    const item = input[d];
    let pos = item.down ? item.pos + 1 : item.pos - 1;
    let down = pos == 0 || pos == item.range-1 ? !item.down : item.down;
    input[d] = {...input[d], down, pos}
  })
  me++;
}

total
