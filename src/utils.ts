export function extractJSON<T>(str: string, defaultValue: T): T {
  try {
    return JSON.parse(str) as T;
  } catch (e) {
    return defaultValue;
  }
}
