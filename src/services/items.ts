import { type Datum, type Items } from '@/types/items';
import { SITE_URL } from '@/consts/https';
import type { Category } from '@/types/categories'

export const fetchItems = async (
    { pageSize = "25", paginate = true }: 
    { 
        pageSize?: string ,
        paginate?: boolean 

    }) => {
    const queryParameter = paginate ? `?page_size=${pageSize}` : '?paginate=false'
    try {
        const res = await fetch(`${SITE_URL}/api/v1/items/${queryParameter}`)
        const resJson = await res.json()
        if (resJson.results) {
            return resJson.results as Datum[]
        }
        else {
            return resJson as Datum[]
        }
    }
    catch (error) {
        return []
    }
}

export const fetchItem = async ({ id }: { id:string}) => {
    const res = await fetch(`${SITE_URL}/api/v1/items/${id}/`)
    const item  = await (res.json()) as Datum
    return item
}

export const fetchCategories = async () => {
    const res = await fetch(`${SITE_URL}/api/v1/categories/`)
    const categories = await (res.json()) as Category[]
    return categories.sort((a, b) => b.number_of_items - a.number_of_items)
}
