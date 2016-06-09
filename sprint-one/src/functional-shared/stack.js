var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;


  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

// push
stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
  
};

  //{'0': 'a'} length = 1

  //this.storage[1]
// pop
stackMethods.pop = function() {
  var value = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  this.length = Math.max(0, this.length);
  //this.length = this.length-- < 0 ? 0 : this.length--;
  return value; 
};

stackMethods.size = function() {
  return this.length;
};

