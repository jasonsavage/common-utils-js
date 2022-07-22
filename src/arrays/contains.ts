import {Comparator} from '../types';

/**
 * Returns true or false if an item is in an array
 * NOTE: default compare based on reference to object in memory.
 */
export function contains<T>(
    value: T,
    array: T[],
    comparator: Comparator<T> = (a, b) => a === b
): boolean {
    return array.some((x) => comparator(value, x));
}
