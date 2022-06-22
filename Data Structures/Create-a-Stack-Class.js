function Stack() {
    var collection = [];

    this.print = function() {
      console.log(collection);
    };

    this.push = function(x)
    {
      collection.push(x)
    }

    this.pop = function(){
      return collection.pop()
    }

    this.peek = function()
    {
      return collection[collection.length - 1]
    }

    this.clear = function()
    {
      return []
    }
    
    this.isEmpty = function()
    {
      return collection != [] ? true : false
    }
  }