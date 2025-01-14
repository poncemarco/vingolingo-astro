import type { Datum } from '@/types/items';
import type { Category } from '@/types/categories';

export interface ItemsResponse {
    items: Datum[];
    categories: Category[];
}
