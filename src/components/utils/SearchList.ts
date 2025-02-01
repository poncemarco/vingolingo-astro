import type { Category }  from "@/types/categories"; 
import type { Datum } from "@/types/items";

export const generateSearchList = (results: { items: Datum[]; categories: Category[]; }) => {
    const searchItems = results.items.map((r) => {
        const { name, unit, slug, image, price } = r;
        const { image_path } = image;
        const { thumbnail } = image_path;
        return `<li class="pb-3 sm:pb-4">
                    <a href="/catalogo/${slug}">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full" src="${ thumbnail}" alt="Neil image">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    ${name}
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    ${unit}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                $${price.toFixed(2)}
                            </div>
                        </div>
                    </a>
                </li> `
    })
    .join('');

    const categoryList = results.categories.map((category) => {
        const { name, number_of_items } = category;
        // Aquí puedes definir cómo deseas representar cada categoría
        return `<li class="pb-3 sm:pb-4">
                    <a href="/categorias/${name.toLowerCase()}/1">
                        <div class="flex items-center space-x-4 rtl:space-x-reverse">
                            <div class="flex-1 min-w-0">
                                <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                                    ${name}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                ${number_of_items} <br/>
                                artículos
                            </div>
                        </div>
                    </a>
                </li> `
    })
    .join('');

    return categoryList + searchItems;
}