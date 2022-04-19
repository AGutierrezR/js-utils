import { _arity } from './_arity'

/**
 * Internal curryN function
 *
 * This is the real logic of the curryN function that will be call inside the _arity function
 *
 * The only difference with the interal `_curry` function is that this one will recieve the length separeted from the function
 *
 * @param {Number} length - Number of arguments the function expects
 * @param {Array} received - Array of arguments received
 * @param {Function} fn - Function to curry
 * @returns {Function} - The curried function
 */
export function _curryN(length, received, fn) {
  return function curried(...args) {
    const _args = [...received, ...args]
    const argsLeft = length - _args.length

    return argsLeft <= 0
      ? fn.apply(this, _args)
      : _arity(argsLeft, _curryN(length, _args, fn))
  }
}
