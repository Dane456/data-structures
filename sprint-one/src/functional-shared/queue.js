var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.back++;
  this.storage[this.back - 1] = value;
};

queueMethods.dequeue = function() {
  console.log('storage at beginning of dequeue: ' + JSON.stringify(this.storage));
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;

  return value;

};

queueMethods.size = function() {

  return Math.max(0, this.back - this.front);
};


{}