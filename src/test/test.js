import { expect } from 'chai';

import { nativeSort } from '../algorithms/native'
import { bubbleSort, bubbleSortWithAdvancedSwap } from '../algorithms/bubble'
import { getRandomInt } from '../utils/random'

const listOfSortFunctions = [nativeSort, bubbleSort, bubbleSortWithAdvancedSwap]

const checkSortFunction = (sortFunction, array) => {
  const arr1 = array.slice(0);
  const arr2 = array.slice(0);
  expect(arr1.sort((a, b) => { return a - b })).to.deep.equal(sortFunction(arr2))
}

describe('Testing of all sort algorithms', function () {
  listOfSortFunctions.forEach((sortFunction) => {
    const functionName = sortFunction.name; 
    describe(`testing ${functionName}` , function () {

      it(`should sort empty array`, function () {
        checkSortFunction(sortFunction, [])
      })

      it(`should sort array (1 element)`, function () {
        checkSortFunction(sortFunction, [1])
      })

      it(`should sort array (2 ordered elements)`, function () {
        checkSortFunction(sortFunction, [1, 2])
      })

      it(`should sort array (2 unordered elements)`, function () {
        checkSortFunction(sortFunction, [2, 1])
      })

      describe('Large Array (1000 items) with random elements from 0 to 9999', function () {
        for(let i = 0; i < 100; i++) {
          it(`should sort array #${i}`, function () {
            const largeArray = new Array(1000).fill(0).map(() => getRandomInt(0, 1000));
            checkSortFunction(sortFunction, largeArray)
          })
        }
      })

    })
  })
})