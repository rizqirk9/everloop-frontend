export function makeTextBrief(text: string, maxLength: number) {
  if (text) {
    if (text.length <= maxLength) {
      return text;
    }
  }
  return text.substring(0, maxLength) + '...';
}
