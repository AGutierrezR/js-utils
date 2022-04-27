import { apply } from 'src/'

describe('append', () => {
  it('Should applies function to each element of the list', () => {
    const list = [1, 2, 3]
    const result = apply(Math.max, list)
    expect(result).toEqual(3)
  })

  it('Should provides no way to specify context', () => {
    const obj = {
      method: function () {
        return this === obj
      },
    }

    expect(apply(obj.method, [])).toBeFalse()
    expect(apply(obj.method.bind(obj), obj, [])).toBeTrue()
  })
})
