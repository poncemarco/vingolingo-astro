import { type Category } from "@/types/categories.ts";
export interface Items {
    links:        Links;
    start:        number;
    end:          number;
    count:        number;
    results:      Datum[];
    last_page:    number;
    current_page: number;
}

export interface Datum {
    id: string
    name: string
    unit: string
    category: Category
    price: number
    image: Image
    slug: string
}


export interface ImagePath {
    primary: string
    thumbnail: string
}

export interface Links {
    next:     string;
    previous: null;
}