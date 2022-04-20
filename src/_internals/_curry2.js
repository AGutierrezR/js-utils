import { _curry1 } from './_curry1'

/**
 * Optimized internal two-arity curry function.
 *
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
export function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2
      case 1:
        return _curry1(function (_b) { return fn(a, _b)})
      default:
        return fn(a, b)
    }
  }
}
