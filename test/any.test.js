import { any } from 'src/'

describe('any', () => {
  const isOdd = (n) => n % 2 === 1
  const T = () => true

  it('Should return true if any element satisfies the predicate', () => {
    const list = [2, 4, 5, 6]
    expect(any(isOdd, list)).toBe(true)
  })

  it('Should return false if all elements fails to satisfies the predicate', () => {
    const list = [2, 4, 6, 8]
    expect(any(isOdd, list)).toBe(false)
  })

  it('Should work with more complex objects', () => {
    const heroes = [
      { first: 'Luke', last: 'Cage' },
      { first: 'Steve', last: 'Roger' },
      { first: 'Tony', last: 'Stark' },
    ]
    const allIterative = (person) =>
      person.first.charAt(0) === person.last.charAt(0)
    expect(any(allIterative, heroes)).toBe(false)
    heroes.push({ first: 'Peter', last: 'Parker' })
    expect(any(allIterative, heroes)).toBe(true)
  })

  it('Should work with a configurable function', () => {
    const people = [
      { name: 'Luke', age: 14 },
      { name: 'Steve', age: 18 },
      { name: 'Tony', age: 17 },
    ]
    const atLeast = (age) => (person) => person.age >= age
    expect(any(atLeast(16), people)).toBe(true)
    expect(any(atLeast(21), people)).toBe(false)
  })

  it('Should return false if array is empty', () => {
    expect(any(T, [])).toBe(false)
  })
})
