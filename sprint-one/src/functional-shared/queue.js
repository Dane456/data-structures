var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  let key = Object.keys(this.storage).length;
  this.storage[key] = value;
  console.log('enqueue: ' + JSON.stringify(this.storage));
};

queueMethods.dequeue = function() {
  console.log('storage at beginning of dequeue: ' + JSON.stringify(this.storage));
  var value = this.storage[0];
  _.each(this.storage, function(item, index) {
    item = this.storage[index + 1];
  });
  delete this.storage[Object.keys(this.storage).length - 1];
  console.log('dequeued value: ' + value);
  console.log('resulting storage: ' + JSON.stringify(this.storage));
  return value;
};

queueMethods.size = function() {
  // console.log('in size');
  // console.log('this.storage: ' + storage);
  return Object.keys(this.storage).length;
};


