var BinarySearchTree = function(value) {
  var instance = Object.create(treeMethods);
  instance.value = value;
	instance.left = null;
	instance.right = null;
  return instance;
};

var treeMethods = {};

treeMethods.insert = function(node) {
  //debugger;
  if(typeof node === 'number'){
    var node = BinarySearchTree(node);
  }  
  if (node.value <= this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      treeMethods.insert.call(this.left, node);
    }
  } else if (node.value >= this.value) {
    if (this.right === null) {
      this.right = node;
    } else {
      treeMethods.insert.call(this.right, node);
    }
  }
};

treeMethods.contains = function(node) {
	// body...
};

treeMethods.depthFirstLog = function() {
	// body...
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
