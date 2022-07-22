import {fill} from './fill';

describe('fill', () => {
    it('should create an array of the given length filled with undefined values', () => {
        const result = fill(3);
        expect(result).toEqual([undefined, undefined, undefined]);
    });
    it('should fill existing array with values', () => {
        const array = [4, 5, 6];
        const result = fill(6, array);
        expect(result).toEqual([4, 5, 6, undefined, undefined, undefined]);
    });
    it('should NOT fill existing array if array is already at length', () => {
        const array = [4, 5, 6];
        const result = fill(3, array);
        expect(result).toEqual([4, 5, 6]);
    });
    it('should use creator function to populate array', () => {
        const result = fill<number>(3, [], (i) => i);
        expect(result).toEqual([0, 1, 2]);
    });
});
