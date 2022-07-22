import {shuffle} from './shuffle';

describe('shuffle', () => {
    const array = ['dog', 'cat', 'fish', 'mouse', 'bird'];

    it('should shuffle values in an array', () => {
        const result = shuffle(array);
        expect(result.length).toEqual(array.length);
        expect(result).not.toEqual(array);
    });
});
