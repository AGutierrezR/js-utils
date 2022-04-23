import { always } from 'src/'

describe('always', () => {
  it('Should returns a function that returns the object initially provided', () => {
    const val = always(42)
    expect(val()).toBe(42)
    expect(val(10)).toBe(42)
    expect(val(true)).toBe(42)
  })

  it('Should works with various types', () => {
    expect(always(false)()).toBe(false)
    expect(always('abc')()).toBe('abc')
    expect(always({ a: 1, b: 2 })()).toEqual({ a: 1, b: 2 })
    const obj = { a: 1, b: 2 }
    expect(always(obj)()).toBe(obj)
    const date = new Date(1776, 6, 4)
    expect(always(date)()).toEqual(new Date(1776, 6, 4))
    expect(always(undefined)()).toEqual(undefined)
  })
})
