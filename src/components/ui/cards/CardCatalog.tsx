import { useEffect, useState, useRef } from 'react';
import { type TicketItemDisplayInfo, addTicketItem, getTicketItems } from '@/stores/ticketStore.ts';
import Toast from '@/components/ui/notifications/Toast.tsx';
import IntCounter from '@/components/utils/IntCounter.tsx';
import FloatCounter from '@/components/utils/FloatCounter.tsx';
import ImageWithFallback from '@/components/utils/ImageWithFallback.tsx';
import type { Datum } from '@/types/items.ts';

export default function CardCatalog({ name, price, image, id, unit, category, slug }: Datum) {
    const [quantity, setQuantity] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const isInitialMount = useRef(true);

    // Sincronización automática con el store
    useEffect(() => {
        if (isInitialMount.current) {
            // Carga inicial desde el store
            const storedItem = getTicketItems(id);
            if (storedItem) setQuantity(storedItem.quantity);
            isInitialMount.current = false;
        } else {
            // Guarda automáticamente al detectar cambios
            const updatedItem = {
                id,
                name,
                price: price || 0,
                quantity,
                imageUrl: image?.image_path?.primary || '',
                thumbnail: image?.image_path?.thumbnail || '',
                unit,
            };
            addTicketItem(updatedItem);
            setShowToast(true);
        }
    }, [quantity]); // Se ejecuta cada vez que cambia quantity

    const handleAdd = () => setQuantity(prev => prev + 1);
    const handleSubtract = () => setQuantity(prev => Math.max(0, prev - 1));

    return (
        <div className="relative item-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ImageWithFallback
                src={image?.image_path?.primary}
                alt={name}
                defaultSrc="https://muuch-dev.s3.us-east-2.amazonaws.com/media/default/images/default_image.png"
            />
            <div className="px-5 pb-5">
                <h4 className="text-xl h-12 font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h4>
                <div className="flex items-center mt-2.5 mb-5">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <p className='text-gray-900 dark:text-white'>{category}</p>
                    </div>
                    <span className="text-gray-900 bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{unit}</span>
                </div>
                {unit === 'KG' ? (
                    <FloatCounter
                        setQuantity={setQuantity}
                        price={price}
                        quantity={quantity}
                    />
                ) : (
                    <IntCounter
                        handleSubtract={handleSubtract}
                        handleAdd={handleAdd}
                        quantity={quantity}
                        unit={unit}
                        price={price}
                    />
                )}
            </div>
            {showToast && (
                <Toast 
                    name={name} 
                    quantity={quantity}
                    itsKg={unit === "KG"}
                />
            )}
        </div>
    );
}