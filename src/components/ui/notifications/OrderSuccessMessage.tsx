import React from 'react';

interface OrderSuccessMessageProps {
    orderId: any;
}

export const OrderSuccessMessage: React.FC<OrderSuccessMessageProps> = ({ orderId }) => (
    <div className="flex flex-col items-center justify-center text-green-500 font-medium my-24">
        <div className="w-full container mx-auto my-8 p-8 rounded shadow-lg">
            <div className='flex items-center justify-center sm:my-10'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                <p className="ml-2">Gracias por tu compra</p>
            </div>
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                </div>
                <div className="ml-4">
                    <h2 className="text-gray-900 text-lg font-semibold dark:text-white">
                        Ya recibimos tu pedido 
                    </h2>
                </div>
            </div>
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                </div>
                <div className="ml-4">
                    <h2 className="text-gray-900 text-lg font-semibold dark:text-white">
                        Ya tratamos de contactarte vía Whatsapp o SMS.
                    </h2>
                </div> 
            </div>
            <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-receipt-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" /><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" /></svg>
                </div>
                <div className="ml-4">
                    <h2 className="text-gray-900 text-lg font-semibold dark:text-white">
                        Este es tu número de pedido: <span className="font-bold">{orderId.id}</span>
                    </h2>
                </div> 
            </div>
        </div>
    </div>
);