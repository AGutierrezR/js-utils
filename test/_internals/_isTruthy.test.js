import { _isTruthy } from 'src/_internals/_isTruthy'

describe('_isFalsy', () => {
  it('Should return false for empty Arrays', () => {
    expect(_isTruthy([])).toBe(false)
    expect(_isTruthy([1, 2, 34])).toBe(true)
    expect(_isTruthy([null])).toBe(true)
  })

  it('Should return false for empty Objects', () => {
    expect(_isTruthy({})).toBe(false)
    expect(_isTruthy({ name: 'Joe' })).toBe(true)
    expect(_isTruthy([null])).toBe(true)
  })

  it('Should return correct value for other types', () => {
    expect(_isTruthy(null)).toBe(false)
    expect(_isTruthy(undefined)).toBe(false)
    expect(_isTruthy(true)).toBe(true)
    expect(_isTruthy(false)).toBe(false)
    expect(_isTruthy(0)).toBe(false)
    expect(_isTruthy('')).toBe(false)
    expect(_isTruthy(function () {})).toBe(true)
  })
})
