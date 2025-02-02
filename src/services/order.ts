import type { IDQuantityList, Order, OrderResponse} from '@/types/orders';
import { SITE_URL } from '@/consts/https';

export const sendOrder = async (order : Order): Promise<OrderResponse> => {
    const { user, items: $ticketItems, coupon, address } = order;
    const url = `${SITE_URL}/api/v1/orders/`;
    let ticket : IDQuantityList[]
        ticket = Object.values($ticketItems).map((ticketItem) => {
            const item: IDQuantityList = {
                id: ticketItem.id,
                quantity: ticketItem.quantity,
            };
            return item;
        });

        const data: Order = {
            items: ticket,
            phone: user.phone,
            name: user.name,
            email: user.email,
            user: user,
            coupon: coupon,
            address: address,
        };
    
        
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            return {
                success: false,
                id: null,
                discount: null,
            }
        }

        const response = await res.json();
        const orderResponse: OrderResponse = {
            success: true,
            id: response.id,
            discount: response.discount,
        };
        return orderResponse;
        
    };