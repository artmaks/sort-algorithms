function mergeSort(array) {
  const len = array.length
  
  if(len <= 1)
    return array

  const medium = parseInt(len / 2)

  const leftArray = mergeSort(array.slice(0, medium))
  const rightArray = mergeSort(array.slice(medium, len))
  const merged = mergeArrays(leftArray, rightArray)
  return merged
}

function mergeArrays(left, right) {
  let li = 0
  let ri = 0
  const result = []
  while(li < left.length && ri < right.length) {
    if(left[li] < right[ri]) {
      result.push(left[li++])
    } else {
      result.push(right[ri++])
    }
  }
  return result.concat(left.slice(li)).concat(right.slice(ri))
}

export {
  mergeSort,
}