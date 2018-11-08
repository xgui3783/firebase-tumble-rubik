const determineAxis = require('./determineAxis')

exports.reorderBySpace = (inputSpace, targetSpace) => {
  const arr = inputSpace.split('')
    .map(letter => 
      targetSpace.split('').findIndex(l => determineAxis.determineAxis(l) === determineAxis.determineAxis(letter))
    )
  return (tuple) => [0, 1, 2].map(v => tuple[arr[v]])
}