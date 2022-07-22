/**
 * limits the value, so it is between min and max ([n] < min return min; [n] > max return max)
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
