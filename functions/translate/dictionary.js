
const allenv3 = {
  transl: [-5737500,-6637500,-4037500].map(v => v / 1e6),
  translRealFlag: true,
  translSpace: 'RAS',

  dims:[456,528,320],
  dimsRealFlag:false,
  dimsSpace:'RAS',
  voxelDims:[0.025, 0.025, 0.025],
}

const waxholmv2 = {
  transl: [-9550781,-24355468,-9707031].map(v => v / 1e6),
  translRealFlag: true,
  translSpace: 'RAS',

  dims:[512,1024,512],
  dimsRealFlag:false,
  dimsSpace:'RAS',
  voxelDims:[0.0390625, 0.0390625, 0.0390625],
}

const dict = new Map([
  ['nehuba_amba_v3', allenv3],
  ['nehuba_waxholm_v2', waxholmv2]
])

exports.dictionary = dict

exports.getDefinition = (key) => dict.get(key)
  ? dict.get(key)
  : ({})