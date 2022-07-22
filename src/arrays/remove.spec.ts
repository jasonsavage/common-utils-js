import {remove} from './remove';

interface Obj {
    id: string;
}

describe('remove', () => {
    const value1 = 'dog';
    const value2 = 'cat';
    const value3 = 'fish';

    it('should remove the item from the array', () => {
        const array: string[] = [value1, value2, value3];
        const result = remove<string>(value1, array);
        expect(result).toEqual([value2, value3]);
        expect(result === array).toEqual(false);
    });

    it('if item is NOT in array, should ignore and return original array', () => {
        const array: string[] = [value2, value3];
        const result = remove<string>(value1, array);
        expect(result).toEqual(array);
        expect(result === array).toEqual(true);
    });

    describe('with comparator', () => {
        const obj1 = {id: value1};
        const obj2 = {id: value2};
        const obj3 = {id: value3};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should remove the item from the array using custom comparator', () => {
            const array: Obj[] = [obj1, obj2, obj3];
            const result = remove<Obj>({id: value1}, array, comparator);
            expect(result).toEqual([obj2, obj3]);
            expect(result === array).toEqual(false);
        });

        it('if item is NOT in array, should ignore and return original array using custom comparator', () => {
            const array: Obj[] = [obj2, obj3];
            const result = remove<Obj>({id: value1}, array, comparator);
            expect(result).toEqual([obj2, obj3]);
            expect(result === array).toEqual(true);
        });
    });
});
