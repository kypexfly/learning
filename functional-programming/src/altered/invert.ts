const invert =
  <T extends (...args: any[]) => any>(fn: T) =>
  (...args: Parameters<T>) =>
    -fn(...args);
