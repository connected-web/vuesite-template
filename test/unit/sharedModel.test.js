const { expect } = require('chai')
const sharedModel = require('../../docs/components/models/sharedStore')

describe('Shared model', () => {
  it('should expose the expected models', () => {
    const actual = Object.keys(sharedModel)
    const expected = ['a', 'b', 'c']
    expect(actual).to.deep.equal(expected)
  })
})
