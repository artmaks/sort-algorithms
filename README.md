# sort-algorithms
Implementations of popular sorting algorithms

[Awesome sort algorithms comparison](https://www.toptal.com/developers/sorting-algorithms/)

### Selection Sort

The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
 1. The subarray which is already sorted.
 2. Remaining subarray which is unsorted.
 
In every iteration of selection sort, the minimum element from the unsorted subarray is picked and moved to the sorted subarray.

- Worst-case performance = **О(n^2)**
- Best-case performance = **О(n^2)**
- Average performance = **О(n^2)**
- Worst-case space complexity =	**О(n)** total, **O(1)** auxiliary

Disadvantage: very slow on the sorted or partially sorted array (in each case O(n^2))

The good thing about selection sort is it never makes more than O(n) swaps and can be useful when memory write is a costly operation.
