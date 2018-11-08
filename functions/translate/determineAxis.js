const x = new Set(['L', 'R']),
  y = new Set(['A', 'P']),
  z = new Set(['S', 'I'])

exports.x = x
exports.y = y
exports.z = z
exports.determineAxis = (letter) => [x, y, z].find(sth => sth.has(letter))