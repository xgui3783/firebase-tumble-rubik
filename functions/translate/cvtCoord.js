/**
 * nb it is assumed that inputspace and output space has been sorted already
 * and that dim is in the same order inputspace & outputspace
 */
exports.cvtCoord = (tuple, inputSpace, outputSpace, dim) => 
  tuple.map((v, idx) => inputSpace[idx] === outputSpace[idx]
    ? v
    : dim[idx] - v)