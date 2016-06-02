// remove me!

'use strict';

module.exports = function each(iterator, collection) {
  return (isArrayLike(collection) ? arrayEach : baseEach).call(this, iterator, collection);
};

var toStr = Object.prototype.toString;
var hop = Object.prototype.hasOwnProperty;
var strCharAt = String.prototype.charAt;

var isNumber = function isNumber(val) {
  var type = typeof val;
  return type === 'number' || (type === 'object' && toStr.call(val) === '[object Number]');
};

var isString = function isString(val) {
  return toStr.call(val) === '[object String]';
};

var isArray = typeof Array.isArray === 'function' ? Array.isArray : function isArray(val) {
  return toStr.call(val) === '[object Array]';
};

var isArrayLike = function isArrayLike(val) {
  return val != null && (isArray(val) || (val !== 'function' && isNumber(val.length)));
};

var arrayEach = function arrayEach(iterator, array) {
  for (var i = 0; i < array.length; i += 1) {
    // Break iteration early if `iterator` returns `false`
    if (iterator(array[i], i, array) === false) {
      break;
    }
  }
};

var baseEach = function baseEach(iterator, object) {
  var ks = keys(object);

  for (var i = 0; i < ks.length; i += 1) {
    // Break iteration early if `iterator` returns `false`
    if (iterator(object[ks[i]], ks[i], object) === false) {
      break;
    }
  }
};

var charAt = function(str, index) {
  return strCharAt.call(str, index);
};

var has = function has(context, prop) {
  return hop.call(context, prop);
};


var indexKeys = function indexKeys(target, pred) {
  pred = pred || has;

  var results = [];

  for (var i = 0, len = target.length; i < len; i += 1) {
    if (pred(target, i)) {
      results.push(String(i));
    }
  }

  return results;
};


var objectKeys = function objectKeys(target, pred) {
  pred = pred || has;

  var results = [];

  for (var key in target) {
    if (pred(target, key)) {
      results.push(String(key));
    }
  }

  return results;
};


var keys = function keys(source) {
  if (source == null) {
    return [];
  }

  // IE6-8 compatibility (string)
  if (isString(source)) {
    return indexKeys(source, charAt);
  }

  // IE6-8 compatibility (arguments)
  if (isArrayLike(source)) {
    return indexKeys(source, has);
  }

  return objectKeys(source);
};
