

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  _.each(this.nodes, function(item, i) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  });
  // for (var i = 0; i < this.nodes.length; i++) {
  //   if (this.nodes[i] === node) {
  //     this.nodes.splice(i, 1);
  //   }
  // }
  return false;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var hasFromNode = false;
  var hasToNode = false;
  _.each(this.edges, function(nodePair) {
    _.each(nodePair, function(node, node) {
      if (node === fromNode) {
        hasFromNode = true;
      }
      if (node === toNode) {
        hasToNode = true;
      }
    });
  }); 
  return hasFromNode && hasToNode;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


