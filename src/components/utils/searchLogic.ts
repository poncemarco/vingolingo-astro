// searchLogic.ts
import DOMPurify from 'dompurify';
import Fuse, { type IFuseOptions } from 'fuse.js';
import { generateSearchList } from '@/components/utils/SearchList';
import { SPINNER } from '@/components/ui/loaders/spinner.ts';
import type { Datum } from '@/types/items';
import type { Category } from '@/types/categories';

export function initializeSearch(
    searchInput: HTMLInputElement,
    searchReadout: HTMLParagraphElement,
    resultsList: HTMLUListElement,
    resultsContainer: HTMLDivElement
) {
    let SEARCH_DATA: Datum[];
    let SEARCH_CATEGORY_DATA: Category[];
    let FUSE_INSTANCE: Fuse<Datum>;
    let FUSE_CATEGORY_INSTANCE: Fuse<Category>;

    const FUSE_OPTIONS: IFuseOptions<Datum> = {
        includeScore: true,
        shouldSort: true,
        keys: [
            { name: 'name', weight: 0.7 },
            { name: 'category', weight: 0.5 },
            { name: 'unit', weight: 0.3 },
        ],
        threshold: 0.5,
    };

    const FUSE_CATEGORY_OPTIONS: IFuseOptions<Category> = {
        includeScore: true,
        shouldSort: true,
        keys: [{ name: 'name', weight: 0.5 }],
        threshold: 0.5,
    };

    async function fetchSearchResults(search: string): Promise<void> {
        if (search.length === 0) {
            resultsList.innerHTML = '';
            searchReadout.textContent = '';
            resultsContainer.classList.add('hidden');
            return;
        }

        resultsList.innerHTML = SPINNER;
        resultsContainer.classList.remove('hidden');

        if (!SEARCH_DATA) {
            try {
                const res = await fetch('/items.json');
                if (!res.ok) throw new Error('Something went wrong…please try again');
                const data = await res.json();
                SEARCH_DATA = data.items as Datum[];
                SEARCH_CATEGORY_DATA = data.categories as Category[];
            } catch (e) {
                console.error(e);
            }
        }

        if (SEARCH_DATA && !FUSE_INSTANCE) {
            FUSE_INSTANCE = new Fuse(SEARCH_DATA, FUSE_OPTIONS);
            FUSE_CATEGORY_INSTANCE = new Fuse(SEARCH_CATEGORY_DATA, FUSE_CATEGORY_OPTIONS);
        }

        if (!FUSE_INSTANCE) return;

        const searchResult = FUSE_INSTANCE.search(search);
        const categoryResult = FUSE_CATEGORY_INSTANCE.search(search);
        const items = searchResult.map((result) => result.item);
        const categories = categoryResult.map((result) => result.item);

        resultsList.innerHTML =
            searchResult.length > 0
                ? generateSearchList({ items, categories })
                : "<li class='text-center text-gray-500 dark:text-gray-400'>No se encontraron resultados</li>";
    }

    function updateSearchReadout(search: string): void {
        searchReadout.textContent = search
            ? `Resultados de búsqueda para: ${search}`
            : 'Busca productos';
    }

    // Eventos
    searchInput.addEventListener('input', () => {
        const searchInputValue = DOMPurify.sanitize(searchInput.value);
        fetchSearchResults(searchInputValue);
        updateSearchReadout(searchInputValue);
    });

    searchInput.addEventListener('focus', () => {
        const searchTerm = DOMPurify.sanitize(searchInput.value);
        fetchSearchResults(searchTerm);
        updateSearchReadout(searchTerm);
    });

    searchInput.addEventListener('input', () => {
        const searchInputValue = DOMPurify.sanitize(searchInput.value);
        console.log("Texto ingresado:", searchInputValue); // Debug: Verifica que esto se imprima
        fetchSearchResults(searchInputValue);
        updateSearchReadout(searchInputValue);
    });
}