'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = exports.update = undefined;

var _util = require('./util');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var update = exports.update = (0, _util.curry)(function (arr, idx, val) {
  return [].concat(_toConsumableArray(arr.slice(0, idx)), [val], _toConsumableArray(arr.slice(idx + 1)));
});

var toArray = exports.toArray = function toArray(x) {
  return Array.isArray(x) ? x : [x];
};
