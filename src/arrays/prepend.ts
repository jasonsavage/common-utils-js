import {Comparator} from '../types';
import {contains} from './contains';

/**
 * Adds an item to the beginning of an array if the item is not already in the array.
 * If it is, the original array is returned.
 * NOTE: default compare based on reference to object in memory.
 */
export function prepend<T>(
    value: T,
    array: T[],
    comparator: Comparator<T> = (a, b) => a === b
): T[] {
    if (!contains<T>(value, array, comparator)) {
        return [value, ...array];
    }
    return array;
}
