import { _curry2 } from 'src/_internals/_curry2'

describe('_curry2', () => {
  it('Should curry a function with 2 argument', () => {
    const fn = (a, b) => a + b
    const curried = _curry2(fn)
    expect(curried()).toBe(curried)
    expect(curried(1, 2)).toBe(3)
    expect(curried(1)(2)).toBe(3)
  })
})
