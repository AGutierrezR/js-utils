/**
 * Adds two values.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 */
export function add(a, b) {
  if (arguments.length === 1) return (_b) => add(a, _b)

  return Number(a) + Number(b)
}
