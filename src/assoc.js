import { _curry3 } from './_internals/_curry3.js'

export const assoc = _curry3(function assoc(prop, newValue, obj) {
  return Object.assign({}, obj, { [prop]: newValue })
})
