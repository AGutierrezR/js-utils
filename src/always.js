import { _curry1 } from './_internals/_curry1'

/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 */
export const always = _curry1(function always(value) {
  return function () {
    return value
  }
})
