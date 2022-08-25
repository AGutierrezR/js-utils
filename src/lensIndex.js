import { _curry1 } from './_internals/_curry1'
import { lens } from './lens'
import { nth } from './nth'
import { update } from './update'

export const lensIndex = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n))
})
