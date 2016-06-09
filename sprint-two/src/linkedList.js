var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //list
  //{head: new Node(), tail: Node()}
  //{head: {
//    value: 'value1'
//    next: new Node()
//  }}
  list.addToTail = function(value) {
    var node = new Node(value);
    
    //Initialization
    if (list.head === null) {
      list.head = node;
    } else {
      //list.head has number
      current = list.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var head = list.head;
    delete list.head;
    list.head = head.next;
    return head.value;
  };

  list.contains = function(target) {
    current = list.head;
    if (current.value === target) {
      return true;
    }
    while (current.next) {
      current = current.next;
      if (current.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//O(n)
