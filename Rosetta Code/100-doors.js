function getFinalOpenedDoors(numDoors) {
    let res = []
    let doors = []
    for(let i = 1; i<=numDoors; i++)
    {
      doors.push({n: i, state: true})
    }
  
    for(let i = 0;  i<doors.length; i++)
    {
      let j = i
      while(j<100){
      i == 0 ?
      doors[i].state = !doors[i].state
      : 
      doors[j].state = !doors[j].state
      j+= (i+1)
      }
    }
    doors.map(x =>{
      if(x.state === true)
      res.push(x.n)
    })
    
    return res
  }
  