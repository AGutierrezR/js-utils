import { append } from 'src/'

describe('append', () => {
  it('Should return a new list with  the element at the end of the list', () => {
    const element = 'a'
    const list = ['b', 'c', 'd']
    const result = append(element, list)
    expect(result).toEqual(['b', 'c', 'd', 'a'])
  })

  it('Should append to an empty array', () => {
    const element = 'a'
    const list = []
    const result = append(element, list)
    expect(result).toEqual(['a'])
  })

  it('Should append to a string and return an array with each character of the string', () => {
    const element = 'o'
    const list = 'fo'
    const result = append(element, list)
    expect(result).toEqual(['f', 'o', 'o'])
  })
})
