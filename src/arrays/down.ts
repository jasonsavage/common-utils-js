import {Comparator} from '../types';

/**
 * Moves the item towards array length by [n]
 */
export function down<T>(
    value: T,
    distance: number,
    array: T[],
    comparator: Comparator<T> = (a, b) => a === b
): T[] {
    const index = array.findIndex((x) => comparator(value, x));
    const nextIndex = Math.min(index + distance, array.length);
    if (index < 0 || distance <= 0) {
        return array;
    }
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1, nextIndex + 1),
        value,
        ...array.slice(nextIndex + 1),
    ];
}
