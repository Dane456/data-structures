var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = someInstance.size();
    storage[key] = value;
    // console.log('enqueue: ' + JSON.stringify(storage));
  };

  someInstance.dequeue = function() {
    var value = storage[0];
    for (var key in storage) {
      //shift values in storage
      storage[key] = storage[Number(key) + 1];
    }
    delete storage[someInstance.size() - 1];
    // console.log('dequeue: ' + value + ' ' + JSON.stringify(storage));
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

//{0 : 'value0', 1: 'value1', 2: 'value2'}

//{0: 'value1', 1: 'value2', 2: 'value2'}

//{0: 'value1', 1: 'value2'}