import { always } from './always'
import { over } from './over'
import { _curry3 } from './_internals/_curry3'

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 */
export const set = _curry3(function set(lens, replacer, obj) {
  return over(lens, always(replacer), obj)
})
