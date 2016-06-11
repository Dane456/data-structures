var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  // your code here
  _.extend(newTree, treeMethods); 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {

  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i].value === this.value) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
};   

treeMethods.traverse = function(fn) {

  fn(this.value);
  if (this.children.length > 0) {
    _.each(this.children, function(child) {
      treeMethods.traverse.call(child, fn);
    });
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

 //O(log n)
