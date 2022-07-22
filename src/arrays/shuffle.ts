export function shuffle<T>(array: T[]): T[] {
    const clone: T[] = [];
    for (let i = 0; i < array.length; i++) {
        let x = Math.floor(Math.random() * array.length);
        let temp = array[i];
        clone[i] = array[x];
        clone[x] = temp;
    }
    return clone;
}
