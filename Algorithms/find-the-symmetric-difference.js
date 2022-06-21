//link => https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

/* challenge description: 

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both.
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements.
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time.
Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).

*/
//solution

function check(a, b){
    const res = []
    for(let element of a)
    {
      if(!(res.includes(element) && !(b.includes(element))))
          res.push(element)
    }
  
    for(let element of b)
    {
      if(!(res.includes(element) && !(a.includes(element))))
          res.push(element)
    }
    return res
  }
  
  function count(arr, n)
  {
    let res = 0
    for(let i = 0; i<arr.length; i++)
    {
      if(arr[i] == n)
      {
        res++
      }
    }
    return res
  }
  
  function clearArr(arr)
  {
    let res = arr
  
    for(let i = 0; i<arr.length; i++)
    {
      let element = arr[i]
      if(count(arr, element) > 1)
      {
       let a = res.filter(x => x!= element)
       res = a
      }
      
    }
    return res.sort()
  }
  
  function sym(...args) {
    let res = []
    let temp, tempArr
  while(args.length)
  {
    tempArr = check(args[0], args[1])
    temp = clearArr(tempArr)
    args.shift()
    args.shift()
    if(args.length)
    args.unshift(temp)
  }
  
    res = [...temp]
    return res;
  }