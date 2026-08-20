/**
 * Makes the selected properties required and excludes `undefined` from their
 * value types. All other properties are left unchanged.
 *
 * @example
 * ```ts
 * type User = {
 *   id?: string;
 *   name: string | undefined;
 *   age?: number;
 * };
 *
 * type IdentifiedUser = SetRequired<User, 'id' | 'name'>;
 * // {
 * //   id: string;
 * //   name: string;
 * //   age?: number;
 * // }
 * ```
 */
export type SetRequired<T, Keys extends keyof T> = Omit<T, Keys> & {
  [Key in Keys]-?: Exclude<T[Key], undefined>;
};
