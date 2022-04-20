import { adjust, add } from '../src'

describe('Adjust', () => {
  it('Should applies the given function to the value at the given index of the supplied list', () => {
    expect(adjust(1, add(1), [1, 2, 3])).toEqual([1, 3, 3])
  })

  it('Should offset negative indexes from the end of the list', () => {
    expect(adjust(-2, add(1), [1, 2, 3])).toEqual([1, 3, 3])
  })

  it('Should not the original list if the index is out of bounds', () => {
    const list = [0, 1, 2, 3]
    expect(adjust(5, add(1), list)).toBe(list)
    expect(adjust(-5, add(1), list)).toBe(list)
  })

  it('Should not mutate the original list', () => {
    const list = [0, 1, 2, 3]
    expect(adjust(1, add(1), list)).toEqual([0, 2, 2, 3])
    expect(adjust(1, add(1), list)).not.toBe(list)
  })

  it('Should accepts an array-like object', () => {
    function args() {
      return arguments
    }

    expect(adjust(1, add(1), args(1, 2, 3))).toEqual([1, 3, 3])
  })

  it('Should curried', () => {
    expect(adjust(1)(add(1))([1, 2, 3])).toEqual([1, 3, 3])
  })
})
