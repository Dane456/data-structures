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
  if (node.value < this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      treeMethods.insert.call(this.left, node);
    }
  } else {
    if (this.right === null) {
      this.right = node;
    } else {
      treeMethods.insert.call(this.right, node);
    }
  }
};

treeMethods.contains = function(node) {
  if(node === null){
    return false;
  } else if (node === this.value) {
    return true;
   } else if (node < this.value) {
      treeMethods.contains.call(this.left, node);
   } else if (node > this.value) {
      if(treeMethods.contains.call(this.right, node)){
        return true;
      }
   }
   return false;
};

treeMethods.depthFirstLog = function(fn) {
  var treeCopy = this;
  if(this.left === null && this.right === null){
    fn(this.value);
    delete this;
  } else if (this.left){
    treeMethods.depthFirstLog.call(this.left, fn)
  } else if (this.right){
    treeMethods.depthFirstLog.call(this.right, fn)
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
