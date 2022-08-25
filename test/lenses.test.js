import {
  lens,
  lensIndex,
  lensPath,
  lensProp,
  view,
  set,
  over,
  compose,
} from '../src'
import { prop, assoc } from '../src'

const they = it

const toUpper = (st) => st.toUpperCase()

const joel = {
  name: 'Joel Miller',
  address: ['22 Walnut St', 'San Francisco', 'CA'],
  pets: { dog: 'Joker', cat: 'Batman' },
}

describe('view, set, over', () => {
  describe('lens created by `lens(getter, setter)`', () => {
    const nameLens = lens(prop('name'), assoc('name'))

    they('Should be applied', () => {
      expect(view(nameLens, joel)).toBe('Joel Miller')

      expect(over(nameLens, toUpper, joel)).toEqual({
        name: 'JOEL MILLER',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'Joker', cat: 'Batman' },
      })

      expect(set(nameLens, 'Joe Doe', joel)).toEqual({
        name: 'Joe Doe',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'Joker', cat: 'Batman' },
      })
    })
  })

  describe('lens created by `lensIndex(key)', () => {
    const headLens = lensIndex(0)

    they('Should be applied', () => {
      expect(view(headLens, joel.address)).toBe('22 Walnut St')

      expect(over(headLens, toUpper, joel.address)).toEqual([
        '22 WALNUT ST',
        'San Francisco',
        'CA',
      ])

      expect(set(headLens, '52 Crane Ave', joel.address)).toEqual([
        '52 Crane Ave',
        'San Francisco',
        'CA',
      ])
    })
  })

  describe('lens created by `lensPath(path)', () => {
    const dogLens = lensPath(['pets', 'dog'])

    they('Should be applied', () => {
      expect(view(dogLens, joel)).toBe('Joker')

      expect(set(dogLens, 'Robin', joel)).toEqual({
        name: 'Joel Miller',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'Robin', cat: 'Batman' },
      })

      expect(over(dogLens, toUpper, joel)).toEqual({
        name: 'Joel Miller',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'JOKER', cat: 'Batman' },
      })
    })
  })

  describe('lens created by `lensProp(key)', () => {
    const nameLens = lensProp('name')

    they('Should be applied', () => {
      expect(view(nameLens, joel)).toBe('Joel Miller')

      expect(over(nameLens, toUpper, joel)).toEqual({
        name: 'JOEL MILLER',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'Joker', cat: 'Batman' },
      })

      expect(set(nameLens, 'Joe Doe', joel)).toEqual({
        name: 'Joe Doe',
        address: ['22 Walnut St', 'San Francisco', 'CA'],
        pets: { dog: 'Joker', cat: 'Batman' },
      })
    })
  })

  describe('Composed lenses', () => {
    const streetLens = compose(lensProp('address'), lensIndex(0))
    const dogLens = compose(lensPath(['pets']), lensPath(['dogs']))

    expect(view(dogLens, joel)).toBe(view(lensPath(['pets', 'dogs']), joel))

    expect(view(streetLens, joel)).toBe('22 Walnut St')

    expect(over(streetLens, toUpper, joel)).toEqual({
      name: 'Joel Miller',
      address: ['22 WALNUT ST', 'San Francisco', 'CA'],
      pets: { dog: 'Joker', cat: 'Batman' },
    })

    expect(set(streetLens, '52 Crane Ave', joel)).toEqual({
      name: 'Joel Miller',
      address: ['52 Crane Ave', 'San Francisco', 'CA'],
      pets: { dog: 'Joker', cat: 'Batman' },
    })
  })
})
