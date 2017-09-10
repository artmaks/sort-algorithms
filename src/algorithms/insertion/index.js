function insertionSort(array) {
  for(let i = 0; i < array.length; i++) {
    const element = array[i]
    let index = i - 1

    while(index >= 0 && array[index] > element) {
      array[index + 1] = array[index]
      index--
    }

    array[index + 1] = element
  }

  return array
}

function shellSort(array) {
  const len = array.length
  let step = parseInt(len / 2)

  while(step > 0) {

    for (let i = step; i < len; i++) {
      const element = array[i]
      let index = i - step

      while (index >= 0 && array[index] > element) {
        array[index + step] = array[index]
        index -= step
      }

      array[index + step] = element
    }

    step = parseInt(step / 2)
  }
  
  return array
}

export {
  insertionSort,
  shellSort,
}