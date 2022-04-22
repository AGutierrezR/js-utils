import { _curry1 } from "src/_internals/_curry1";

describe("_curry1", () => {
  it('Should curry a function with 1 argument', () => {
    const fn = (a) => a;
    const curried = _curry1(fn);
    expect(curried()).toBe(curried);
    expect(curried(1)).toBe(1);
  })
})