import {contains} from './contains';

interface Obj {
    id: string;
}

describe('contains', () => {
    const value1 = 'dog';
    const value2 = 'cat';
    const value3 = 'fish';

    it('should return true if array contains item', () => {
        const array: string[] = [value1, value2, value3];
        expect(contains<string>(value1, array)).toEqual(true);
    });

    it('should return false if array does not contains item', () => {
        const array: string[] = [value2, value3];
        expect(contains<string>(value1, array)).toEqual(false);
    });

    describe('with comparator', () => {
        const obj1 = {id: value1};
        const obj2 = {id: value2};
        const obj3 = {id: value3};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should add item to the end of the array using custom comparator', () => {
            const array: Obj[] = [obj1, obj2, obj3];
            expect(contains<Obj>({id: value1}, array, comparator)).toEqual(true);
        });

        it('if item is already in array, should ignore and return original array using custom comparator', () => {
            const array: Obj[] = [obj2, obj3];
            expect(contains<Obj>({id: value1}, array, comparator)).toEqual(false);
        });
    });
});
