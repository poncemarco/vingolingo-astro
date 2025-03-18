import { type TicketItemDisplayInfo, addTicketItem } from '@/stores/ticketStore.ts';
import { useState, useEffect } from 'react';
import Toast from '@/components/ui/notifications/Toast.tsx';
import IntCounter from '@/components/utils/IntCounter.tsx';
import FloatCounter from '@/components/utils/FloatCounter.tsx';
import ImageWithFallback from '@/components/utils/ImageWithFallback.tsx';
import type { Datum } from '@/types/items.ts';
import { getTicketItems } from '@/stores/ticketStore.ts';

export default function CardCatalog({ name, price, image, id, unit, category, slug }: Datum) {
    const [quantity, setQuantity] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [lastQuantity, setLastQuantity] = useState(1);
    const [item, setItem] = useState<TicketItemDisplayInfo>({
        id: id,
        name: name,
        price: price ? price : 0,
        quantity: quantity,
        imageUrl: image && image.image_path && image.image_path.primary ? image.image_path.primary : '',
        thumbnail: image && image.image_path && image.image_path.thumbnail ? image.image_path.thumbnail : '',
        unit: unit,
    });


    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleSubtract = () => {
        if (quantity === 0) return;
        setQuantity(quantity - 1);
    };

    const saveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const updatedQuantity = quantity === 0 ? 1 : quantity;
        if (quantity === 0) {
            setQuantity(1);
        }
        setItem((prevItem) => {
            const updatedItem = {
                ...prevItem,
                quantity: updatedQuantity,
            };

            addTicketItem(updatedItem);

            setShowToast(true);
            setLastQuantity(updatedQuantity);

            return updatedItem;
            });
    };

    const updateFromTicket = () => {
        const itemInTicket = getTicketItems(id);
        if (itemInTicket) {
            setQuantity(itemInTicket.quantity);
        }
    };

    useEffect(() => {
        updateFromTicket();
    }, []);

    return (
        <div className="relative item-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ImageWithFallback
                src={item.imageUrl}
                alt={name}
                defaultSrc="https://muuch-dev.s3.us-east-2.amazonaws.com/media/default/images/default_image.png"
            />
            <div className="px-5 pb-5">
                <h4 className="text-xl h-12 font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h4>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <p className='text-gray-900 dark:text-white'>{category}</p>
                    </div>
                    <span className="text-gray-900 bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{item.unit}</span>
                </div>
                {item.unit === 'KG' ? (
                    <FloatCounter
                        item={item}
                        setQuantity={setQuantity}
                        saveItem={saveItem}
                        price={item.price}
                    />
                ) : (
                    <IntCounter
                        handleSubtract={handleSubtract}
                        quantity={quantity}
                        unit={unit}
                        handleAdd={handleAdd}
                        saveItem={saveItem}
                        price={item.price}
                    />
                )}
            </div>
            {showToast && (
                <Toast name={name} quantity={lastQuantity} itsKg={unit === "KG"} />
            )}
        </div>
    );
}