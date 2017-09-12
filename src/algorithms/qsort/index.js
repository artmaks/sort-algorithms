function quickSort(array) {
  quickSortWithRange(array, 0, array.length - 1)
  return array
}

function quickSortWithRange(A, l, r) {
  if(l > r)
    return
    
    const m = partition(A, l, r)
    quickSortWithRange(A, l, m - 1)
    quickSortWithRange(A, m + 1, r)
}

function partition(A, l, r) {
  const pivot = A[l]
  let separateIndex = l

  for(let i = l + 1; i <= r; i++) {
    if(A[i] < pivot) {
      separateIndex++
      swap(A, separateIndex, i)
    }
  }

  swap(A, l, separateIndex)
  return separateIndex
}

function swap(A, first, second) {
  const temp = A[first]
  A[first] = A[second]
  A[second] = temp
}

export {
  quickSort,
}