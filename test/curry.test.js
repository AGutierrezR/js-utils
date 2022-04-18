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

  it.todo('Should properly reports the length of the curriend function')

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
