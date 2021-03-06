//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

/* challenge description: 

Here we will implement selection sort.
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element.
It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted.
Selection sort has quadratic time complexity in all cases.
Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

*/

//solution

function change(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  
  function selectionSort(array) {
    for(let i = 0; i<array.length; i++)
    {
        for(let j = i; j<array.length; j++)
        {
          if(array[j] < array[i])
            change(array, j, i)
        }
    }
    return array;
  }