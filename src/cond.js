import { _arity } from './_internals/_arity'
import { _curry1 } from './_internals/_curry1'

export const cond = _curry1((conditions) => {
  const arity = conditions.map((c) => c[0].length).reduce(max, 0)

  return _arity(arity, function (...input) {
    for (const [predicate, resultClosure] of conditions) {
      if (predicate.apply(this, input)) {
        return resultClosure.apply(this, input)
      }
    }
  })
})

// const cond = (conditions) => {
//   return (input) => {
//     let done = false
//     let toReturn
//     conditions.forEach(([predicate, resultClosure]) => {
//       if (!done && predicate(input)) {
//         done = true
//         toReturn = resultClosure(input)
//       }
//     })

//     return toReturn
//   }
// }

function max(a, b) {
  return Math.max(a, b)
}
