import { curry } from './util';

const getPadding = (str, maxLength, fillString=' ') => {
  fillString = String(fillString);
  if (fillString.length === 0) fillString = ' ';

  const fillLen = maxLength - str.length;
  const timesToRepeat = Math.ceil(fillLen / fillString.length);

  return fillString.repeat(timesToRepeat).slice(0, fillLen);
};

export const padStart = curry((str, maxLength, fillString=' ') => {
  str = String(str);
  if (str.length >= maxLength) return str;
  return getPadding(str, maxLength, fillString) + str;
});

export const padEnd = curry((str, maxLength, fillString=' ') => {
  str = String(str);
  if (str.length >= maxLength) return str;
  return str + getPadding(str, maxLength, fillString);
});

// From http://stackoverflow.com/questions/9206013/javascript-fuzzy-search
export const fuzzySearch = (hay, string) => {
  hay = hay.toLowerCase();
  var i = 0, n = -1, l,
    s = string.toLowerCase();
  for (; l = s[i++] ;)
    if (!~(n = hay.indexOf(l, n + 1))) return false;
  return true;
};

export const dotdotdot = curry((length, string) =>
  string.length > length ? string.slice(0, length) + '…' : string
);
