import {first} from './first';

describe('first', () => {
    it('should return the first item in an array', () => {
        const result = first<string>(['dog', 'cat', 'fish']);
        expect(result).toEqual('dog');
    });
    it('should return undefined if array is empty', () => {
        const result = first<string>([]);
        expect(result).toEqual(undefined);
    });
});
