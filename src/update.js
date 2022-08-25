// import { adjust } from 'src/adjust'
// import { always } from 'src/always'
import { _cloneList } from 'src/_internals/_cloneList'
import { _curry3 } from 'src/_internals/_curry3'

export const update = _curry3(function update(idx, x, list) {
  const clone = _cloneList(list)
  if (idx === -1) return clone.fill(x, idx)

  return clone.fill(x, idx, idx + 1)

  // return adjust(idx, always(x), list)
})
