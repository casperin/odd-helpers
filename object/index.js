'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.values = exports.filterObject = undefined;

var _util = require('./util');

var filterObject = exports.filterObject = (0, _util.curry)(function (fn, obj) {
  return Object.keys(obj).reduce(function (newObject, key) {
    var value = obj[key];
    if (fn(key, value)) newObject[key] = value;
    return newObject;
  }, {});
});

var values = exports.values = function values(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
