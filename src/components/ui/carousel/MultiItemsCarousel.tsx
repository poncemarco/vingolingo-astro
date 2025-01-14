import * as React from 'react';
import CardCatalog from "@/components/ui/cards/CardCatalog";
import { fetchItems } from '@/services/items';
import { type Datum } from '@/types/items';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel/carousel";
import Autoplay from "embla-carousel-autoplay"

export function MultiItemCarousel() {
    const [items, setItems] = React.useState([] as Datum[]);

    async function getItems() {
        const items = await fetchItems({ pageSize: "10" });
        return items;
    }

    React.useEffect(() => {
        getItems().then((items) => {
            setItems(items);
        });
    }, []);
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className='w-[90%] mx-auto'
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent>
                {
                    items.map((item, index) => (
                        <CarouselItem 
                            key={index}
                            className='md:basis-1/3 lg:basis-1/5 sm:basis-1/2'    
                        >
                            <div className='p-1'>
                                <CardCatalog
                                    {...item}
                                />
                            </div>
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}