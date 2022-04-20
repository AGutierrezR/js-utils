/**
 * Optimized internal one-arity curry function.
 *
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
export function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0) {
      return f1
    } else {
      return fn.apply(this, arguments)
    }
  }
}
