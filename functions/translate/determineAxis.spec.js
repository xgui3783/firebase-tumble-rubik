const expect = require('chai').expect
const da = require('./determineAxis')

describe('determineAxis.js work', () =>{
  it('x work', () => {
    expect(
      da.determineAxis('L')
    ).to.be.equal(da.x)
    expect(
      da.determineAxis('R')
    ).to.be.equal(da.x)
  })
  it('y work', () => {
    expect(
      da.determineAxis('A')
    ).to.be.equal(da.y)
    expect(
      da.determineAxis('P')
    ).to.be.equal(da.y)
  })
  it('z work', () => {
    expect(
      da.determineAxis('S')
    ).to.be.equal(da.z)
    expect(
      da.determineAxis('I')
    ).to.be.equal(da.z)
  })

  it('lower cases do not work', () => {
    ['l','r','a','p','s','i'].map(l => expect(
      da.determineAxis(l)
    ).to.be.equal(undefined))
  })

  it('other letters do not work', () => {
    ['B', 'C'].map(l => expect(
      da.determineAxis(l)
    ).to.be.equal(undefined))
  })
})