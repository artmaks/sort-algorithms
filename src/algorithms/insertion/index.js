function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    let element = array[i]
    let index = i - 1

    while(index >= 0 && array[index] > element) {
      array[index + 1] = array[index]
      index--
    }

    array[index + 1] = element
  }
  
  return array
}

export {
  insertionSort,
}