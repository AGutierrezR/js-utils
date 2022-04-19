/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 */
export function allPass(predicates) {
  return function checkEveryPredicate() {
    let counter = 0
    while (counter < predicates.length) {
      if (!predicates[counter].apply(this, arguments)) {
        return false
      }
      counter++
    }

    return true
  }
}
