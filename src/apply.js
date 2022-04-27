import { _curry2 } from './_internals/_curry2.js'

/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 */
export const apply = _curry2(function apply(fn, args) {
  return fn.apply(this, args)
})
