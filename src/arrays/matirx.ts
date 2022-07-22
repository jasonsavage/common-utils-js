import {MatrixItemCreatorFn} from '../types';

/**
 * Creates a multidimensional array based on the given rows and columns
 */
export function matirx<T>(
    rows: number,
    columns: number,
    creatorFn: MatrixItemCreatorFn<T | undefined> = () => undefined
): (T | undefined)[][] {
    return new Array(rows).fill([]).map((_1: any[], x: number) => {
        return new Array(columns).fill(undefined).map((_2: undefined, y: number) => {
            return creatorFn(x, y, x * columns + y);
        });
    });
}
