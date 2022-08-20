import { anyPass } from '../src'

describe('anyPass', () => {
  it('Should return true if one predicate return true', () => {
    const pred1 = (x) => true
    const pred2 = (x) => false
    const pred3 = (x) => false

    const checkEveryPredicate = anyPass([pred1, pred2, pred3])
    expect(checkEveryPredicate(1)).toBe(true)
  })

  it('Should return false if all predicate return false', () => {
    const pred1 = (x) => false
    const pred2 = (x) => false

    const checkEveryPredicate = anyPass([pred1, pred2])
    expect(checkEveryPredicate(1)).toBe(false)
  })

  it('Should work with multiple inputs', () => {
    const fn = (w, x, y, z) => w + x === y + z
    expect(anyPass([fn])(3, 3, 3, 3)).toBe(true)
    expect(anyPass([fn])(3, 1, 3, 2)).toBe(false)
  })

  it('Should pass the same input to all predicates if none of then return true', () => {
    const pred1 = jest.fn().mockReturnValue(false)
    const pred2 = jest.fn().mockReturnValue(false)

    anyPass([pred1, pred2])(1)

    expect(pred1).toHaveBeenCalledWith(1)
    expect(pred2).toHaveBeenCalledWith(1)
  })

  it('Should stop testing predicated if a predicate returns true', () => {
    const pred1 = jest.fn().mockReturnValue(false)
    const pred2 = jest.fn().mockReturnValue(true)
    const pred3 = jest.fn().mockReturnValue(false)

    anyPass([pred1, pred2, pred3])(1)

    expect(pred1).toHaveBeenCalled()
    expect(pred2).toHaveBeenCalled()
    expect(pred3).not.toHaveBeenCalled()
  })

  it('Should preserve the context', () => {
    const context = { x: 10 }

    function pred1(x) {
      return x === this.x
    }
    function pred2(x) {
      return x === this.x
    }
    function pred3(x) {
      return x === this.x
    }

    const checkEveryPredicate = anyPass([pred1, pred2, pred3])
    expect(checkEveryPredicate.call(context, 10)).toBe(true)
  })

  it('Should return false if predicates param is a empty array', () => {
    expect(anyPass([])(3)).toBeFalse()
  })
})
