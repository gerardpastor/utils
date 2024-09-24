/**
 * A utility type that simplifies and flattens the structure of a given type `T`.
 * It essentially creates a new type by iterating over all properties of `T` and
 * copying them into a new object type. This can be useful for improving type
 * readability and ensuring that the type is fully resolved.
 *
 * @template T - The type to prettify.
 *
 * @example
 * // Prettifies a complex type with nested properties
 * type ComplexType = { a: number } & { b: string };
 * type PrettifiedType = Prettify<ComplexType>; // { a: number; b: string }
 *
 * @example
 * // Prettifies a type with optional properties
 * type OptionalType = { a?: number; b?: string };
 * type PrettifiedOptionalType = Prettify<OptionalType>; // { a?: number; b?: string }
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
