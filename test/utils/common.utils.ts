import * as path from "path";

/**
 * Returns the parent directory name of the calling script, derived from the
 * stack trace. Used by login.page.ts to pick credentials based on which
 * scenario folder is invoking the login - kept identical to the original
 * framework's implementation.
 *
 * @returns The directory name of the caller function, or `undefined` if the stack trace is not available.
 */
export function getCallerParentDirectory(): string | undefined {
  const originalStack = new Error().stack;
  if (!originalStack) return undefined;

  const stackLines = originalStack.split("\n").map((line) => line.trim());

  // The first line is "Error", second is this function, third is `login`, fourth is the caller
  const callerStackLine = stackLines[3];

  if (callerStackLine) {
    const match = RegExp(/\((.*):\d+:\d+\)$/).exec(callerStackLine);
    if (match) {
      const callerFilePath = match[1];
      const directoryPath = path.dirname(callerFilePath).split("/");
      return directoryPath[directoryPath.length - 1];
    }
  }
  return undefined;
}

/**
 * Generates a random alphanumeric suffix, useful for creating unique dummy values.
 *
 * @param length number of characters to generate
 *
 * @example
 * generateRandomString(6)   // Returns: "a1b2c3"
 */
export function generateRandomString(length: number): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/**
 * Formats a Date object into "mm/dd/yyyy", mirroring the date-formatting
 * helpers used throughout the original framework's utils.
 *
 * @param date the date to format
 *
 * @example
 * formatDate(new Date(2024, 5, 4))   // Returns: "6/4/2024"
 */
export function formatDate(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}
