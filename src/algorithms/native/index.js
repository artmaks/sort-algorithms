function nativeSort(array) { 
  return array.sort((a, b) => { return a - b });
}

export {
  nativeSort
}