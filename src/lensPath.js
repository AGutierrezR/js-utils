import { assocPath } from 'src/assocPath'
import { path } from './path'
import { lens } from './lens'

export function lensPath(key) {
  return lens(path(key), assocPath(key))
}
