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

### Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order.

- Worst-case performance = **О(n^2)**
- Best-case performance = **О(n)**
- Average performance = **О(n^2)**
- Worst-case space complexity =	**О(n)** total, **O(1)** auxiliary

Implementation with a flag for detecting swapping more faster than selection sort in many cases.

### Insertion Sort

Insertion sort is a sorting algorithm in which the elements are transferred one at a time to the right position. In other words, an insertion sort helps in building the final sorted list, one item at a time, with the movement of higher-ranked elements. An insertion sort has the benefits of simplicity and low overhead.

Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.

- Worst-case performance	**О(n^2)** comparisons, swaps
- Best-case performance	**O(n)** comparisons, **O(1)** swaps
- Average performance	**О(n^2)** comparisons, swaps
- Worst-case space complexity	**О(n)** total, **O(1)** auxiliary

Advantages:
 - More efficient in practice than most other simple quadratic (i.e., O(n^2)) algorithms such as selection sort or bubble sort
 
 ### Shell Sort
 
 ShellSort is mainly a variation of Insertion Sort. In insertion sort, we move elements only one position ahead. When an element has to be moved far ahead, many movements are involved. The idea of shellSort is to allow exchange of far items. In shellSort, we make the array h-sorted for a large value of h. We keep reducing the value of h until it becomes 1. An array is said to be h-sorted if all sublists of every h’th element is sorted.

- Worst-case performance:
  - **O(n^2)** (worst known gap sequence)
  - **O(nlog2n)** (best known gap sequence)
- Best-case performance:
  - **O(n log n)**
- Average performance	depends on gap sequence
- Worst-case space complexity	**О(n)** total, **O(1)** auxiliary

### Merge Sort
