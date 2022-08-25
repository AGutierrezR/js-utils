import { assocPath } from 'src/'

describe('assocPath', () => {
  it('Should make a shallow clone of an object, overriding only what is necessary for the path', () => {
    const obj1 = {
      a: { b: 1, c: 2, d: { e: 3 } },
      f: { g: { h: 4, i: [5, 6, 7], j: { k: 6, l: 7 } } },
      m: 8,
    }
    const obj2 = assocPath(['f', 'g', 'i', 1], 42, obj1)

    expect(obj2.f.g.i).toEqual([5, 42, 7])
    expect(obj2).not.toStrictEqual(obj1)

    expect(obj2.a).toStrictEqual(obj1.a)
    expect(obj2.m).toStrictEqual(obj1.m)
    expect(obj2.f.g.h).toStrictEqual(obj1.f.g.h)
    expect(obj2.f.g.j).toStrictEqual(obj1.f.g.j)

    // Shallowness check
    expect(obj2.a).toBe(obj1.a)
    expect(obj2.m).toBe(obj1.m)
    expect(obj2.f.g.h).toBe(obj1.f.g.h)
    expect(obj2.f.g.j).toBe(obj1.f.g.j)
  })

  it('Should be the equivalent of clone and setPath if property is not on the original', () => {
    var obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }
    var obj2 = assocPath(['x', 0, 'y'], 42, obj1)

    expect(obj2).toEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
      f: 5,
      x: [{ y: 42 }],
    })

    expect(obj2.a).toStrictEqual(obj1.a)
    expect(obj2.b).toStrictEqual(obj1.b)
    expect(obj2.e).toStrictEqual(obj1.e)
    expect(obj2.f).toStrictEqual(obj1.f)
  })

  it('Should overwrite primitive values with keys in the path', () => {
    const obj1 = { a: 'str' }
    const obj2 = assocPath(['a', 'b'], 42, obj1)

    expect(obj2).toEqual({ a: { b: 42 } })
  })

  it('Should replaces the whole object if empty path', () => {
    expect(assocPath([], 3, { a: 1, b: 3 })).toBe(3)
  })

  it('Should replaces `undefined` with a new object', () => {
    expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: undefined })).toEqual({
      foo: { bar: { baz: 42 } },
    })
  })

  it('Should replaces `null` with a a new object', () => {
    expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: null })).toEqual({
      foo: { bar: { baz: 42 } },
    })
  })

  it('Should considers `undefined` as an empty object', () => {
    expect(assocPath(['a'], 1, undefined)).toEqual({
      a: 1,
    })
  })

  it('Should considers `null` as an empty object', () => {
    expect(assocPath(['a'], 1, null)).toEqual({
      a: 1,
    })
  })

  it('Should accept `undefined` as a value', () => {
    expect(assocPath(['a'], undefined, null)).toEqual({
      a: undefined,
    })
  })

  it('Should accept `null` as a value', () => {
    expect(assocPath(['a'], null, null)).toEqual({
      a: null,
    })
  })
})
