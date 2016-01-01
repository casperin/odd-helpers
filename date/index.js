'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var WEEKDAYS_SHORT = WEEKDAYS.map(function (d) {
  return d.slice(0, 3) + '.';
});
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var parseTimestamp = function parseTimestamp(timestamp) {
  var ts = new Date(timestamp);
  return {
    year: ts.getFullYear(),
    month: MONTHS[ts.getMonth()],
    shortMonth: MONTHS[ts.getMonth()].slice(0, 3) + '.',
    date: ts.getDate(),
    day: WEEKDAYS[ts.getDay()],
    shortDay: WEEKDAYS_SHORT[ts.getDay()]
  };
};

var humanDate = exports.humanDate = function humanDate(timestamp) {
  if (!timestamp) return '?';

  var _parseTimestamp = parseTimestamp(timestamp);

  var shortDay = _parseTimestamp.shortDay;
  var date = _parseTimestamp.date;
  var month = _parseTimestamp.month;

  return shortDay + ' ' + date + ' ' + month;
};

var humanDateBig = exports.humanDateBig = function humanDateBig(timestamp) {
  if (!timestamp) return '?';

  var _parseTimestamp2 = parseTimestamp(timestamp);

  var day = _parseTimestamp2.day;
  var date = _parseTimestamp2.date;
  var month = _parseTimestamp2.month;
  var year = _parseTimestamp2.year;

  return day + ', ' + date + ' ' + month + ' ' + year;
};
