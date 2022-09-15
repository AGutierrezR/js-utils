import { _curry3 } from './_internals/_curry3'

export const select = _curry3((predFn, mapper, list) => {
  return list.reduce((acc, item) => {
    if (!predFn(item)) return acc
    return [...acc, mapper(item)]
  }, [])
})
