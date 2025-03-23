import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltips/tooltip";

type Props = {
    handleSubtract: () => void;
    handleAdd: () => void;
    quantity: number;
    price: number;
    unit: string;
};

const IntCounter = ({ handleSubtract, handleAdd, quantity, price, unit }: Props) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 mr-1 dark:text-white">${price.toFixed(2)}</span>
            <button 
                className='text-white border px-3 py-2 text-xl bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800 dark:text-white'
                onClick={handleSubtract}
            >
                -
            </button>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span 
                            className="text-3xl font-bold text-gray-900 dark:text-white"
                            data-tooltip-target="tooltip-default"
                        >
                            {quantity}
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className='text-center justify-center'>
                            Ya se encuentran 
                            <br/>
                            en tu carrito 🫡
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <button 
                className='text-white border px-3 quantity py-2 text-xl bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800'
                onClick={handleAdd}
            >
                +
            </button>
        </div>
    );
};

export default IntCounter;