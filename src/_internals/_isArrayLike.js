import { _isString } from './_isString'
import { _curry1 } from './_curry1'
import { _isArray } from './_isArray'

export const _isArrayLike = _curry1(function isArrayLike(x) {
  if (_isArray(x)) return true
  if (!x) return false
  if (typeof x !== 'object') return false
  if (_isString(x)) return false
  if (x.length === 0) return true
  if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  return false
})
