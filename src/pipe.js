/**
 * Performs left-to-right function composition. The first argument may have
 * any arity; the remaining arguments must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @param {...Function} functions
 * @return {Function}
 */
export function pipe(...fns) {
  if (fns.length === 0) {
    throw new Error('Expected at least one function to compose')
  }

  return function piped(...args) {
    const list = fns.slice()
    if (list.length > 0) {
      const fn = list.shift()
      let result = fn.apply(this, args)
      while (list.length > 0) {
        result = list.shift().apply(this, [result])
      }

      return result
    }
  }
}
