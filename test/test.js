const expect = require('chai').expect

describe('mocha works properly', () => {
  it('should add 1 and 1', () => {
    expect(1+1).to.be.equal(2)
  })
})

require('../functions/cvtCoord.spec')
require('../functions/cvtRealVoxel.spec')

require('../functions/determineAxis.spec')
require('../functions/reorderBySpace.spec')