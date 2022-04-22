const { _isArrayLike } = require('src/_internals/_isArrayLike')

describe('_isArrayLike', () => {
  it('Should return true if for Arrays', () => {
    expect(_isArrayLike([])).toBe(true)
    expect(_isArrayLike([1, 2, 34])).toBe(true)
    expect(_isArrayLike([null])).toBe(true)
  })

  it('Should return true for arguments', () => {
    function f() {
      return _isArrayLike(arguments)
    }
    expect(f()).toBe(true)
    expect(f(1, 2, 3)).toBe(true)
    expect(f(null)).toBe(true)
  })

  it('Should return false for strings', () => {
    expect(_isArrayLike('')).toBe(false)
    expect(_isArrayLike('abc')).toBe(false)
    expect(_isArrayLike('\n')).toBe(false)
  })

  it('Should true true for arbitrary objects with numeric length, if extreme indices are defined', () => {
    expect(_isArrayLike({ length: 0 })).toBe(true)
    expect(_isArrayLike({ 0: 'a', length: 1 })).toBe(true)
    expect(_isArrayLike({ 0: 'a', 1: 'b', length: 2 })).toBe(true)
    expect(_isArrayLike({ 0: 'a', length: 2 })).toBe(false)
    expect(_isArrayLike({ 1: 'b', length: 2 })).toBe(false)
  })

  it('Should return false for everything else', () => {
    expect(_isArrayLike(null)).toBe(false)
    expect(_isArrayLike(undefined)).toBe(false)
    expect(_isArrayLike(true)).toBe(false)
    expect(_isArrayLike(false)).toBe(false)
    expect(_isArrayLike(0)).toBe(false)
    expect(_isArrayLike({})).toBe(false)
    expect(_isArrayLike(function() {})).toBe(false)
  })
})
