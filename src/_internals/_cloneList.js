/**
 * Create a shallow clone of a list (Array and Array-like objects)
 *
 * @param {Array|ArrayLike} list - The list to clone
 * @returns {Array} - The clone of the list
 */
export function _cloneList(list) {
  return Array.prototype.slice.call(list)
}

/**
 * This task could also be achieved by using:
 * 
 * Array.from(list) or destructuring [...list]
 * 
 * or by using the while or for loop pattern.
 *
 * const clone = []
 * let index = 0
 * while (index < list.length) {
 *  clone[index] = list[index]
 *  index++
 * }
 * 
 * return clone
 */
