export function indexToChar(index: number): string {
  if (index < 0) {
    throw new Error(`index must be >= 0 but was ${index}`)
  }

  if (index > 25) {
    throw new Error(`index must be <= 25 but was ${index}`)
  }

  const asciiValue = 97 + index;
  return String.fromCharCode(asciiValue);
}