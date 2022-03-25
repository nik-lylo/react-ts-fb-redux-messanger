export function filterContactUserByString(subStr: string, array: any): any {
  const upperStr = subStr.toLowerCase().trim();
  if (subStr === "") {
    return array;
  }
  const result = array.filter((item: any) =>
    item.fullname.toLowerCase().includes(upperStr)
  );

  return result;
}
