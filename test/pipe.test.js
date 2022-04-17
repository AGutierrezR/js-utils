import { pipe } from '../src'

describe('pipe', () => {
  it('Should be a variadic function', () => {
    expect(typeof pipe).toBe('function')
    expect(pipe.length).toBe(0)
  })

  it('Should perform left-to-right function composition', () => {
    const first = jest.fn()
    const second = jest.fn()
    const third = jest.fn()
    const f = pipe(first, second, third)

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
      a: pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1,
    }

    expect(context.a(5)).toBe(40)
  })
})
