import {matirx} from './matirx';

describe('matrix', () => {
    it('should create a multidimensional array filled with undefined values', () => {
        const result = matirx(3, 3);
        expect(result).toEqual([
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
            [undefined, undefined, undefined],
        ]);
    });
    it('should use creator function to populate array', () => {
        const result = matirx<number>(3, 3, (_x, _y, i) => i);
        expect(result).toEqual([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ]);
    });
    it('if 0, 0, are given, should return empty array', () => {
        const result = matirx(0, 0);
        expect(result).toEqual([]);
    });
});
