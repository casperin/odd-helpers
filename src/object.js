import { curry } from './util';

export const filterObject = curry((fn, obj) =>
  Object.keys(obj).reduce((newObject, key) => {
    const value = obj[key];
    if (fn(key, value)) newObject[key] = value;
    return newObject;
  }, {}));

export const values = obj =>
  Object.keys(obj).map(key => obj[key]);
