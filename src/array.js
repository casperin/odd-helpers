import { curry } from './util';

export const update = curry((arr, idx, val) =>
  [...arr.slice(0, idx), val, ...arr.slice(idx + 1)]
);

export const toArray = x =>
  Array.isArray(x) ? x : [x];
