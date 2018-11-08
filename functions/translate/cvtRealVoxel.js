
exports.cvtRealVoxel = (inputTuple, inputRealFlag, outputRealFlag, voxelDim) => 
  inputTuple.map((v, idx) => v * 
    (outputRealFlag
      ? voxelDim[idx]
      : 1) /
    (inputRealFlag
      ? voxelDim[idx]
      : 1)
  )