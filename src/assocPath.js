import { _cloneList } from './_internals/_cloneList.js'
import { _has } from './_internals/_has.js'
import { _isArray } from './_internals/_isArray.js'
import { _isInteger } from './_internals/_isInteger.js'
import { _assoc } from './_internals/_assoc.js'
import { _curry3 } from './_internals/_curry3.js'

export const assocPath = _curry3(function assocPath(path, newValue, obj) {
  if (path.length === 0) return newValue

  let idx = path[0]

  if (path.length > 1) {
    const cond = obj !== null && _has(idx, obj) && typeof obj[idx] === 'object'

    // Extract value from current path or empty object/array
    const nextInput = cond ? obj[idx] : _isInteger(path[1]) ? [] : {}

    // Recursion with the next path item
    newValue = assocPath(
      Array.prototype.slice.call(path, 1),
      newValue,
      nextInput
    )
  }

  return _assoc(idx, newValue, obj)
})
