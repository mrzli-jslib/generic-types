/**
 * Represents an object with string keys and values of any type.
 *
 * Useful when the object's shape is not known in advance and its values should
 * be usable without type narrowing.
 */
export type AnyObject = Record<string, any>;
