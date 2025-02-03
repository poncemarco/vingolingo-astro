import { map } from 'nanostores';

export type TicketItem = {
    id: string,
    name: string,
    price: number,
    quantity: number,
    imageUrl: string,
    thumbnail: string,
    unit: string,
}


export type TicketItemDisplayInfo = Pick<TicketItem, 'id' | 'name' | 'price' | 'quantity'| 'imageUrl' | 'thumbnail' | 'unit'>;



export const ticketItems = map<Record<string, TicketItem | any>>({});

export function getTicketItems(id : string) {
    const Item = ticketItems.get()[id];
    if (!Item) {
        return null;
    }
    return Item;
}


export function addTicketItem({ id, name, quantity, price, imageUrl, thumbnail, unit }: TicketItem) {
    const existingEntry = getTicketItems(id);
    if (existingEntry) {
        ticketItems.setKey(id, {
            ...existingEntry,
            quantity: quantity, // Actualiza la cantidad con el valor proporcionado
        });
    } else {
        ticketItems.setKey(id, {
            id,
            name,
            price,
            quantity: quantity, // Usa el valor de `quantity` proporcionado
            imageUrl,
            thumbnail,
            unit,
        });
    }
}

export function removeTicketItem(id: string) {
    ticketItems.setKey(id, undefined);
}
