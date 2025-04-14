import React from "react";
import { ticketItems, getItemsCount } from "@/stores/ticketStore";

export function CartButton() {
    let firstCount = getItemsCount();
    const [total, setTotal] = React.useState(firstCount);

    React.useEffect(() => {
        return ticketItems.listen((items) => {
            const totalItems = Object.values(items).reduce((acc, item) => {
                return acc + item.quantity;
            }, 0);
            setTotal(totalItems);
        });
    }, []);
    return (
        <a href="/carrito">
            <div className='text-gray-100 flex-row justify-center cursor-pointer text-xl focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-normal rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:text-white scale-90 gap-x-2 opacity-90 hover:opacity-100 dark:dark:text-gray-100'>
            <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>     
                <span className='ml-2 text-white'>{total}</span>
            </div>
        </a>
    )
}