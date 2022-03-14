export function isEmptyObj(obj: object | null): boolean {
  if (obj === null) return true;
  for (let key in obj) {
    return false;
  }
  return true;
}
