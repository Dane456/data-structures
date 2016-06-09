var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //print [Object object]
  this.storage = {};
  this.length = 0;

};


Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

Stack.prototype.pop = function() {
  var value = this.storage[this.length];
  delete this.storage[this.length];
  this.length--;
  this.length = Math.max(0, this.length);
  return value; 
};

Stack.prototype.size = function() {
  return this.length;
};
