//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/pairwise

/* challenge description: 

Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
You may use multiple pairs that have the same numeric elements but different indices.
Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element.
For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.
For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11].
We can then write out the array with their indices and values.

*/

//solution

function pairwise(arr, arg) {
    let res = 0
    let i = 0
    let newArr = [...arr]
    while(i<newArr.length)
    {
      for(let j = 0; j<newArr.length; j++)
      {
        if(newArr[i] + newArr[j] == arg && i != j)
        {
          res+= (i + j)
          newArr[i] = NaN
          newArr[j] = NaN
        }
      }
      i++
    }
    return res;
  }


