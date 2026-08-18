/** Join truthy class names. Deliberately tiny — no dependency for this. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
