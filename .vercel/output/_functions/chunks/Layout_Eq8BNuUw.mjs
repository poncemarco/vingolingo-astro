import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, g as renderSlot, b as createAstro, h as renderScript, d as renderComponent, e as createTransitionScope, i as defineStyleVars, j as renderHead } from './astro/server_CvqpSew_.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import { map } from 'nanostores';

const COLOR_PALETTE = {
  primary_color: "#2c3662",
  secondary_color: "#0e81c5",
  tertiary_color: "#7eb256"
};

const $$Astro$2 = createAstro();
const $$NavbarButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavbarButton;
  const {
    href = "/",
    hover_background_color = "#fff"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(
    ["text-gray-100 flex-row justify-center cursor-pointer text-xl focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-normal rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:text-white scale-90 gap-x-2 opacity-90 hover:opacity-100 dark:dark:text-gray-100"],
    "class:list"
  )}> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarButton.astro", void 0);

const $$NavbarSearch = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-gray-900 flex-row justify-center cursor-pointer hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:text-white scale-90 gap-x-2 opacity-90 hover:opacity-100 dark:dark:text-gray-100 relative"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <input type="search" id="search" class="p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por producto, categoria o marca" aria-label="Search" required> <div id="resultsContainer" class="absolute top-12 left-0 z-10 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto hidden"> <!-- Agregado hidden aquí --> <p id="searchReadout" class="dark:text-white my-2 px-4"></p> <ul id="searchResults" class="dark:bg-gray-800 dark:text-white"></ul> </div> </div> ${renderScript($$result, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarSearch.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarSearch.astro", void 0);

const ticketItems = map({});
function getTicketItems(id) {
  const Item = ticketItems.get()[id];
  if (!Item) {
    return null;
  }
  return Item;
}
function addTicketItem({ id, name, quantity, price, imageUrl, thumbnail, unit }) {
  const existingEntry = getTicketItems(id);
  if (existingEntry) {
    ticketItems.setKey(id, {
      ...existingEntry,
      quantity
      // Actualiza la cantidad con el valor proporcionado
    });
  } else {
    ticketItems.setKey(id, {
      id,
      name,
      price,
      quantity,
      // Usa el valor de `quantity` proporcionado
      imageUrl,
      thumbnail,
      unit
    });
  }
}

function CartButton() {
  const [total, setTotal] = React__default.useState(0);
  React__default.useEffect(() => {
    return ticketItems.listen((items) => {
      const totalItems = Object.values(items).reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setTotal(totalItems);
    });
  }, []);
  return /* @__PURE__ */ jsx("a", { href: "/carrito", children: /* @__PURE__ */ jsxs("div", { className: "text-gray-100 flex-row justify-center cursor-pointer text-xl focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-normal rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:text-white scale-90 gap-x-2 opacity-90 hover:opacity-100 dark:dark:text-gray-100", children: [
    /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart text-white", children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
      /* @__PURE__ */ jsx("path", { d: "M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
      /* @__PURE__ */ jsx("path", { d: "M17 17h-11v-14h-2" }),
      /* @__PURE__ */ jsx("path", { d: "M6 5l14 1l-1 7h-13" })
    ] }),
    /* @__PURE__ */ jsx("span", { className: "ml-2 text-white", children: total })
  ] }) });
}

const $$NavbarDesktop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-4 items-center"> <div> ${renderComponent($$result, "NavbarButton", $$NavbarButton, { "href": "/", "hover_background_color": COLOR_PALETTE.tertiary_color }, { "before": ($$result2) => renderTemplate`<img src="/logo_horizontal.png" alt="Vingolingo" class="icon icon-tabler icon-tabler-home w-64 text-white">` })} </div> <div class="justify-end"> ${renderComponent($$result, "NavbarButton", $$NavbarButton, { "href": "/", "hover_background_color": "" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`, "default": ($$result2) => renderTemplate` 
Inicio
` })} ${renderComponent($$result, "NavbarButton", $$NavbarButton, { "href": "/catalogo" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-store" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l18 0"></path><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path><path d="M5 21l0 -10.15"></path><path d="M19 21l0 -10.15"></path><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path></svg>`, "default": ($$result2) => renderTemplate` 
Productos
` })} ${renderComponent($$result, "NavbarButton", $$NavbarButton, { "href": "/#contact" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>`, "default": ($$result2) => renderTemplate` 
Contacto
` })} ${renderComponent($$result, "CartButton", CartButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/navbar/cart-button", "client:component-export": "CartButton", "data-astro-transition-persist": createTransitionScope($$result, "eed7sl7o") })} ${renderComponent($$result, "NavbarSearch", $$NavbarSearch, {})} </div> </div>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/ui/navbar/NavbarDesktop.astro", "self");

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const { primary_color } = COLOR_PALETTE;
  const $$definedVars = defineStyleVars([{
    primary_color
  }]);
  return renderTemplate`${maybeRenderHead()}<nav class="bg-primary" data-astro-cid-jp2pq5zm${addAttribute($$definedVars, "style")}> <div id="desktop-navbar" data-astro-cid-jp2pq5zm${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "NavbarDesktop", $$NavbarDesktop, { "data-astro-cid-jp2pq5zm": true })} </div> <!-- <div id="mobile-navbar">
        <NavbarMobile />
    </div> --> </nav> ${renderScript($$result, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="max-w-full"> <div class="sticky top-0 z-50 bg-white shadow-md"> ${renderSlot($$result, $$slots["navbar"])} </div> </header>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Header.astro", void 0);

const ContactInfo = {
  email: "ventas@vingolingo.com",
  phone: "5525322808",
  phone_display: "55 2532 2808"
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const { email, phone, phone_display } = ContactInfo;
  const { primary_color } = COLOR_PALETTE;
  const $$definedVars = defineStyleVars([{
    primary_color
  }]);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-primary-primary dark:bg-gray-900" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <div class="md:flex md:justify-between" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <div class="mb-6 md:mb-0" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a href="https://flowbite.com/" class="flex items-center" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <img src="/logo_horizontal.png" class="w-1/3 me-3" alt="FlowBite Logo" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}></span> </a> </div> <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <div data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Contáctanos</h2> <ul class="text-gray-200 dark:text-gray-400 font-medium" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <li class="mb-4" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a${addAttribute(`tel:+52${phone}`, "href")} class="hover:underline" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Teléfono</a> </li> <li class="mb-4" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a${addAttribute(`mailto:${email}`, "href")} class="hover:underline" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Mail</a> </li> <li data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a${addAttribute(`https://wa.me/52${phone}`, "href")} data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Whatsapp</a> </li> </ul> </div> <div data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Redes</h2> <ul class="text-gray-200 dark:text-gray-400 font-medium" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <li class="mb-4" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a href="https://github.com/themesberg/flowbite" class="hover:underline " data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Facebook</a> </li> </ul> </div> <div data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <h2 class="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Legal</h2> <ul class="text-gray-200 dark:text-gray-400 font-medium" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <li class="mb-4" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a href="#" class="hover:underline" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Política de Privacidad</a> </li> <li data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <a href="#" class="hover:underline" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Términos y Condiciones</a> </li> </ul> </div> </div> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <div class="sm:flex sm:items-center sm:justify-between" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}> <span class="text-sm text-gray-200 sm:text-center dark:text-gray-400" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>© 2023 <a href="https://flowbite.com/" class="hover:underline" data-astro-cid-35ed7um5${addAttribute($$definedVars, "style")}>Vingolingo</a>. Todos los derechos reservados.
</span> </div> </div> </footer>`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/components/layout/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template([`<script>
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

	if (typeof localStorage !== 'undefined') {
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
	}
<\/script> <html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"`, '><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Vingolingo</title>', "", "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}, { "navbar": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "slot": "navbar", "data-astro-transition-persist": createTransitionScope($$result2, "f5sodjme") })}` }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/layouts/Layout.astro", "self");

export { $$Layout as $, addTicketItem as a, getTicketItems as g, ticketItems as t };
