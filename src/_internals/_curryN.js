import { _arity } from './_arity'

/**
 * Internal curryN function
 *
 * @param {Number} length - Number of arguments the function expects
 * @param {Array} received - Array of arguments received
 * @param {Function} fn - Function to curry
 * @returns {Function} - The curried function
 */
export function _curryN(length, received, fn) {
  return function curried() {
    const receivedLength = received.length
    const argumentsLength = arguments.length
    const args = new Array(receivedLength + argumentsLength)

    // First, fill the args array with the received arguments
    let ri = 0 // received index
    while (ri < receivedLength) {
      args[ri] = received[ri]
      ri++
    }

    // Then fill the args array with the arguments passed to the curried function
    let ai = 0 // argument index
    while (ai < argumentsLength) {
      args[receivedLength + ai] = arguments[ai]
      ai++
    }

    const argumentsLeft = length - args.length

    return args.length >= length
      ? fn.apply(this, args)
      : _arity(argumentsLeft, _curryN(length, args, fn))
  }
}
