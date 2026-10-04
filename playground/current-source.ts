export function isCurrentSource(source: File, current: File | null): boolean {
  return current === source;
}

export function resultForCurrentSource<T>(source: File, current: File | null, result: T): T | null {
  return isCurrentSource(source, current) ? result : null;
}
