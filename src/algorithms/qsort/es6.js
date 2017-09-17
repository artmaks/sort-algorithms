function quickSortES6(array) {
  if(array.length === 0) return array

  const left = []
  const right = []
  const pivot = array[0]

  for(let i = 1; i < array.length; i++) {
    const item = array[i]
    if(item < pivot) left.push(item)
    else right.push(item)
  }

  return [...quickSortES6(left), pivot, ...quickSortES6(right)]
}

// Slow
function quickSortFunctional(array) {
  if(array.length <= 1) return array

  const pivot = array.pop()
  return [
    ...quickSortFunctional(array.filter(item => item < pivot)),
    pivot,
    ...quickSortFunctional(array.filter(item => item >= pivot))
  ]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export {
  quickSortES6,
  quickSortFunctional,
}