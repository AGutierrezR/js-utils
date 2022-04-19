import { _arity } from './_internals/_arity'

/**
 * Returns a curried equivalent of the provided function.
 *
 * @param {Function} fn - Function to curry
 * @param {Array} initialArgs - Initial arguments to pass to the function
 * @returns {Function} - A new, curried function
 */
export function curry(fn, initialArgs = []) {
  if (typeof fn !== 'function')
    throw new Error('Expected a function to curried')

  return _arity(fn.length, _curry(fn, initialArgs))
}

/**
 * Internal curry function
 *
 * This is the real logic of the curry function that will be call inside the _arity function
 *
 * @param {Function} fn - Function to curry
 * @param {Array} received - Initial arguments to pass to the function
 * @returns {Function} - A new, curried function
 */
function _curry(fn, received = []) {
  return function curried(...args) {
    const _args = [...received, ...args]
    const argsLeft = fn.length - _args.length

    return argsLeft <= 0
      ? fn.apply(this, _args)
      : _arity(argsLeft, _curry(fn, _args))
  }
}
