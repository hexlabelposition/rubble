// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html

// Type definitions for Rubble
// Definitions by: Vladyslav <https://github.com/hexlabelposition>

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
    }
  }

  /**
   * Represents a type that can be either the specified type or null.
   */
  type Nullable<T> = T | null

  /**
   * Represents a type that can be either the specified type or undefined.
   */
  type Optional<T> = T | undefined

  /**
   * Represents a type of a generic dictionary.
   */
  type Dictionary<T = unknown> = Record<string, T>
}

// make a file a module
export {}
