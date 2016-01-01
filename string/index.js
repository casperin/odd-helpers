'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dotdotdot = exports.fuzzySearch = exports.padEnd = exports.padStart = undefined;

var _util = require('./util');

var getPadding = function getPadding(str, maxLength) {
  var fillString = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

  fillString = String(fillString);
  if (fillString.length === 0) fillString = ' ';

  var fillLen = maxLength - str.length;
  var timesToRepeat = Math.ceil(fillLen / fillString.length);

  return fillString.repeat(timesToRepeat).slice(0, fillLen);
};

var padStart = exports.padStart = (0, _util.curry)(function (str, maxLength) {
  var fillString = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

  str = String(str);
  if (str.length >= maxLength) return str;
  return getPadding(str, maxLength, fillString) + str;
});

var padEnd = exports.padEnd = (0, _util.curry)(function (str, maxLength) {
  var fillString = arguments.length <= 2 || arguments[2] === undefined ? ' ' : arguments[2];

  str = String(str);
  if (str.length >= maxLength) return str;
  return str + getPadding(str, maxLength, fillString);
});

// From http://stackoverflow.com/questions/9206013/javascript-fuzzy-search
var fuzzySearch = exports.fuzzySearch = function fuzzySearch(hay, string) {
  hay = hay.toLowerCase();
  var i = 0,
      n = -1,
      l,
      s = string.toLowerCase();
  for (; l = s[i++];) {
    if (! ~(n = hay.indexOf(l, n + 1))) return false;
  }return true;
};

var dotdotdot = exports.dotdotdot = (0, _util.curry)(function (length, string) {
  return string.length > length ? string.slice(0, length) + '…' : string;
});
