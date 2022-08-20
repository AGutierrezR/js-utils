import { _isTruthy } from "./_internals/_isTruthy"
import { type } from "./type"

export function allFalse(...inputs) {
  let counter = 0
  while (counter < inputs.length) {
    const x = inputs[counter]

    if (type(x) === 'Function') {
      if (_isTruthy(x())) {
        return false
      }
    } else if (_isTruthy(x)) {
      return false
    }

    counter++
  }

  return true
}