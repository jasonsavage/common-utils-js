import {chunk} from './chunk';

describe('chunk', () => {
    const array = ['dog', 'cat', 'fish', 'mouse', 'bird'];

    it('should split an array into groups based on size', () => {
        const result = chunk(2, array);
        expect(result).toEqual([['dog', 'cat'], ['fish', 'mouse'], ['bird']]);
    });
    it('should return wrapped array when size is larger than array length', () => {
        const result = chunk(8, array);
        expect(result).toEqual([array]);
    });
    it('should return wrapped array when size is 0', () => {
        const result = chunk(0, array);
        expect(result).toEqual([array]);
    });
});
