import { _isFalsy } from './_internals/_isFalsy'
import { type } from './type'

export function allTrue(...inputs) {
  let counter = 0
  while (counter < inputs.length) {
    const x = inputs[counter]

    if (type(x) === 'Function') {
      if (_isFalsy(x())) {
        return false
      }
    } else if (_isFalsy(x)) {
      return false
    }

    counter++
  }

  return true
}