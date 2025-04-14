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

export function getItemsCount() {
    const items = ticketItems.get();
    const totalItems = Object.values(items).reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);
    return totalItems;
}


// ticketStore.ts
export function addTicketItem(item: TicketItem) {
    const existing = ticketItems.get()[item.id];
    
    const newItem = existing 
        ? { ...existing, quantity: item.quantity }
        : item;

    ticketItems.setKey(item.id, newItem);
    
    return newItem; // Devuelve el item actualizado
}

export function removeTicketItem(id: string) {
    ticketItems.setKey(id, undefined);
}
