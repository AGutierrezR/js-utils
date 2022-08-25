import { _isArray } from './_isArray'
import { _isInteger } from './_isInteger'

export function _assoc(prop, val, obj) {
  if (_isInteger(prop) && _isArray(obj)) {
    var arr = [].concat(obj)
    arr[prop] = val
    return arr
  }

  var result = {}
  for (var p in obj) {
    result[p] = obj[p]
  }
  result[prop] = val
  return result
}
