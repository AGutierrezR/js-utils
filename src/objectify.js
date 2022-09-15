import { _curry2 } from './_internals/_curry2'

export const objectify = _curry2((keySelector, list) => {
  return list.reduce((acc, item) => {
    acc[keySelector(item)] = item
    return acc
  }, {})
})
