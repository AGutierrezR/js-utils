import { _cloneList } from 'src/_internals/_cloneList.js'
import { _curry2 } from './_internals/_curry2.js'

/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @param {*} el The element to add to the end of the new list.
 * @param {Array|String} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 */
export const append = _curry2(function append(element, list) {
  if (typeof list === 'string') return list.split('').concat(element)

  const clone = _cloneList(list)

  clone.push(element)
  return clone
})
