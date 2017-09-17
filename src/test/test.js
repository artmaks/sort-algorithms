import { expect } from 'chai';

import { nativeSort } from '../algorithms/native'
import { bubbleSort, bubbleSortWithAdvancedSwap, bubbleSortWithFlag } from '../algorithms/bubble'
import { selectionSort } from '../algorithms/selection'
import { insertionSort, shellSort } from '../algorithms/insertion'
import { mergeSort } from '../algorithms/merge'
import { quickSort } from '../algorithms/qsort'
import { quickSortES6, quickSortFunctional } from '../algorithms/qsort/es6'
import { getRandomInt } from '../utils/random'

const listOfSortFunctions = [nativeSort, bubbleSort, bubbleSortWithAdvancedSwap, bubbleSortWithFlag, 
  selectionSort, insertionSort, shellSort, mergeSort, quickSort, quickSortES6, quickSortFunctional ]

const checkSortFunction = (sortFunction, array) => {
  const arr1 = array.slice(0);
  const arr2 = array.slice(0);
  const answer = arr1.sort((a, b) => { return a - b });
  expect(answer).to.deep.equal(sortFunction(arr2))
}

const isSlowSortFunction = (sortFunction) => {
  return !['nativeSort', 'insertionSort', 'shellSort', 'mergeSort', 'quickSort', 'quickSortES6'].includes(sortFunction.name)
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

      describe('Large Array (1.000 items) with random elements from 0 to 9999', function () {
        for(let i = 0; i < 100; i++) {
          it(`should sort array #${i}`, function () {
            this.timeout(10000);
            const largeArray = new Array(1000).fill(0).map(() => getRandomInt(0, 1000));
            checkSortFunction(sortFunction, largeArray)
          })
        }
      })

      describe('Very large Array (50.000 items) with random elements from 0 to 9999', function () {
        for(let i = 0; i < 10; i++) {
          it(`should sort array #${i}`, function () {
            if(isSlowSortFunction(sortFunction)) this.skip();
            const largeArray = new Array(50000).fill(0).map(() => getRandomInt(0, 1000));
            checkSortFunction(sortFunction, largeArray)
          })
        }
      })

    })
  })
})