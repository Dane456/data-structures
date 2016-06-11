var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new st
  this.storage = {}; 
  this.front = 0;
  this.back = 0;

};


Queue.prototype.enqueue = function(value) {
  this.back++;
  this.storage[this.back - 1] = value;
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;

  return value;

};

Queue.prototype.size = function() {

  return Math.max(0, this.back - this.front);
};

