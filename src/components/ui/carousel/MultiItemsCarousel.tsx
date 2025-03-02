import * as React from "react";
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
    const plugin = React.useRef(Autoplay({ delay: 3000 }));

    async function getItems() {
        const items = await fetchItems({ pageSize: "10", categories: ["Desechable"] });
        return items;
    }

    React.useEffect(() => {
        getItems().then(setItems);
    }, []);

    return (
        <div className="overflow-x-hidden w-full"> {/* Contenedor padre */}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                    dragFree: true, // Mejor experiencia táctil
                }}
                className="w-[90%] mx-auto"
                plugins={[plugin.current]}
            >
                <CarouselContent>
                    {items.map((item, index) => (
                        <CarouselItem 
                            key={item.id || index}
                            className="md:basis-1/3 lg:basis-1/5 sm:basis-1/2" // Mejor responsive
                        >
                            <div className="p-1 h-4/6 w-full">
                                <CardCatalog {...item} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                {/* Flechas modificadas para móvil */}
                <CarouselPrevious className="hidden md:flex -left-4" />
                <CarouselNext className="hidden md:flex -right-4" />
            </Carousel>
        </div>
    )
}