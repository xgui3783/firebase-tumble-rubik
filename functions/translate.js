const validateSpace = require('./translate/validateSpace')
const cvtRealVoxel = require('./translate/cvtRealVoxel')
const cvtSpace = require('./translate/cvtSpace')
const dictionary = require('./translate/dictionary')

exports.readme = `
Call Function with a post request, 
Ideally set Header: Content-Type: application/json
Body: stringified JSON with the following keys:

[required]coords: Array of [number, number, number]
[default=false]coordsRealFlag: Boolean, weather coords is in real space (mm)
[default=LAS]coordsSpace: space input coord is in

[default=coordsSpace]outputSpace: space of output coord
[default=false]returnRealFlag: Boolean, weather the output will be in real space (mm)

either
  [required]dictionarySpace = ${Array.from(dictionary.dictionary.keys()).join(' | ')}
or
  [required]dims: [number, number, number]
  [default=false]dimsRealFlag: Boolean, wheather dims provided is in real space (mm)
  [default=coordsSpace]dimsSpace: space dims is in
  [required]voxelDims: voxel dimension in mm/voxel

  [default=[0,0,0]]transl: [number,number,number]
  [default=false]translRealFlag: Boolean, weather translation is in real space (mm)
  [default=dimsSpace]translSpace: space tralsation is in

`

exports.translate = (req) => {
  const { dictionarySpace } = req.body
  const {
    coords,     coordsRealFlag = false,   coordsSpace = 'LAS',
    dims,       dimsRealFlag = false,     dimsSpace,      voxelDims, /** mm/voxel */
    transl = [0,0,0],     translRealFlag = false,   translSpace,
    outputSpace,
    returnRealFlag = false
  } = Object.assign({}, req.body, 
    dictionarySpace
      ? dictionary.getDefinition(dictionarySpace)
      : ({}))



  const getCoordsSpace = () => validateSpace(coordsSpace)

  const getOutputSpace = () => outputSpace
    ? validateSpace(outputSpace)
    : getCoordsSpace()

  const getDimSpace = () => dimsSpace
    ? validateSpace(dimsSpace)
    : getCoordsSpace()
  
  const getTranslSpace = () => translSpace
    ? validateSpace(translSpace)
    : getDimSpace()

  if(!voxelDims){
    throw new Error('voxelDims is undefined')
  }
 
  if(!dims){
    throw new Error('dims is undefined')
  }

  const realVoxelDims = cvtRealVoxel.cvtRealVoxel(dims, dimsRealFlag, returnRealFlag, voxelDims)

  const cvtSpaceIO = cvtSpace.cvtSpace(coordsSpace, getOutputSpace(), realVoxelDims, getDimSpace())

  const cvtSpaceTO = cvtSpace.cvtSpace(getTranslSpace(), getOutputSpace(), realVoxelDims, getDimSpace())
  const realVoxelSpaceTransl = cvtSpaceTO(
    cvtRealVoxel.cvtRealVoxel(transl, translRealFlag, returnRealFlag,realVoxelDims)
  )

  return coords
    /**
     * cvt to real/voxel
     */
    .map(tuple => cvtRealVoxel.cvtRealVoxel(tuple, coordsRealFlag, returnRealFlag, voxelDims ))
    /**
     * cvt space
     */
    .map(tuple => cvtSpaceIO(tuple))
    /**
     * apply transform
     */
    .map(tuple => tuple.map((v, idx) => v + realVoxelSpaceTransl[idx]))
}