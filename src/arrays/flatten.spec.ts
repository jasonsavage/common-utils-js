import {flatten} from './flatten';

describe('flatten', () => {
    it('should convert a multi-dimensional array into one dimensional array', () => {
        const array = [1, [2, 3], 4, 5, [6, [7, [8], 9], 10], 11];
        const result = flatten<number>(array);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
    it('should work on empty arrays', () => {
        const array: number[] = [];
        const result = flatten<number>(array);
        expect(result).toEqual([]);
    });
});
