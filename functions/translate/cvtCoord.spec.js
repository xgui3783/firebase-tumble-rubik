const expect = require('chai').expect
const cvtCoord = require('./cvtCoord')

const RAS = `RAS`

const LAS = `LAS`
const RPS = `RPS`
const RAI = `RAI`

const LPI = 'LPI'
const tuple = [1,3,9]

const tuple1 = [99, 3, 9]
const tuple2 = [1, 197, 9]
const tuple3 = [1, 3, 291]

const tuple4 = [99, 197, 291]

const ndim = [100, 200, 300]

describe('cvtCoord.js works properly', () => {
  it('should leave tuple intact if I === O', () => {
    expect(
      cvtCoord.cvtCoord(tuple, RAS, RAS, ndim)
      ).to.be.deep.equal(tuple)
  })
  it('should flip x accordinly', () => {
    expect(
      cvtCoord.cvtCoord(tuple, RAS, LAS, ndim)
    ).to.be.deep.equal(tuple1)
  })
  it('should flip y accordinly', () => {
    expect(
      cvtCoord.cvtCoord(tuple, RAS, RPS, ndim)
    ).to.be.deep.equal(tuple2)
  })
  it('should flip z accordinly', () => {
    expect(
      cvtCoord.cvtCoord(tuple, RAS, RAI, ndim)
    ).to.be.deep.equal(tuple3)
  })

  it('should flip xyz accordingly', () => {
    expect(
      cvtCoord.cvtCoord(tuple, RAS, LPI, ndim)
    ).to.be.deep.equal(tuple4)
  })
})