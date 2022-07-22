/**
 * Converts a multi-dimensional array into a one dimensional array
 */
export function flatten<T>(array: any): T[] {
    return array.reduce((acc: T[], item: T | T[]) => {
        if (Array.isArray(item)) {
            return [...acc, ...flatten<T>(item)];
        }
        return [...acc, item];
    }, []);
}
