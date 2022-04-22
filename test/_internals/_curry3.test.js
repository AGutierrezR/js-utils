import { _curry3 } from 'src/_internals/_curry3'

describe('_curry3', () => {
  it('Should curry a function with 3 argument', () => {
    const fn = (a, b, c) => a + b + c
    const curried = _curry3(fn)
    expect(curried()).toBe(curried)
    expect(curried(1, 2, 3)).toBe(6)
    expect(curried(1)(2)(3)).toBe(6)
    expect(curried(1, 2)(3)).toBe(6)
    expect(curried(1)(2, 3)).toBe(6)
  })
})
