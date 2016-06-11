var BinarySearchTree = function(value) {
  var instance = Object.create(binTreeMethods);
  instance.value = value;
  instance.left = null;
  instance.right = null;
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
    for (var i = 0; i < queue.length; i++) {
      var node = queue[i];
      console.log('node: ' + node);
      fn(node.value);
      queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  } while (queue.length > 0);

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
 // O(log n)