export const curry = (fn, ...a) =>
  a.length >= fn.length
    ? fn(...a)
    : (...a2) => curry(fn, ...a, ...a2);

export const noop = () => {};

// Aka. `compose`
export const c0 = (...args) => {
  const start = args.length - 1;
  return (...a) => {
    let i = start,
      result = args[start](...a);
    while (i--) result = args[i](result);
    return result;
  };
};
