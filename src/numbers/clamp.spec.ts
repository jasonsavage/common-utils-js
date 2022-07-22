import {clamp} from './clamp';

describe('clamp', () => {
    it('should return the value if it is between min and max', () => {
        expect(clamp(5, 4, 8)).toEqual(5);
    });
    it('should return the min value if value is below min', () => {
        expect(clamp(2, 4, 8)).toEqual(4);
    });
    it('should return the max value if value is above max', () => {
        expect(clamp(9, 4, 8)).toEqual(8);
    });
    it('should work for negative numbers', () => {
        expect(clamp(-5, -8, -4)).toEqual(-5);
        expect(clamp(-2, -8, -4)).toEqual(-4);
        expect(clamp(-9, -8, -4)).toEqual(-8);
    });
});
