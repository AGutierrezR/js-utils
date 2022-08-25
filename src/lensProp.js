import { assoc } from './assoc'
import { prop } from './prop'
import { lens } from './lens'

export function lensProp(key) {
  return lens(prop(key), assoc(key))
}
