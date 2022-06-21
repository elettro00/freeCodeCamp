//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort

/* challenge description: 

The next sorting method we'll look at is insertion sort.
This method works by building up a sorted array at the beginning of the list.
It begins the sorted array with the first element.
Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position.
It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end.
This algorithm has quadratic time complexity in the average and worst cases.
Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

*/


//solution

function change(arr, a, b)
{
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function insertionSort(array) {
  for(let i = 0; i<array.length; i++)
  {
    for(let j = 0; j<array.length; j++){
      if(array[i] < array[j])
        change(array, i, j)
    }
  }
  return array;
}