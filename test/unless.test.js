import { _isArrayLike } from 'src/_internals/_isArrayLike'
import { unless } from '../src'

describe('unless', () => {
  it('Should calls the whenFalse function if the validator returns a falsy value', () => {
    expect(unless(_isArrayLike, Array.of)(10)).toEqual([10])
  })

  it('Should returns the argument unmodified if the validator returns a truthy value', () => {
    expect(unless(_isArrayLike, Array.of)([10])).toEqual([10])
  })

  it('Should returns a curried function', () => {
    expect(unless(_isArrayLike)(Array.of)(10)).toEqual([10])
    expect(unless(_isArrayLike)(Array.of)([10])).toEqual([10])
  })
})
