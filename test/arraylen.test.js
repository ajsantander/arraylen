const ArrayLen = artifacts.require('ArrayLen')

contract('ArrayLen', () => {
  let contract

  before('deploy', async () => {
    contract = await ArrayLen.new()
  })

  it('validates an array with 3 elements', async () => {
    const result = await contract.checkLen([1, 2, 3])
    assert.equal(result, true)
  })

  it('invalidates an array with 2 elements', async () => {
    const result = await contract.checkLen([1, 2])
    assert.equal(result, false)
  })

  it('invalidates an array with 4 elements', async () => {
    const result = await contract.checkLen([1, 2, 3, 4])
    assert.equal(result, false)
  })
})
