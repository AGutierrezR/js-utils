import { add, when } from '../src'

const isNumber = (x) => typeof x === 'number'

describe('when', () => {
  it('Should calls the whenTrue function if the validator returns a truthy value', () => {
    expect(when(isNumber, add(1))(10)).toEqual(11)
  })

  it('Should eturns the argument unmodified if the validator returns a falsy valu', () => {
    expect(when(isNumber, add(1))('hello')).toEqual('hello')
  })

  it('Should returns a curried function', () => {
    const ifIsNumber = when(isNumber)
    expect(ifIsNumber(add(1))(15)).toEqual(16)
    expect(ifIsNumber(add(1))('hello')).toEqual('hello')
  })
})
