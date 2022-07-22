import {chunk} from './chunk';
import {clamp} from '../numbers/clamp';

/**
 * Pages array items based on current page and page size
 */
export function paginate<T>(index: number, size: number, array: T[]): T[] {
    const pages = chunk(size, array);
    return pages[clamp(index, 0, pages.length - 1)];
}
