function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    
  this.enqueue = function(x)
      {
        collection.push(x)
      }
  
      this.dequeue = function(){
        return collection.shift()
      }
  
      this.front = function()
      {
        return collection[0]
      }
  
      this.size = function()
      {
        return collection.length
      }
      
      this.isEmpty = function()
      {
        return collection != [] ? false : true
      }
  }