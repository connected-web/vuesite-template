const { expect } = require('chai')
const sharedModel = require('../../docs/components/models/sharedStore')

describe('Shared model', () => {
  it('should expose the expected models', () => {
    const actual = Object.keys(sharedModel)
    const expected = ['debug', 'state', 'setMessage', 'updateLocalStorage', 'readFromLocalStorage']
    expect(actual).to.deep.equal(expected)
  })
})
