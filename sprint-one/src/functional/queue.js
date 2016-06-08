var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = someInstance.size();
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    delete storage[0];
    for (var key in storage) {
      key--;
    }
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
