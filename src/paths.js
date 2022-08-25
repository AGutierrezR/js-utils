import { _curry2 } from './_internals/_curry2'
import { _isInteger } from './_internals/_isInteger'
import { nth } from './nth'

export const paths = _curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj
    var idx = 0
    var p
    while (idx < paths.length) {
      if (val == null) {
        return
      }
      p = paths[idx]
      val = _isInteger(p) ? nth(p, val) : val[p]
      idx += 1
    }
    return val
  })
})
