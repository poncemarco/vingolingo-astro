import type React from "react";
import type { User } from "@/types/users";
import type { Address } from "@/types/locations";

export interface IDQuantityList {
    id: string,
    quantity: number
}
export interface Order {
    items: IDQuantityList[]
    phone: string
    name: string
    email: string
    coupon: string | null
    user: User
    address: Address
}


export interface OrderResponse {
    success: boolean;
    id: string;
    discount?: number | null;
}

export interface OrderState {
    success: boolean;
    id?: number | null;
    discount?: number | null;
    setOrderResponse: React.Dispatch<
    React.SetStateAction<{
        success: boolean;
        id?: number | null;
        discount?: number | null;
    }>>;
}

