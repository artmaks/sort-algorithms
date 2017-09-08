import { expect } from 'chai';

import { nativeSort } from '../algorithms/native'
import { getRandomInt } from '../utils/random'

const listOfSortFunctions = [nativeSort]

describe('Testing of all sort algorithms', function () {
  listOfSortFunctions.forEach((sortFunction) => {
    const functionName = sortFunction.name; 
    describe(`testing ${functionName}` , function () {

      describe('Large Array (1000 items) with random elements from 0 to 9999', function () {
        const largeArray = new Array(1000).fill(0).map(() => getRandomInt(0, 1000));
        expect(largeArray.sort((a, b) => { return a - b })).to.deep.equal(sortFunction(largeArray))
      })

    })
  })
})