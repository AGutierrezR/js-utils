import { _curry1 } from './_internals/_curry1'

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 */
export const anyPass = _curry1(function anyPass(predicates) {
  return function checkEveryPredicate() {
    let counter = 0
    while (counter < predicates.length) {
      if (predicates[counter].apply(this, arguments)) {
        return true
      }
      counter++
    }

    return false
  }
})
