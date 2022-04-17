import { compose } from '../src'

describe('compose', () => {
  it('Should be a variadic function', () => {
    expect(typeof compose).toBe('function')
    expect(compose.length).toBe(0)
  })

  it('Should perform right-to-left function composition', () => {
    const first = jest.fn()
    const second = jest.fn()
    const third = jest.fn()
    const f = compose(third, second, first)

    f()

    expect(first).toHaveBeenCalledBefore(second)
    expect(second).toHaveBeenCalledBefore(third)
  })

  it('Should passes context to functions', () => {
    function x(val) {
      return this.x * val
    }
    function y(val) {
      return this.y * val
    }
    function z(val) {
      return this.z * val
    }

    var context = {
      a: compose(x, y, z),
      x: 4,
      y: 2,
      z: 1,
    }

    expect(context.a(5)).toBe(40)
  })
})

describe('compose properties', () => {
  it('Compose two function', () => {
    const f = (x) => x + 1
    const g = (x) => x * 2
  
    expect(compose(f, g)(1)).toBe(f(g(1)))
  })

  it('Associative', () => {
    const f = (x) => x + 1
    const g = (x) => x * 2
    const h = (x) => x / 2
  
    expect(compose(f, compose(g, h))(1)).toBe(compose(compose(f, g), h)(1))
  })
})
