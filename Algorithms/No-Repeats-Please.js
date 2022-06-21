//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

/* challenge description: 

Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa),
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

*/

//solution

function change(arr, x, y){ 
    const temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
  }

function checkLetter(arr) {
  for (let i = 0; i < arr.length-1; i++){
    if (arr[i] == arr[i + 1]) return 0
    }
  return 1
}

function permAlone(str) {
  let res = 0
  let arr = str.split("")

  const prmtList = []

  function prmtCreate(n, newArr) {
    if (n === 1) {
      prmtList.push(newArr.slice())
      return
    }

    prmtCreate(n - 1, newArr)

    for (let i = 0; i < n - 1; i++) {
      n % 2 === 0 ? change(newArr, i, n - 1) : change(newArr, 0, n - 1)

      prmtCreate(n - 1, newArr)
    }
  }

  prmtCreate(arr.length, arr)
  
  for(let i = 0; i<prmtList.length; i++)
  res += checkLetter(prmtList[i])
 
  return res
}