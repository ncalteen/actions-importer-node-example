const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { getList, getNumber, getSequence } = require('../../index.js')

When('I provide a number input of {int}', function (input) {
  this.myNumber = getNumber(input)
})
Then('I should receive the number {int}', function (expectedResponse) {
  assert.equal(this.myNumber, expectedResponse)
})

When('I provide a list input of {int}', function (input) {
  this.myList = getList(input)
})
Then('I should receive the list {}', function (expectedResponse) {
  expectedResponse = JSON.parse(expectedResponse)
  assert.equal(this.myList.length, expectedResponse.length)

  for (let i = 0; i < this.myList.length; i++) {
    assert.equal(this.myList[i], expectedResponse[i])
  }
})

When('I provide a generator input of {int}', function (input) {
  this.myGenerator = getSequence(input)
})
Then(
  'I should receive the generator starting at position {int}',
  function (expectedResponse) {
    const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

    for (let i = expectedResponse; i < expected.length; i++) {
      assert.equal(this.myGenerator.next().value, getNumber(i))
    }
  }
)
