//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

/* challenge description: 

Binary search is an O(log(n)) efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:
Find the middle value of a sorted array. If value == target return (found it!).
If middle value < target, search right half of array in next compare.
If middle value > target, search left half of array in next compare.
As you can see, you are successively halving an array, which gives you the log(n) efficiency.
For this challenge, we want you to show your work - how you got to the target value... the path you took!
Write a function binarySearch that implements the binary search algorithm on an array,
returning the path you took (each middle value comparison) to find the target in an array.
The function takes a sorted array of integers and a target value as input.
It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value.
The target value should be the last element of the returned array. If value not is found, return the string Value Not Found.
For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].
For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

*/

//solution

function binarySearch(searchList, value) {
    if(!searchList.includes(value)) return "Value Not Found"
  
    let middle 
    let tempArr = [...searchList]
    let arrayPath = [];
    
    while(true)
    {
     middle = Math.floor((tempArr.length-1)/2)
      if(tempArr[middle] == value){
        arrayPath.push(tempArr[middle])
        break
        }
      else if(tempArr[middle] < value && tempArr.length > 2)
      {
        arrayPath.push(tempArr[middle])
        tempArr = tempArr.slice(middle+1, tempArr.length)
      }
      else if(tempArr[middle] > value && tempArr.length > 2)
      {
       arrayPath.push(tempArr[middle])
       tempArr = tempArr.slice(0, middle)
      }
      else
      {
        arrayPath.push(tempArr[middle], tempArr[middle+1])
        break
      }
      
    }
    
    return arrayPath;
  }