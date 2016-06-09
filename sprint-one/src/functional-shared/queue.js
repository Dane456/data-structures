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
  // let key = Object.keys(this.storage).length;
  // this.storage[key] = value;
  // console.log('enqueue: ' + JSON.stringify(this.storage));
};

queueMethods.dequeue = function() {
  console.log('storage at beginning of dequeue: ' + JSON.stringify(this.storage));
  var value = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;

  return value;

  // var value = this.storage[0];
  // for (var prop in this.storage) {
  //   if (Number(prop) < Object.keys(this.storage).length - 1) {
  //     this.storage[prop] = this.storage[Number(prop) + 1];  
  //   }
  // }
  // delete this.storage[Object.keys(this.storage).length - 1];
  // console.log('dequeued value: ' + value);
  // console.log('resulting storage: ' + JSON.stringify(this.storage));
  // return value;
};

queueMethods.size = function() {
  // console.log('in size');
  // console.log('this.storage: ' + storage);
  return Math.max(0, this.back - this.front);
};


{}