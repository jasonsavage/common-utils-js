import {down} from './down';

interface Obj {
    id: string;
}

describe('down', () => {
    const array = ['dog', 'cat', 'fish', 'mouse', 'bird'];

    it('should move item by [n] towards the end of the array', () => {
        const result = down('cat', 2, array);
        expect(result).toEqual(['dog', 'fish', 'mouse', 'cat', 'bird']);
    });

    it('if at end of array, should stop at end of array', () => {
        const result = down('bird', 2, array);
        expect(result).toEqual(['dog', 'cat', 'fish', 'mouse', 'bird']);
    });

    it('if [n] is 0, should return original array', () => {
        const result = down('cat', 0, array);
        expect(result).toEqual(array);
        expect(result === array).toEqual(true);
    });

    it('if [n] is greater than array, should stop at end of array', () => {
        const result = down('cat', 8, array);
        expect(result).toEqual(['dog', 'fish', 'mouse', 'bird', 'cat']);
    });

    describe('with comparator', () => {
        const obj1 = {id: array[0]};
        const obj2 = {id: array[1]};
        const obj3 = {id: array[2]};
        const obj4 = {id: array[3]};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should move item by [n] towards the end of the array using custom comparator', () => {
            const array: Obj[] = [obj1, obj2, obj3, obj4];
            const result = down<Obj>({id: 'dog'}, 2, array, comparator);
            expect(result).toEqual([obj2, obj3, obj1, obj4]);
        });
    });
});
