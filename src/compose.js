/**
 * Performs right-to-left function composition. The last argument may have
 * any arity; the remaining arguments must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 */
export function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('Expected at least one function to compose')
  }

  return function composed(...args) {
    const list = fns.slice()
    if (list.length > 0) {
      const fn = list.pop()
      let result = fn.apply(this, args)
      while (list.length > 0) {
        result = list.pop().apply(this, [result])
      }

      return result
    }
  }
}
