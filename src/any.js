import { _curry2 } from './_internals/_curry2'

/**
 * Returns `true` if at least one of the elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 */
export const any = _curry2(function (predicate, list) {
  // return list.some(predicate) // ES6 version
  let index = 0
  while (index < list.length) {
    if (predicate(list[index])) {
      return true
    }
    index++
  }

  return false
})
