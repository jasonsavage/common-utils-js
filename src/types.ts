export type Comparator<T> = (a: T, b: T) => boolean;
export type ItemCreatorFn<T> = (index: number) => T;
export type MatrixItemCreatorFn<T> = (x: number, y: number, index: number) => T;
