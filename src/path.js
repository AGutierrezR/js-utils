import { _curry2 } from './_internals/_curry2'
import { paths } from './paths'

export const path = _curry2(function path(pathAr, obj) {
  return paths([pathAr], obj)[0]
})
