import { _curry2 } from 'src/_internals/_curry2'

export const prop = _curry2(function prop(propToFind, obj) {
  if (!obj) return undefined

  return obj[propToFind]
})
