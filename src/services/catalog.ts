import { type ItemsResponse } from "@/types/astro_responses"

export const fetchCatalog = async (
    {
        paginate = false, 
        pageSize = 12, 
        categories, 
        units } : {
        paginate?: boolean,
        pageSize?: number,
        categories?: string[],
        units?: string[]
    }
) => {
    const data = await fetch("/items.json")
    const catalog = await data.json() as ItemsResponse
    const catalogItems = catalog.items
    if (catalogItems && catalogItems.length > 0 ) {
        catalogItems.filter((item: any) => catalogItems.includes(item.category))
    }
    if (units && units.length > 0 ) {
        catalogItems.filter((item: any) => catalogItems.includes(item.unit))
    }
    if (paginate) {
        return catalogItems.slice(0, pageSize)
    }
    return catalogItems
}
