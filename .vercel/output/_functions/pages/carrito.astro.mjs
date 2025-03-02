import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CvqpSew_.mjs';
import 'kleur/colors';
import { t as ticketItems, $ as $$Layout } from '../chunks/Layout_Eq8BNuUw.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function Ticket() {
  const $ticketAmountFreeShipment = 900;
  const $ticketItems = useStore(ticketItems);
  const [shipment, setShipment] = useState(90);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState($ticketAmountFreeShipment);
  useEffect(() => {
    const percent = total / 900 * 100;
    if (percent >= 100) {
      setProgress(100);
      setShipment(0);
      setRemaining(0);
      return;
    } else {
      setProgress(percent);
      setShipment(90);
      setRemaining(900 - total);
    }
  }, [$ticketItems]);
  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      ticketItems.setKey(id, void 0);
      return;
    }
    const existingEntry = ticketItems.get()[id];
    ticketItems.setKey(id, {
      ...existingEntry,
      quantity
    });
  };
  const total = Object.values($ticketItems).reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const addItemToTicket = (id) => {
    const existingEntry = ticketItems.get()[id];
    ticketItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1
    });
  };
  const removeItemFromTicket = (id) => {
    if ($ticketItems[id].quantity - 1 <= 0) {
      ticketItems.setKey(id, void 0);
      return;
    }
    const existingEntry = ticketItems.get()[id];
    ticketItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity - 1
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-2xl px-4 py-1 sm:px-6 sm:py-12 lg:px-2", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
      /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: Object.values($ticketItems).map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: item.thumbnail,
            alt: "",
            className: "h-16 w-16 rounded object-cover"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm text-gray-900 dark:text-white", children: item.name }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-0.5 space-y-px text-[10px] text-gray-600 dark:text-gray-100", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "inline", children: "Unidad:" }),
              /* @__PURE__ */ jsx("dd", { className: "inline", children: item.unit })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "inline", children: "$" }),
              /* @__PURE__ */ jsx("dd", { className: "inline", children: item.price.toFixed(2) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-end gap-2 dark:text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "Line1Qty", className: "sr-only", children: " Quantity " }),
            /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => removeItemFromTicket(item.id),
                className: "py-1 px-4 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
                children: "-"
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "number",
                min: "1",
                value: item.unit === "KG" ? item.quantity.toFixed(2) : item.quantity,
                id: "Line1Qty",
                onChange: (e) => handleQuantityChange(item.id, parseFloat(e.target.value)),
                className: "h-8 w-8 rounded border-gray-200 bg-gray-50 p-0 mr-2 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => addItemToTicket(item.id),
                className: "py-1 px-4 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
                children: "+"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "text-gray-600 transition hover:text-red-600",
              onClick: () => ticketItems.setKey(item.id, void 0),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Remove item" }),
                /* @__PURE__ */ jsx(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "h-4 w-4 text-gray-900 dark:text-white",
                    children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      }
                    )
                  }
                )
              ]
            }
          )
        ] })
      ] }, item.name)) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full bg-gray-200 my-6 rounded-full h-2.5 dark:bg-gray-700", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-blue-600 h-2.5 rounded-full", style: { width: `${progress}%` } }),
        /* @__PURE__ */ jsx("div", { children: remaining > 0 ? /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-xs my-2 dark:text-gray-100", children: "$" + remaining.toFixed(2) + " para envío gratis" }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center text-green-500 my-2", children: [
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-circle-check-filled", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z", strokeWidth: "0", fill: "currentColor" })
          ] }),
          /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-truck-delivery", width: "24", height: "24", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
            /* @__PURE__ */ jsx("path", { d: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" }),
            /* @__PURE__ */ jsx("path", { d: "M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" }),
            /* @__PURE__ */ jsx("path", { d: "M3 9l4 0" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-end border-t border-gray-100 pt-8", children: /* @__PURE__ */ jsx("div", { className: "w-screen max-w-lg space-y-4", children: /* @__PURE__ */ jsxs("dl", { className: "space-y-0.5 text-sm text-gray-700", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-800 dark:text-white", children: [
          /* @__PURE__ */ jsx("dt", { children: "Envío:" }),
          /* @__PURE__ */ jsx("dd", { children: shipment === 0 ? "Gratis" : shipment.toFixed(2) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between !text-base font-medium text-gray-800 dark:text-white", children: [
          /* @__PURE__ */ jsx("dt", { children: "Total" }),
          /* @__PURE__ */ jsxs("dd", { children: [
            "$",
            (total + shipment).toFixed(2)
          ] })
        ] })
      ] }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsx(
      "a",
      {
        href: "/compra",
        className: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
        children: "Ir a envío de ticket"
      }
    ) })
  ] });
}

const $$Carrito = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "carrito" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-2 mx-auto max-w-xl lg:py-16 lg:px-6 xl:max-w-5xl"> <div class="mx-auto text-center mb-8 lg:mb-16"> ${renderComponent($$result2, "TicketOrder", Ticket, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/ticket/Ticket", "client:component-export": "default" })} </div> </section> ` })}`;
}, "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/carrito.astro", void 0);

const $$file = "/Users/marco_cap/Documents/CurrentProjects/vingolingo-front/src/pages/carrito.astro";
const $$url = "/carrito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carrito,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
