// From https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
const get = (obj: any, path: string, defaultValue?: any) => {
  // Potential vulnerability if coming from user data
  if (path.includes('__proto__')) {
    throw new Error('Not allowed to use __proto__ in paths')
  }

  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      )

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}

export default get
