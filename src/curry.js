export function curry(fn, initialArgs = []) {
  if (typeof fn !== 'function') {
    throw new Error('Expected a function to curried')
  }

  return function curried(...args) {
    return ((rest) =>
      rest.length >= fn.length ? fn.apply(this, rest) : curry(fn, rest))([
      ...initialArgs,
      ...args,
    ])
  }
}
