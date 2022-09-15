import { select } from '../src'

describe('select', () => {
  const mapToWord = (x) => x.word
  const group = (g) => (x) => x.group === g

  it('Should returns filtered and mapped values', () => {
    const list = [
      { group: 'a', word: 'hello' },
      { group: 'b', word: 'bye' },
      { group: 'a', word: 'oh' },
      { group: 'b', word: 'hey' },
      { group: 'c', word: 'ok' },
    ]
    const result = select(group('a'), mapToWord, list)

    expect(result).toEqual(['hello', 'oh'])
  })

  it('Should not fail on empty input list', () => {
    const list = []
    const result = select(group('a'), mapToWord, list)

    expect(result).toEqual([])
  })
})
