import { _curry3 } from './_internals/_curry3'

// `Identity` is a functor that holds a single value, where `map` simply
// transforms the held value with the provided function.
const Identity = function (x) {
  return {
    value: x,
    map: function (fn) {
      return Identity(fn(x))
    },
  }
}

/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 */
export const over = _curry3(function over(lens, fn, obj) {
  return lens(function (x) {
    return Identity(fn(x))
  })(obj).value
})
