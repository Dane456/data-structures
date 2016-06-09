var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  // your code here
  _.extend(newTree, treeMethods);  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push[child];
  console.log(JSON.stringify(this));
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
