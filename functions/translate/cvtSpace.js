const reorderByspace = require('./reorderBySpace')
const cvtCoord = require('./cvtCoord')

exports.cvtSpace = (inputSpace, outputSpace, ndim, ndimSpace) => {
  const reorderIO = reorderByspace.reorderBySpace(inputSpace, outputSpace)
  const reorderDO = reorderByspace.reorderBySpace(ndimSpace, outputSpace)

  const reorderedDim = reorderDO(ndim)
  return (tuple) => {
    const reorderedInput = reorderIO(tuple)
    const reorderedInputSpace = reorderIO(inputSpace.split('')).join('')
    return cvtCoord.cvtCoord(reorderedInput, reorderedInputSpace, outputSpace, reorderedDim)
  }
}
