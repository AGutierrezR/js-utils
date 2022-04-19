import { curry } from '../src'

describe('curry', () => {
  it('Should curry a single value', () => {
    const f = curry((a, b, c) => a + b + c)
    const g = f(12)

    expect(g(1, 2)).toBe(15)
  })

  it('Should curry multiple values', () => {
    const f = curry((a, b, c, d) => a + b + c + d)
    const g = f(12, 1)
    expect(g(2, 3)).toBe(18)
    const h = f(12, 1, 2)
    expect(h(3)).toBe(18)
  })

  it('Should allows further currying of a curried function', () => {
    const f = curry((a, b, c, d) => a + b + c + d)
    const g = f(12)
    expect(g(3, 6, 2)).toBe(23)
    const h = g(3)
    expect(h(6, 2)).toBe(23)
    expect(g(3, 6)(2)).toBe(23)
  })

  it('Should properly reports the length of the curriend function', () => {
    const f = curry((a, b, c, d) => a + b + c + d)
    expect(f.length).toBe(4)
    const g = f(12)
    expect(g.length).toBe(3)
    const h = g(1)
    expect(h.length).toBe(2)
    const i = h(2)
    expect(i.length).toBe(1)
  })

  it('Should preserve the context', () => {
    const context = { x: 10 }
    const f = function (a, b) {
      return a + b * this.x
    }
    const g = curry(f)

    expect(g.call(context, 2, 4)).toBe(42)
    expect(g.call(context, 2).call(context, 4)).toBe(42)
  })
})

describe('curry properties', () => {
  it('Should curry multiple values', () => {
    const f = curry((a, b, c, d) => a + b + c + d)

    const combinations = [
      f(1, 2, 3, 4),
      f(1)(2)(3)(4),
      f(1)(2, 3, 4),
      f(1, 2)(3, 4),
      f(1, 2, 3)(4),
    ]

    combinations.forEach((combination) => {
      expect(combination).toBe(10)
    })
  })
})
