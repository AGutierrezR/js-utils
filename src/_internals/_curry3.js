import { _curry1 } from './_curry1'
import { _curry2 } from './_curry2'

/**
 * Optimized internal three-arity curry function.
 *
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
export function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3
      case 1:
        return _curry2(function (_b, _c) { return fn(a, _b, _c)})
      case 2:
        return _curry1(function (_c) { return fn(a, b, _c)})
      default:
        return fn(a, b, c)
    }
  }
}
