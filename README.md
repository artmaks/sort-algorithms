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

Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

- Worst-case performance	**O(n log n)**
- Best-case performance	
  - **O(n log n)** typical
  - **O(n)** natural variant
- Average performance	**O(n log n)**
- Worst-case space complexity	
  - **О(n)** total
  - **O(n)** auxiliary
  
### Quick Sort
  
Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

- Always pick first element as pivot.
- Always pick last element as pivot
- Pick a random element as pivot.
- Pick median as pivot.

The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.

[Awesome visualization](http://me.dt.in.th/page/Quicksort/)

**Partition Algorithm:** 

An important part of this algorithm is the partitioning — how it partitions an array into 3 parts in-place, that is, without creating extra arrays (like in mergesort). You can do it with some clever algorithm.

Here is one algorithm to partition the array, which I try to present in a way that’s as easy to understand as possible. We’ll try to partition the array like a card game.

- First, assume that the pivot is the leftmost element.
- Flip all the other cards down.
- Then, open each card from left to right.
  - If you find a card that is less than the pivot:
    - Swap that card with the card that was first opened (the leftmost open card), and close that leftmost card.
    - Also take note of the last closed card.
  - Otherwise, continue opening the next card.
- Swap the last closed card with the pivot (if any).
- Open all cards… You will see that the array is already partitioned!

**Perfomance and complexity:**

- Worst-case performance	**O(n^2)**
- Best-case performance	
  - **O(n log n)** (simple partition)
  - **O(n)** (three-way partition and equal keys)
- Average performance	**O(n log n)**
- Worst-case space complexity	
  - **O(n)** auxiliary (naive)
  - **O(log n)** auxiliary 
