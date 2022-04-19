import { _arity } from './_internals/_arity'
import { _curryN } from './_internals/_curryN'

/**
 * Returns a curried equivalent of the provided function.
 *
 * @param {Number} n - Number of arguments the function expects
 * @param {Function} fn - Function to curry
 * @returns {Function} - A new, curried function
 */
export function curryN(n, fn) {
  if (arguments.length === 1) return (_fn) => curryN(n, _fn)

  return _arity(n, _curryN(n, [], fn))
}
