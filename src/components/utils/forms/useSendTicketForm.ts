// useSendTicketForm.ts
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { ticketItems } from '@/stores/ticketStore';
import { sendOrder } from '@/services/order.ts';
import { userInfo } from '@/stores/userInfoStore';
import type { Order, IDQuantityList, OrderResponse} from '@/types/orders';
import type {  User } from '@/types/users';
import type { Address } from '@/types/locations';


export function useSendTicketForm() {
    const initialAddress: Address = {
        street: '',
        city: '',
        state: '',
        county: '',
        neighborhood: '',
        complement: '',
        postalCode: '',
    };

    const [orderId, setOrderId] = useState<OrderResponse>({ success: false, id: "", discount: null });
    const [address, setAddress] = useState<Address>(initialAddress);
    const [phone, setPhone] = useState(userInfo.get().phone);
    const [name, setName] = useState(userInfo.get().name);
    const [email, setEmail] = useState(userInfo.get().email);
    const [coupon, setCoupon] = useState("");
    const [orderSent, setOrderSent] = useState(false);
    const [sendingOrder, setSendingOrder] = useState(false);
    const [readyToSend, setReadyToSend] = useState(false);
    const [errorWhileSendingTicket, setErrorWhileSendingTicket] = useState(false);
    const [error, setError] = useState({ phone: "", name: "", email: "" });
    const [preferenceId, setPreferenceId] = useState<string>("");

    const $ticketItems = useStore(ticketItems);

    const total = Object.values($ticketItems).reduce((acc, item) => acc + item.price * item.quantity, 0);

    const validateFields = () => {
        let newErrors = { phone: "", name: "", email: "" };

        if (name.length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres";
        if (phone.length < 10) newErrors.phone = "El número de teléfono debe tener al menos 10 caracteres";
        if (email.length < 5) newErrors.email = "El email debe tener al menos 5 caracteres";

        setError(newErrors);
        return Object.values(newErrors).every(err => !err);
    };

    const sendTicket = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!validateFields() || Object.keys($ticketItems).length < 1) {
            alert('No hay productos en el ticket');
            return;
        }

        setSendingOrder(true);

        const ticket: IDQuantityList[] = Object.values($ticketItems).map((ticketItem) => ({
            id: ticketItem.id,
            quantity: ticketItem.quantity,
        }));

        const user: User = { phone, name, email };
        const data: Order = { items: ticket, phone, name, email, user, coupon, address };

        const response = await sendOrder(data);
        
        if (response.success) {
            setOrderId(response);
            setPreferenceId(response.id);
            setOrderSent(true);
            Object.values($ticketItems).forEach(ticketItem => ticketItems.setKey(ticketItem.id, undefined));
        }

        setErrorWhileSendingTicket(!response.success);
        setSendingOrder(false);
    };

    useEffect(() => {
        userInfo.set({ name, email, address, phone });

        if (Object.keys($ticketItems).length > 0 && phone.length > 9 && name.length > 2 && email.length > 5) {
            setReadyToSend(true);
        } else {
            setReadyToSend(false);
        }
    }, [$ticketItems, phone, name, email, address]);

    return {
        orderId,
        address,
        setAddress,
        phone,
        setPhone,
        name,
        setName,
        email,
        setEmail,
        coupon,
        setCoupon,
        orderSent,
        sendingOrder,
        errorWhileSendingTicket,
        error,
        total,
        sendTicket,
        preferenceId
    };
}