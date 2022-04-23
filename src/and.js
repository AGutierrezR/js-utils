import { _curry2 } from './_internals/_curry2'

/**
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean `and` statement if both inputs are `Boolean`s.
 *
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 */
export const and = _curry2(function and(a, b) {
  return a && b
})
