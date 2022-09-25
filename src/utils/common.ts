export const isObject = (o: any): o is object =>
  toString.call(o) === '[object Object]'