import { _curry3 } from './_internals/_curry3'

export const unless = _curry3(function unless(pred, whenFalseFn, value) {
  return pred(value) ? value : whenFalseFn(value)
})
