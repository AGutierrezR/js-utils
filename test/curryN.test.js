import { curryN } from '../src'

describe('curryN', () => {
  function source(a, b, c, d) {
    void d
    return a * b * c
  }

  it('Should accepts an arity', () => {
    const f = curryN(3, source)
    expect(f(1)(2)(3)).toBe(6)
    expect(f(1, 2)(3)).toBe(6)
    expect(f(1)(2, 3)).toBe(6)
    expect(f(1, 2, 3)).toBe(6)
  })

  it('Should be partially apply', () => {
    const f = curryN(3)
    const g = f(source)
    expect(g.length).toBe(3)
    expect(g(1)(2)(3)).toBe(6)
    expect(g(1, 2)(3)).toBe(6)
    expect(g(1)(2, 3)).toBe(6)
    expect(g(1, 2, 3)).toBe(6)
  })

  it('Should preserve the context', () => {
    const context = { x: 10 }
    const f = function (a, b) {
      return a + b * this.x
    }
    const g = curryN(2, f)

    expect(g.call(context, 2, 4)).toBe(42)
    expect(g.call(context, 2).call(context, 4)).toBe(42)
  })
})
