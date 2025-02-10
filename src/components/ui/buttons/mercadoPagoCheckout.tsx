import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { MERCADO_PAGO_PUBLIC_KEY } from 'astro:env/client';


interface Props {
    preferenceId: string;
}

const MercadoPagoCheckout: React.FC<Props> = ({ preferenceId }) => {
    useEffect(() => {
        initMercadoPago(MERCADO_PAGO_PUBLIC_KEY ); 
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <h5 className="text-gray-900 text-lg font-semibold dark:text-white">Listo para pagar</h5>
            <Wallet 
                initialization={{ preferenceId }}
                customization={{ texts: { valueProp: 'smart_option'}}}
            />
        </div>
    );
};

export default MercadoPagoCheckout;