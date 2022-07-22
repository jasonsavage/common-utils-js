import {prepend} from './prepend';

interface Obj {
    id: string;
}

describe('prepend', () => {
    const value1 = 'dog';
    const value2 = 'cat';
    const value3 = 'fish';

    it('should add item to the beginning of an array and return new array', () => {
        const array: string[] = [value2, value3];
        const result = prepend<string>(value1, array);
        expect(result).toEqual([value1, value2, value3]);
        expect(result === array).toEqual(false);
    });

    it('if item is already in array, should ignore and return original array', () => {
        const array: string[] = [value1, value2, value3];
        const result = prepend<string>(value3, array);
        expect(result).toEqual([value1, value2, value3]);
        expect(result === array).toEqual(true);
    });

    describe('with comparator', () => {
        const obj1 = {id: value1};
        const obj2 = {id: value2};
        const obj3 = {id: value3};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should add item to the beginning of the array using custom comparator', () => {
            const array: {id: string}[] = [obj2, obj3];
            const result = prepend<Obj>({id: 'dog'}, array, comparator);
            expect(result).toEqual([obj1, obj2, obj3]);
            expect(result === array).toEqual(false);
        });

        it('if item is already in array, should ignore and return original array using custom comparator', () => {
            const array: {id: string}[] = [obj1, obj2, obj3];
            const result = prepend<Obj>({id: 'fish'}, array, comparator);
            expect(result).toEqual([obj1, obj2, obj3]);
            expect(result === array).toEqual(true);
        });
    });
});
