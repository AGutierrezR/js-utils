import { _curry3 } from './_internals/_curry3'

/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @param {Number} index The index.
 * @param {Function} fn The function to apply.
 * @param {Array|ArrayLike} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `index` replaced with the value
 *         returned by applying `fn` to the existing element.
 */
function _adjust(index, fn, list) {
  const _index = index < 0 ? list.length + index : index
  if (index >= list.length || _index < 0) return list

  const listCopy = Array.from(list)
  listCopy[_index] = fn(listCopy[_index])

  return listCopy
}

export const adjust = _curry3(_adjust)
