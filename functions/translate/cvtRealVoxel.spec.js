const expect = require('chai').expect
const cvtRealVoxel = require('./cvtRealVoxel')


const tuple = [1,3,9]
const tupleReal = [100, 600, 2700]
const dim = [100, 200, 300]

describe('cvtRealVoxel.js works properly', () => {
  it('does not transform if both true', () => {
    expect(
      cvtRealVoxel.cvtRealVoxel(tupleReal,true,true,dim)
    ).to.be.deep.equal(tupleReal)
  })

  it('does not transform if both false', () => {
    expect(
      cvtRealVoxel.cvtRealVoxel(tuple, false, false, dim)
    ).to.be.deep.equal(tuple)
  })

  it('converts properly from real to voxel', () => {
    expect(
      cvtRealVoxel.cvtRealVoxel(tupleReal, true,false,dim)
    ).to.be.deep.equal(tuple)
  })

  it('cvt voxel to real', () => {
    expect(
      cvtRealVoxel.cvtRealVoxel(tuple, false, true, dim)
    ).to.be.deep.equal(tupleReal)
  })
})