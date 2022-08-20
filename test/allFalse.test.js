import { allFalse } from 'src/'

describe('allFalse', () => {
  it('Should works with functions', () => {
    const foo = () => 1
    const bar = () => false
    const baz = () => JSON.parse('{asd: "asd"}')

    const result = allFalse(foo, bar, baz)
    expect(result).toBeFalse()
  })

  it('Should works with no boolean values', () => {
    const foo = { a: 1, b: 2 }
    const baz = [1, 2, 3]

    const result = allFalse(foo, baz)
    expect(result).toBeFalse()
  })

  it('Should works with boolean', () => {
    expect(allFalse(false, true, false)).toBeFalse()
    expect(allFalse(false, false, false)).toBeTrue()
  })
})
