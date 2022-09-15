import { _curry2 } from './_internals/_curry2'

export const listify = _curry2((toItem, obj) => {
  if (!obj) return []
  const entries = Object.entries(obj)
  if (entries.length === 0) return []

  return entries.reduce((acc, entry) => {
    acc.push(toItem(entry[0], entry[1]))
    return acc
  }, [])
})
