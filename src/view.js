import { _curry2 } from './_internals/_curry2'

// `Const` is a functor that effectively ignores the function given to `map`.
const Const = function (x) {
  return {
    value: x,
    map: function (_) {
      return Const(x)
    },
  }
}

export const view = _curry2(function view(lens, target) {
  return lens(Const)(target).value
})
