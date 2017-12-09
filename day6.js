const R = require('ramda');


// part 1

// let banks = [0, 2, 7, 0]
let banks = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6]

function findMaxInd(list) {
    let max = 0;
    list.forEach((d, i) => {
        if(list[max] < d) {
            max = i
        }
    })
    return max;
}

function hash(l) {
    return l.join('-')
}

let seen = new Set();
let counter = 0;

while (!seen.has(hash(banks))) {
    console.log(hash(banks));
    seen.add(hash(banks));
    let max = findMaxInd(banks);
    let blocks = banks[max];
    banks[max] = 0;
    for(let i = 1; blocks > 0; blocks--, i++) {
        banks[(max + i) % banks.length] += 1;
    }
    counter++;
}
console.log(banks)
console.log('FIN', counter)

// part 2 

// let banks = [0, 2, 7, 0]
let banks = [10, 3, 15, 10, 5, 15, 5, 15, 9, 2, 5, 8, 5, 2, 3, 6]

let seen = {};
let counter = 0;

while (!seen[hash(banks)]) {
    console.log(hash(banks));
    seen[hash(banks)] = counter;
    let max = findMaxInd(banks);
    let blocks = banks[max];
    banks[max] = 0;
    for(let i = 1; blocks > 0; blocks--, i++) {
        banks[(max + i) % banks.length] += 1;
    }
    counter++;
}
console.log(banks)
console.log('FIN', counter - seen[hash(banks)]);


