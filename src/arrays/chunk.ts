/**
 * Splits an array into chunks based on size
 */
export function chunk<T>(size: number, array: T[]): T[][] {
    if (size <= 0) {
        return [array];
    }
    const res: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        res.push(array.slice(i, i + size));
    }
    return res;
}
