import {paginate} from './paginate';

describe('paginate', () => {
    const array = ['dog', 'cat', 'fish', 'mouse', 'bird'];
    it('gets a subset of an array based on page and page size', () => {
        const result = paginate(1, 3, array);
        expect(result).toEqual(['mouse', 'bird']);
    });
    it('if page is out of range, should return last page', () => {
        const result = paginate(2, 3, array);
        expect(result).toEqual(['mouse', 'bird']);
    });
    it('if page is negative, should return first page', () => {
        const result = paginate(-2, 3, array);
        expect(result).toEqual(['dog', 'cat', 'fish']);
    });
    it('if page size is greater than array length, should return array', () => {
        const result = paginate(0, 8, array);
        expect(result).toEqual(array);
    });
    it('if page size is 0, should return array', () => {
        const result = paginate(0, 0, array);
        expect(result).toEqual(array);
    });
});
