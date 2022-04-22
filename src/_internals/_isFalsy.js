import { type } from "src/type"
import { _isArray } from "./_isArray"

export function _isFalsy(x) {
  if (_isArray(x)) {
    return x.length === 0
  }
  if (type(x) === 'Object') {
    return Object.keys(x).length === 0
  }

  return !x
}