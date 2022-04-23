import { and } from 'src/'

describe('and', () => {
  it('Should compares two values with js &&', () => {
    expect(and(true, true)).toBe(true)
    expect(and(true, false)).toBe(false)
    expect(and(false, true)).toBe(false)
    expect(and(false, false)).toBe(false)
    expect(and(true, 'Hello World')).toBe('Hello World')
    expect(and(false, 'Hello World')).toBe(false)
  })
})
