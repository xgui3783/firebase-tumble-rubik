const expect = require('chai').expect
const rbs = require('./reorderBySpace')

const tuple = [0,1,2]

const tuple1 = [0, 2, 1]
const tuple2 = [2, 1, 0]

const LAI = 'LAI',
  RPS = 'RPS',
  LIA = 'LIA',
  IAL = 'IAL'

describe('reorderBySpace.js works', () => {
  it('same space should not change order', () => {
    expect(
      rbs.reorderBySpace(LAI, LAI)(tuple)
    ).to.be.deep.equal(tuple)
  })

  it('different space name, same space order should not change order', () => {
    expect(
      rbs.reorderBySpace(LAI,RPS)(tuple)
    ).to.be.deep.equal(tuple)
  })

  it('2nd/3rd swap should swap 2nd and 3rd', () => {
    expect(
      rbs.reorderBySpace(LAI,LIA)(tuple)
    ).to.be.deep.equal(tuple1)
  })

  it('reverse should also work', () => {
    expect(
      rbs.reorderBySpace(LAI,IAL)(tuple)
    ).to.be.deep.equal(tuple2)
  })
})