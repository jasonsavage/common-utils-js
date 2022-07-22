import {append} from './append';

interface Obj {
    id: string;
}

describe('append', () => {
    const value1 = 'dog';
    const value2 = 'cat';
    const value3 = 'fish';

    it('should add item to the end of an array and return new array', () => {
        const array: string[] = [value2, value3];
        const result = append<string>(value1, array);
        expect(result).toEqual([value2, value3, value1]);
        expect(result === array).toEqual(false);
    });

    it('if item is already in array, should ignore and return original array', () => {
        const array: string[] = [value1, value2, value3];
        const result = append<string>(value1, array);
        expect(result).toEqual([value1, value2, value3]);
        expect(result === array).toEqual(true);
    });

    describe('with comparator', () => {
        const obj1 = {id: value1};
        const obj2 = {id: value2};
        const obj3 = {id: value3};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should add item to the end of the array using custom comparator', () => {
            const array: {id: string}[] = [obj2, obj3];
            const result = append<Obj>({id: 'dog'}, array, comparator);
            expect(result).toEqual([obj2, obj3, obj1]);
            expect(result === array).toEqual(false);
        });

        it('if item is already in array, should ignore and return original array using custom comparator', () => {
            const array: {id: string}[] = [obj1, obj2, obj3];
            const result = append<Obj>({id: 'dog'}, array, comparator);
            expect(result).toEqual([obj1, obj2, obj3]);
            expect(result === array).toEqual(true);
        });
    });
});
