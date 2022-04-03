export function findMutualGroup(
  myGroup: string[],
  selectedContactGroup: string[]
): string[] {
  const result: string[] = [];
  myGroup.map((it) => {
    if (selectedContactGroup.includes(it)) result.push(it);
  });
  return result;
}
