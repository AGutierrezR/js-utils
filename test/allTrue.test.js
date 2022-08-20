import { allTrue } from 'src/'

describe('allTrue', () => {
  it('Should works with functions', () => {
    const foo = () => 1
    const bar = () => false
    const baz = () => JSON.parse('{asd: "asd"}')

    const result = allTrue(foo, bar, baz)
    expect(result).toBeFalse()
  })

  it('Should works with no boolean values', () => {
    const foo = { a: 1, b: 2 }
    const baz = [1, 2, 3]

    const result = allTrue(foo, baz)
    expect(result).toBeTrue()
  })

  it('Should works with boolean', () => {
    expect(allTrue(false, true, false)).toBeFalse()
    expect(allTrue(false, false, false)).toBeFalse()
    expect(allTrue(true, true, true)).toBeTrue()
  })
})
