//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

/* challenge description: 

Here we will move on to an intermediate sorting algorithm: quick sort.
Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array.
In this method, a pivot value is chosen in the original array.
The array is then partitioned into two subarrays of values less than and greater than the pivot value.
We then combine the result of recursively calling the quick sort algorithm on both sub-arrays.
This continues until the base case of an empty or single-item array is reached, which we return.
The unwinding of the recursive calls return us the sorted array.
Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average.
It is also relatively easy to implement. These attributes make it a popular and useful sorting method.
Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

*/

//solution

function change(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  
  function middleChecker(arr, x, y) {
    let middle = arr[Math.floor((x + y) / 2)]
    let i = x
    let j = y
  
    while (i <= j) {
      while (arr[i] < middle) {
        i++
      }
      while (arr[j] > middle) {
        j--
      }
      if (i <= j) {
        change(arr, i, j);
        i++, j--
      }
    }
    return i;
  }
  
  function main(arr, x, y) {
  
    if (arr.length > 1) {
      let z = middleChecker(arr, x, y);
      x < z - 1 ? main(arr, x, z - 1) : null
      z < y ? main(arr, z, y) : null
    }
    return arr;
  }
  
  function quickSort(array) {
    main(array, 0, array.length - 1)
    return array
  }