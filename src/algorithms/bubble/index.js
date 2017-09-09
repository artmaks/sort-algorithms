function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    for(let k = 1; k < array.length; k++) {
      if(array[k] < array[k - 1]) {
        const temp = array[k]
        array[k] = array[k - 1]
        array[k - 1] = temp
      }
    }
  }
  return array
}

export {
  bubbleSort
}