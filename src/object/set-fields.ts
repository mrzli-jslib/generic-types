/**
 * Replaces selected properties, including their value types and modifiers.
 * All properties not included in `Fields` are left unchanged.
 *
 * @example
 * ```ts
 * type User = {
 *   id: number;
 *   readonly name: string;
 *   active: boolean;
 * };
 *
 * type EditableUser = SetFields<
 *   User,
 *   {
 *     readonly id: string;
 *     name?: string;
 *   }
 * >;
 * // {
 * //   readonly id: string;
 * //   name?: string;
 * //   active: boolean;
 * // }
 * ```
 */
export type SetFields<T, Fields extends Partial<Record<keyof T, unknown>>> = Omit<T, keyof Fields> &
  Fields;
