import { _curry2 } from './_internals/_curry2'

/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 */
export const lens = _curry2(function lens(getter, setter) {
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map((focus) => setter(focus, target))
    }
  }
})
