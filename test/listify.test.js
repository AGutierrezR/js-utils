import { listify } from '../src'

describe('listify', () => {
  it('Should handles null input', () => {
    const result = listify(() => 1, null)

    expect(result).toEqual([])
  })

  it('Should handles empty object', () => {
    const result = listify(() => 1, {})

    expect(result).toEqual([])
  })

  it('Should calls toItem to convert to list', () => {
    const obj = {
      1: { name: 'Joel' },
      2: { name: 'Ellie' },
    }

    const toItem = (key, value) => ({
      id: +key, // key as number
      ...value, // name: value.name, ...etc.
    })

    const result = listify(toItem, obj)

    expect(result).toEqual([
      { id: 1, name: 'Joel' },
      { id: 2, name: 'Ellie' },
    ])
  })
})
