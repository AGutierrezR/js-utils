import { _curry2 } from 'src/_internals/_curry2'
import { _isString } from 'src/_internals/_isString'

export const nth = _curry2(function nth(offset, list) {
  const idx = offset < 0 ? list.length + offset : offset
  return _isString(list) ? list.charAt(idx) : list[idx]
})
