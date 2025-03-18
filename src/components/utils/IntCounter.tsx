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
    saveItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
    quantity: number;
    price: number;
    unit: string;
    };


const IntCounter = ({ handleSubtract, handleAdd, saveItem, price, quantity, unit }: Props) => {

  const addAndSave = (event : React.MouseEvent<HTMLButtonElement>) => {
      handleAdd();
      saveItem(event);
    }
  const subtractAndSave = (event : React.MouseEvent<HTMLButtonElement>) => {
      handleSubtract();
      saveItem(event);
    }

  return (
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 mr-1 dark:text-white">${price.toFixed(2)}</span>
      <button 
        className='text-white border px-3 py-2 text-xl bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800 dark:text-white'
        onClick={ subtractAndSave }
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
            en tu carrito 🫡</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
      <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
          <div className="tooltip-arrow" data-popper-arrow>
            Estos productos ya estan agregados a tu carrito 🫡
          </div>
      </div>
      <button 
        className='text-white border px-3 quantity py-2 text-xl bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-800'
        onClick={addAndSave}
      >
        +
      </button>
    </div>
  );
};

export default IntCounter;