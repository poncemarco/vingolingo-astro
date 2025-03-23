import React from 'react';

type Props = {
    quantity: number;
    setQuantity: (quantity: number) => void;
    price: number;
};

const FloatCounter = ({ setQuantity, price, quantity }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        // Validación para números positivos
        if (!isNaN(value) && value >= 0) {
            setQuantity(value);
        }
    };

    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex items-center justify-center'>
                <span className="text-3xl font-bold text-gray-900 mr-1 dark:text-white">
                    ${price.toFixed(2)}
                </span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">/Kg</span>
            </div>
            
            <div className='space-y-4'>
                <div className='flex items-center justify-center gap-2'>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={quantity.toFixed(1)}
                        onChange={handleChange}
                        className="h-10 w-24 rounded border-gray-200 bg-gray-50 p-2 text-center text-xl text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Kg</span>
                </div>
            </div>
        </div>
    );
};

export default FloatCounter;