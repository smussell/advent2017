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