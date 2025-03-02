import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, g as renderSlot } from '../chunks/astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Eq8BNuUw.mjs';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn, C as CardCatalog } from '../chunks/CardCatalog_DP1Fu_22.mjs';
import { f as fetchItems, a as fetchCategories } from '../chunks/items_nRyBIzIQ.mjs';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import Autoplay from 'embla-carousel-autoplay';
import { $ as $$CardCategory } from '../chunks/CardCategory_kPPv6ktG.mjs';
import { $ as $$SectionTitle } from '../chunks/SectionTitle_Bgs6JoK8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro();
const $$JumbotronText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$JumbotronText;
  const {
    title = "How to quickly deploy a static website",
    title_image = "",
    description = "",
    link = "#",
    linkText = "Read more"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8"> ${title_image ? renderTemplate`<img${addAttribute(title_image, "src")}${addAttribute(title, "alt")} class="w-96 h-auto rounded-full mb-6">` : renderTemplate`<h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">${title}</h1>`} <p class="text-5xl font-normal text-indigo-900  dark:text-gray-100 mb-6">${description}</p> <a${addAttribute(link, "href")} class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"> ${linkText} <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/jumbotron/JumbotronText.astro", void 0);

const $$Jumbotron = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-4 sm:px-8 md:px-16 lg:px-44 bg-white grid grid-cols-1 md:grid-cols-2 gap-8 p-4" id="home"> <!-- Sección de texto --> <div class="flex flex-col justify-center items-start"> <div class="w-full"> ${renderComponent($$result, "JumbotronText", $$JumbotronText, { "title_image": "/full_logo.jpeg", "description": "Soluciones pr\xE1cticas para un mundo m\xE1s verde", "link": "/catalogo/#desechables", "linkText": "\xA1Conoce nuestra l\xEDnea de desechables!" })} </div> </div> <!-- Sección de imagen --> <div class="flex justify-center items-center"> <img src="/jumbotron_image.png" alt="cleaning" class="w-auto max-h-96 md:max-h-120 lg:max-h-140" loading="lazy"> </div> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/sections/Jumbotron.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="features" class="my-8"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-indigo-900 bg-indigo-50 py-16 rounded-lg"> <!-- Primera característica --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"> <div class="flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-16 h-16 md:w-24 md:h-24 fill-indigo-500"> <path d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path> </svg> </div> <div class="text-center sm:text-left"> <h3 class="text-xl md:text-2xl font-bold"> <strong>Entrega en 48 horas</strong> <br>
Área Metropolitana
</h3> </div> </div> <!-- Segunda característica --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"> <div class="flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-16 h-16 md:w-24 md:h-24 fill-indigo-500"> <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path> </svg> </div> <div class="text-center sm:text-left"> <h3 class="text-xl md:text-2xl font-bold"> <strong>Compra Segura y a Meses</strong> <br>
Con Mercado Pago
</h3> </div> </div> <!-- Tercera característica --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"> <div class="flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-16 h-16 md:w-24 md:h-24 fill-indigo-500"> <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path> </svg> </div> <div class="text-center sm:text-left"> <h3 class="text-xl md:text-2xl font-bold"> <strong>Envío Gratis</strong> <br>
A partir de $900.00
</h3> </div> </div> </div> </div> </section>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/sections/Features.astro", void 0);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function MultiItemCarousel() {
  const [items, setItems] = React.useState([]);
  async function getItems() {
    const items2 = await fetchItems({ pageSize: "10", categories: ["Desechable"] });
    return items2;
  }
  React.useEffect(() => {
    getItems().then((items2) => {
      setItems(items2);
    });
  }, []);
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start",
        loop: true
      },
      className: "w-[90%] mx-auto",
      plugins: [
        Autoplay({
          delay: 3e3
        })
      ],
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: items.map((item, index) => /* @__PURE__ */ jsx(
          CarouselItem,
          {
            className: "md:basis-1/3 lg:basis-1/5 sm:basis-1/2",
            children: /* @__PURE__ */ jsx("div", { className: "p-1 h-4/6 w-full", children: /* @__PURE__ */ jsx(
              CardCatalog,
              {
                ...item
              }
            ) })
          },
          index
        )) }),
        /* @__PURE__ */ jsx(CarouselPrevious, {}),
        /* @__PURE__ */ jsx(CarouselNext, {})
      ]
    }
  );
}

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="carousel" class="bg-white py-20"> <div> <div> <h3 class="text-indigo-900 text-5xl text-start py-4 mx-20">Conoce nuestra linea de desechables</h3> </div> <div class="my-12"> ${renderComponent($$result, "MultiItemCarousel", MultiItemCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components//ui/carousel/MultiItemsCarousel", "client:component-export": "MultiItemCarousel" })} </div> </div> </section>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/sections/Carousel.astro", void 0);

const $$CatalogStatic = createComponent(async ($$result, $$props, $$slots) => {
  const all_categories = await fetchCategories();
  const categories = all_categories.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${categories.map((category) => renderTemplate`${renderComponent($$result, "CardCategory", $$CardCategory, { "id": category.id, "name": category.name, "image": category.image, "numberOfItems": category.number_of_items })}`)} </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/catalog/CatalogStatic.astro", void 0);

const $$Catalog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="catalogo"> <div class="bg-gray-100 rounded-xl m-20 container mx-auto items-center justify-center"> <div class="px-12"> <div class="py-14"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Conoce nuestro cat\xE1logo de productos", "description": `
                        Contamos con una amplia variedad de productos desechables para tu hogar, oficina o negocio.
                    ` })} </div> </div> <div class="px-12 pb-10"> ${renderComponent($$result, "CatalogStatic", $$CatalogStatic, {})} </div> </div> </section>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/sections/Catalog.astro", void 0);

const $$Astro$4 = createAstro();
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContactForm;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const email = data.get("email");
    } catch (error) {
      console.error(error);
    }
  }
  return renderTemplate`${maybeRenderHead()}<form method="POST" class="max-w-sm mx-auto"> <div class="mb-5"> <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
Nombre:
<input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@vingolingo.com" required> </label> </div> <div class="mb-5"> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
Email:
<input type="text" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="ejemplo@gmail.com"> </label> </div> <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
Telefono/Celular:
<input type="text" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="55 1234 5678"> </label> <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="subject">
Asunto:
<input type="text" name="subject" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> </label> <div class="mb-5"> <label for="large-input" class="for=" large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" ">
Mensaje:
</label> <input type="text" name="message" id="base-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required> </div> <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Enviar
</button> </form>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/forms/ContactForm.astro", void 0);

const $$LocationIFrame = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full h-full"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60213.05440340262!2d-99.16720713630532!3d19.3987522689473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff49e3efe0db%3A0xe99419847ab4e101!2sCasa%20Maya!5e0!3m2!1ses-419!2smx!4v1738465243551!5m2!1ses-419!2smx" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/utils/LocationIFrame.astro", void 0);

const $$Astro$3 = createAstro();
const $$CTALink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CTALink;
  const { title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(href, "href")} class="inline-flex items-center justify-center p-5 text-base font-medium text-white rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"> <span>${title}</span> ${renderSlot($$result, $$slots["icon"])} </a> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/links/CTALink.astro", void 0);

const $$Astro$2 = createAstro();
const $$WhatsAppIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhatsAppIcon;
  const { classNameStyles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(classNameStyles, "class")} viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/icons/social_media/WhatsAppIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$PhoneIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PhoneIcon;
  const { classNameStyles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"${addAttribute(classNameStyles, "class")}><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path> </svg>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/icons/contact/PhoneIcon.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="bg-white py-20"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> <!-- Columna izquierda: Formulario y botones de contacto --> <div class="px-4 md:px-20"> <h5 class="text-gray-900 text-4xl text-center py-10">Contacto</h5> <div class="grid grid-cols-2 gap-4"> <!-- Botón de teléfono --> <div class="text-center"> ${renderComponent($$result, "CTALink", $$CTALink, { "title": "", "href": "tel:+525555555555" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "PhoneIcon", $$PhoneIcon, { "slot": "icon", "classNameStyles": "text-white w-8 h-auto" })}` })} </div> <!-- Botón de WhatsApp --> <div class="text-center"> ${renderComponent($$result, "CTALink", $$CTALink, { "title": "", "href": "https://wa.me/525555555555" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "WhatsAppIcon", $$WhatsAppIcon, { "slot": "icon", "classNameStyles": "text-white w-8 h-auto" })}` })} </div> </div> <!-- Formulario de contacto --> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> <!-- Columna derecha: Mapa (iframe) --> <div class="px-4 md:px-20 w-full h-[400px] md:h-auto"> <div class="w-full h-full overflow-hidden rounded-lg shadow-lg"> ${renderComponent($$result, "LocationIFrame", $$LocationIFrame, { "class": "w-full h-full" })} </div> </div> </div> </div> </section>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/sections/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vingolingo", "description": "Vingolingo is a wine shop that offers a wide variety of wines from all over the world." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Jumbotron", $$Jumbotron, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Carrousel", $$Carousel, {})} ${renderComponent($$result2, "Catalog", $$Catalog, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/index.astro", void 0);

const $$file = "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
