export function stringGenerics<T extends 'foo' | 'bar'>(msg: T) {
  return msg
}