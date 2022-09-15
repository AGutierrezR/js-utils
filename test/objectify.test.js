import { objectify } from '../src'

describe('objectify', () => {
  const list = [
    { id: 'a', word: 'hello' },
    { id: 'b', word: 'bye' },
    { id: 'c', word: 'oh' },
    { id: 'd', word: 'hey' },
    { id: 'e', word: 'ok' },
  ]

  const byID = (x) => x.id

  it('Should returns correct map of values', () => {
    const result = objectify(byID, list)

    expect(result.a.word).toBe('hello')
    expect(result.b.word).toBe('bye')
  })
  it('Should not fail on empty input list', () => {
    const result = objectify(byID, [])

    expect(result).toBeEmptyObject()
  })
  it('Should defaults value to array item', () => {
    const result = objectify(byID, list.slice(0, 1))

    expect(result).toEqual({
      a: { id: 'a', word: 'hello' },
    })
  })
})
