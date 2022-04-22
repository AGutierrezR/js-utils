import { _arity } from 'src/_internals/_arity';

describe('arity', () => {
  it('Should return a function with n arguments', () => {
    expect(_arity(0, () => true).length).toBe(0)
    expect(_arity(1, () => true).length).toBe(1)
    expect(_arity(1, () => true).length).toBe(1)
    expect(_arity(2, () => true).length).toBe(2)
    expect(_arity(3, () => true).length).toBe(3)
    expect(_arity(4, () => true).length).toBe(4)
    expect(_arity(5, () => true).length).toBe(5)
    expect(_arity(6, () => true).length).toBe(6)
    expect(_arity(7, () => true).length).toBe(7)
    expect(_arity(8, () => true).length).toBe(8)
    expect(_arity(9, () => true).length).toBe(9)
    expect(_arity(10, () => true).length).toBe(10)
  })

  it('Should thrown an error if the arity is less then 0 or greater than 10', () => {
    expect(() => _arity(-1, () => true)).toThrow()
    expect(() => _arity(11, () => true)).toThrow()
  })

  it('Should thrown an error if the arity is not a number', () => {
    expect(() => _arity('1', () => true)).toThrow()
    expect(() => _arity(true, () => true)).toThrow()
    expect(() => _arity(false, () => true)).toThrow()
    expect(() => _arity(null, () => true)).toThrow()
    expect(() => _arity(undefined, () => true)).toThrow()
    expect(() => _arity(NaN, () => true)).toThrow()
    expect(() => _arity(Infinity, () => true)).toThrow()
    expect(() => _arity(() => true, () => true)).toThrow()
    expect(() => _arity([], () => true)).toThrow()
    expect(() => _arity({}, () => true)).toThrow()
    expect(() => _arity(/a/, () => true)).toThrow()
    expect(() => _arity(new Date(), () => true)).toThrow()
    expect(() => _arity(new Error(), () => true)).toThrow()
  })
})
