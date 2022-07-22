import {Comparator} from '../types';
import {contains} from './contains';

/**
 * Removes an item from an array if the item is in the array.
 * If item is not found, the original array is returned.
 * NOTE: default compare based on reference to object in memory.
 */
export function remove<T>(value: T, array: T[], comparator: Comparator<T> = (a, b) => a === b) {
    if (!contains<T>(value, array, comparator)) {
        return array;
    }
    return array.filter((x) => !comparator(value, x));
}
