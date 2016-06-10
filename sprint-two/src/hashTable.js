

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curVal = this._storage.get(index);
  var isDefined = false;
  var isOverwritten = false;
  //debugger;
  if (curVal === undefined) {
    var tempArr = [];
    tempArr.push([k, v]);
    this._storage.set(index, tempArr);
  } else {
    for (var i = 0; i < curVal.length; i++) {
      if (curVal[i][0] === k) {
        curVal[i][1] = v;
        isOverwritten = true;
        break;
      }
    } 
    if (!isOverwritten) {
      curVal.push([k, v]);
      this._storage.set(index, curVal);
    }
  }
};

  // if (curVal === undefined) {
    // var tempObj = {};
    // tempObj[k] = v;
    // this._storage.set(index, tempObj);
  // }
  // overwrite case
  // else if (curVal[k] === k) {
  //   this._storage.get(index)[k] = v;
  // }
    // else {
  //   curVal[k] = v;
  //   this._storage.set(index, curVal);
  // }


//when retrieveing 

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curVal = this._storage.get(index);
  if (curVal !== undefined) {
    for (var i = 0; i < curVal.length; i++) {
      if (curVal[i][0] === k) {
        return curVal[i][1];
      }
    }
    // return this._storage.get(index)[k];
  }

  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //debugger;
  this._storage.each(function(item, index, array) {
    delete array[index];
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//0(n) for array iteration

