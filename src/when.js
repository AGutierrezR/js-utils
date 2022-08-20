import { _curry3 } from './_internals/_curry3'

export const when = _curry3(function when(pred, whenTrueFn, value) {
  return pred(value) ? whenTrueFn(value) : value
})

