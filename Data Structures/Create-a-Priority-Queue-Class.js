function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    
    this.enqueue = function(x) {
      if (this.collection.findIndex(j => j[1] > x[1]) !== -1) {
        this.collection.splice(this.collection.findIndex(j => j[1] > x[1]), 0, x);
      } else {
        this.collection.push(x);
      }
    }
  
    this.dequeue = function() {
      return this.collection.shift()[0];
    }
  
    this.size = function() {
      return this.collection.length;
    }
  
    this.isEmpty = function() {
      return this.size() <= 0;
    }
  
    this.front = function() {
      return this.collection[0][0];
    }
  }