import { add } from '../src'

describe('add', () => {
  it('Should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('Should currid if only one param is pass', () => {
    expect(add(1)(2)).toBe(3)
  })
})
