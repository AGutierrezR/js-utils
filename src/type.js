import { _curry1 } from './_internals/_curry1'

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @param {*} val The value to test
 * @return {String}
 * */

export const type = _curry1(function type(input) {
  if (input === null) {
    return 'Null'
  } else if (input === undefined) {
    return 'Undefined'
  } else if (Number.isNaN(input)) {
    return 'NaN'
  }
  const typeResult = Object.prototype.toString.call(input).slice(8, -1)

  return typeResult === 'AsyncFunction' ? 'Async' : typeResult
})
