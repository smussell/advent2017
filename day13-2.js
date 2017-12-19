function getIn() {  
  return `
  0: 3
  1: 2
  4: 4
  6: 4`.trim().split('\n')
    .map(d => d.split(': '))
    .reduce((a ,c) => ({[parseInt(c[0], 10)]: {
        range: parseInt(c[1], 10), down: true, pos: 0, depth: parseInt(c[0], 10)
      }, 
      ...a
    }), {})
}

const input = getIn();
const keys = Object.keys(input);
const max = Math.max.apply(Math, keys)

let states = []

for(let i = 0; i < 10000; i++) {
  states.push({...input})
}



function run(start) {
  
  let me = -1;
  let total = 0;
  let time = 0;
  
  while (me <= max) {
    if(time >= start) me++;
    if(input[me]) {
      input[me].pos
      if(input[me].pos === 0) {
        total += (input[me].range * input[me].depth);
      }
    }
    states.push(Object.entries(input).map(d => d[1]));
    Object.keys(input).forEach(d => {
      const item = input[d];
      let pos = item.down ? item.pos + 1 : item.pos - 1;
      let down = pos == 0 || pos == item.range-1 ? !item.down : item.down;
      input[d] = {...input[d], down, pos}
    })
    time++;
  }
  return total;
}
run(0)

// for(let i = 0; i < 100; i++) {
//   let tot = run(i);
//   if(tot == 0) {
//     console.log('done', i)
//     break;
//   }
// }


