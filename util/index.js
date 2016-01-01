"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var curry = exports.curry = function curry(fn) {
  for (var _len = arguments.length, a = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    a[_key - 1] = arguments[_key];
  }

  return a.length >= fn.length ? fn.apply(undefined, a) : function () {
    for (var _len2 = arguments.length, a2 = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a2[_key2] = arguments[_key2];
    }

    return curry.apply(undefined, [fn].concat(a, a2));
  };
};

var noop = exports.noop = function noop() {};

// Aka. `compose`
var c0 = exports.c0 = function c0() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var start = args.length - 1;
  return function () {
    var i = start,
        result = args[start].apply(args, arguments);
    while (i--) {
      result = args[i](result);
    }return result;
  };
};
