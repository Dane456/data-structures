
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numValues = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curVal = this._storage.get(index);
  var isDefined = false;
  var isOverwritten = false;
  if (curVal === undefined) {
    var tempArr = [];
    tempArr.push([k, v]);
    this._storage.set(index, tempArr);
    this._numValues++;
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
      this._numValues++;
    }
  }
  if (this._numValues / this._limit > .75 ) {
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curVal = this._storage.get(index);
  if (curVal !== undefined) {
    for (var i = 0; i < curVal.length; i++) {
      if (curVal[i][0] === k) {
        return curVal[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item, i, array) {
    delete array[index];
  });
  this._numValues--;
  if (this._numValues / this._limit < .25) {
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//0(n) for array iteration

