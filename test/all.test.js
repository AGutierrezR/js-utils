import { all } from '../src'

describe('all', () => {
  const fn = (x) => x === 1

  it('Should return true if all elements of the list match the predicate', () => {
    expect(all(fn, [1, 1, 1])).toBe(true)
  })

  it('Should return false if one o more elements of the list dont match the predicate', () => {
    expect(all(fn, [1, 2, 1])).toBe(false)
  })
})
