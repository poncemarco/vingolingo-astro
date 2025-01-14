import { type Address } from "@/types/locations";
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
    category: string
    price: number
    image: Image
    slug: string
}

export interface Image {
    image_path: ImagePath
}

export interface ImagePath {
    primary: string
    thumbnail: string
}

export interface Links {
    next:     string;
    previous: null;
}