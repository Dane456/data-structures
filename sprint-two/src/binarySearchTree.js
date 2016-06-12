var BinarySearchTree = function(value) {
  var instance = Object.create(binTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.max = 1;
  instance.min = 1;
  return instance;
};

var binTreeMethods = {};

binTreeMethods.insert = function(node) {

  if (typeof node === 'number') {
    var node = BinarySearchTree(node);
  }  
  if (node.value < this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      binTreeMethods.insert.call(this.left, node);
    }
  } else {
    if (this.right === null) {
      this.right = node;
    } else {
      binTreeMethods.insert.call(this.right, node);
    }
  }
};

binTreeMethods.contains = function(node) {
  if (node === null) {
    return false;
  } else if (node === this.value) {
    return true;
  } else if (node < this.value) {
    binTreeMethods.contains.call(this.left, node);
  } else if (node > this.value) {
    if (binTreeMethods.contains.call(this.right, node)) {
      return true;
    }
  }
  return false;
};

binTreeMethods.depthFirstLog = function(fn) {

  fn(this.value);
 
  if (this.left) {
    binTreeMethods.depthFirstLog.call(this.left, fn);
  }
  if (this.right) {
    binTreeMethods.depthFirstLog.call(this.right, fn);
  }
};

binTreeMethods.breadthFirstLog = function(fn) {
  var queue = [];

  queue.push(this);

  do {
    var length = queue.length;
    for (var i = 0; i < length; i++) {
      var node = queue.shift();

      fn(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  } while (queue.length > 0);
};

binTreeMethods.rebalanceTree = function() {

};

binTreeMethods.rebalance = function() {
  var arr = [];
  var pushNodes = function(nodeVal) {
    arr.push(nodeVal);
  };
  binTreeMethods.breadthFirstLog(pushNodes);
  arr.sort();
  var midIndex = Math.floor(arr.length / 2 );
  this.value = binTreeMethods.insert(arr[midIndex]);
  for (var i = 1; midIndex + i < arr.length; i++) {
    binTreeMethods.insert(arr[midIndex - i]);
    if (arr[midIndex + i]) {
      binTreeMethods.insert(arr[midIndex + i]);
    } 
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
 // O(log n)