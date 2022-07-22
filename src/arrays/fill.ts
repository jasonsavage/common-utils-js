import {ItemCreatorFn} from '../types';

/**
 * Fills an existing array with values or creates a new array with the given length
 */
export function fill<T>(
    size: number,
    array: (T | undefined)[] = [],
    creatorFn: ItemCreatorFn<T | undefined> = () => undefined
): (T | undefined)[] {
    while (array.length < size) {
        array.push(creatorFn(array.length));
    }
    return array;
}
