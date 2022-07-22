export type CreatorFn<T> = (index: number) => T;

export function fill<T>(
    length: number,
    array: (T | undefined)[] = [],
    creatorFn: CreatorFn<T | undefined> = () => undefined
): (T | undefined)[] {
    while (array.length < length) {
        array.push(creatorFn(array.length));
    }
    return array;
}
