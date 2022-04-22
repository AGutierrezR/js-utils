import { _isFalsy } from 'src/_internals/_isFalsy'

describe('_isFalsy', () => {
  it('Should return true for empty Arrays', () => {
    expect(_isFalsy([])).toBe(true)
    expect(_isFalsy([1, 2, 34])).toBe(false)
    expect(_isFalsy([null])).toBe(false)
  })

  it('Should return true for empty Objects', () => {
    expect(_isFalsy({})).toBe(true)
    expect(_isFalsy({ name: 'Joe' })).toBe(false)
    expect(_isFalsy([null])).toBe(false)
  })

  it('Should return correct value for other types', () => {
    expect(_isFalsy(null)).toBe(true)
    expect(_isFalsy(undefined)).toBe(true)
    expect(_isFalsy(true)).toBe(false)
    expect(_isFalsy(false)).toBe(true)
    expect(_isFalsy(0)).toBe(true)
    expect(_isFalsy('')).toBe(true)
    expect(_isFalsy(function () {})).toBe(false)
  })
})
