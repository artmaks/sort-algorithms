function selectionSort(array) {
  const len = array.length

  for(let i = 0; i < len - 1; i++) {
    let min_index = i;
    for(let k = i + 1; k < len; k++ ) {
      if(array[k] < array[min_index])
        min_index = k
    }

    if(min_index !== i) {
      const temp = array[min_index]
      array[min_index] = array[i]
      array[i] = temp
    }
  }

  return array
}

export {
  selectionSort,
}