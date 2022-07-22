import {move} from './move';

interface Obj {
    id: string;
}

describe('move', () => {
    const array = ['dog', 'cat', 'fish', 'mouse', 'bird'];

    it('should move item by [n] towards the end of the array', () => {
        const result = move('cat', 2, array);
        expect(result).toEqual(['dog', 'fish', 'mouse', 'cat', 'bird']);
    });

    it('should move item by [n] towards the beginning of the array', () => {
        const result = move('mouse', -2, array);
        expect(result).toEqual(['dog', 'mouse', 'cat', 'fish', 'bird']);
    });

    it('if at end of array, should not move', () => {
        const result = move('bird', 2, array);
        expect(result).toEqual(['dog', 'cat', 'fish', 'mouse', 'bird']);
    });

    it('if at beginning of array, should not move', () => {
        const result = move('dog', -2, array);
        expect(result).toEqual(['dog', 'cat', 'fish', 'mouse', 'bird']);
    });

    it('if [n] is 0, should return original array', () => {
        const result = move('cat', 0, array);
        expect(result).toEqual(array);
        expect(result === array).toEqual(true);
    });

    it('if item not in array, should return original array', () => {
        const result = move('rat', 2, array);
        expect(result).toEqual(array);
        expect(result === array).toEqual(true);
    });

    it('if [n] is greater than array length, should stop at end of array', () => {
        const result = move('cat', 8, array);
        expect(result).toEqual(['dog', 'fish', 'mouse', 'bird', 'cat']);
    });

    it('if [n] is less than array length, should stop at beginning of array', () => {
        const result = move('mouse', -8, array);
        expect(result).toEqual(['mouse', 'dog', 'cat', 'fish', 'bird']);
    });

    describe('with comparator', () => {
        const obj1 = {id: array[0]};
        const obj2 = {id: array[1]};
        const obj3 = {id: array[2]};
        const obj4 = {id: array[3]};
        const comparator = (a: Obj, b: Obj): boolean => a.id === b.id;

        it('should move item by [n] towards the end of the array using custom comparator', () => {
            const array: Obj[] = [obj1, obj2, obj3, obj4];
            const result = move<Obj>({id: 'cat'}, 2, array, comparator);
            expect(result).toEqual([obj1, obj3, obj4, obj2]);
        });

        it('should move item by [n] towards the beginning of the array using custom comparator', () => {
            const array: Obj[] = [obj1, obj2, obj3, obj4];
            const result = move<Obj>({id: 'mouse'}, -2, array, comparator);
            expect(result).toEqual([obj1, obj4, obj2, obj3]);
        });
    });
});
