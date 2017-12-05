// part 1

puzzle.split('\n')
  .reduce((a, c) => {
    let seen = {}
    let valid = true
    c.split(' ').forEach(d => {
      if (seen[d]) valid = false;
      seen[d] = true
    })
    return valid ? a + 1 : a
  }, 0)


// part 2

const R = require('ramda')

const letterCount = s => s.split('')
  .reduce((a, c) => Object.assign(a, {[c]: a[c] ? a[c] + 1 : 1}), {})

puzzle2.split('\n')
  .reduce((a, c) => {
    let seen = []
    let valid = true
    const splited = c.split(' ')
    for (let i = 0; i < splited.length; i++) {
      const letters = letterCount(splited[i]);
      if (seen.find(d => R.equals(letters, d))) {
        valid = false;
        break;
      }
      seen.push(letters)
    }
    return valid ? a + 1 : a
  }, 0);