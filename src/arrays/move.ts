import {Comparator} from '../types';

/**
 * Moves the item in an array in positive or negative direction
 */
export function move<T>(
    value: T,
    distance: number,
    array: T[],
    comparator: Comparator<T> = (a, b) => a === b
): T[] {
    const index = array.findIndex((x) => comparator(value, x));
    const nextIndex = Math.min(Math.max(index + distance, 0), array.length);
    if (index < 0 || distance === 0) {
        return array;
    }
    const clone = [...array];
    clone.splice(nextIndex, 0, clone.splice(index, 1)[0]);
    return clone;
}
