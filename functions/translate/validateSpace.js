const determineAxis = require('./determineAxis').determineAxis

module.exports = (spaceString) => {
  if(spaceString.length !== 3)
    throw new Error('space needs to be 3 letters long')
  const set = spaceString.split('')
    .map(l => l.toUpperCase())
    .reduce((acc, curr) => new Set(acc).add(determineAxis(curr)), new Set())
  if(set.length < 3 || set.has(undefined))
    throw new Error('set is ill defined')
  return spaceString
}