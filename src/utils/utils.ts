export function isStringContainingObject(str: string) {
  const objectRegex = /{[^{}]+}/;
  return objectRegex.test(str);
}
