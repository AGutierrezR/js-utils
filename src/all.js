/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @param {Function} predicate The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 */
export function all(predicate, list) {
  if (!list) return (_list) => all(predicate, _list)

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false
  }

  return true
}
